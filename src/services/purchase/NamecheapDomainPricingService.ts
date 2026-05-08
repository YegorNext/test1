import { NamecheapHttpClient } from './dns/NamecheapHttpClient';
import { NamecheapPricingRequestBuilder } from './pricing/NamecheapPricingRequestBuilder';
import { NamecheapPricingResponseParser } from './pricing/NamecheapPricingResponseParser';
import { NamecheapPricingMapper } from './mappers/NamecheapPricingMapper';

export class NameCheapDomainPricingService {
  constructor(
    private readonly http: NamecheapHttpClient,
    private readonly parser: NamecheapPricingResponseParser,
    private readonly apiUser: string,
    private readonly apiKey: string,
    private readonly userName: string,
    private readonly clientIp: string
  ) {}

  public async getPricing(domain: string) {
    let xml = '';
    let parsed: any = null;

    try {
      const params = this.buildParams(domain);
      this.log('REQUEST PARAMS', params);

      xml = await this.http.get(params);
      this.log('RAW XML', xml);

      parsed = await this.parser.parse(xml);
      this.log('PARSED XML', parsed);

      const apiError = this.extractApiError(parsed);
      if (apiError) {
        return this.fail(domain, xml, apiError);
      }

      // ✅ ВАЖНО: берём правильный уровень вложенности
      const root =
        parsed?.ApiResponse?.CommandResponse?.UserGetPricingResult;

      const pricing = NamecheapPricingMapper.fromXml(root);

      if (!pricing) {
        return this.fail(domain, xml, 'Failed to map pricing structure');
      }

      return this.success(domain, xml, pricing);
    } catch (e: any) {
      return this.fail(domain, xml, e.message || 'UNKNOWN_ERROR');
    }
  }

  private buildParams(domain: string) {
    return NamecheapPricingRequestBuilder.build(
      this.apiUser,
      this.apiKey,
      this.userName,
      this.clientIp,
      domain
    );
  }

  private extractApiError(parsed: any): string | null {
    if (!parsed) return 'Invalid or empty API response';

    const status = parsed?.ApiResponse?.$?.Status;

    if (status !== 'OK') {
      const errorNode = parsed?.ApiResponse?.Errors?.Error;

      return typeof errorNode === 'string'
        ? errorNode
        : errorNode?._ || 'Unknown Namecheap API error';
    }

    return null;
  }

  private success(domain: string, xml: string, pricing: any) {
    return {
      domain,
      pricing,
      errors: [],
      rawXml: xml,
    };
  }

  private fail(domain: string, xml: string, message: string) {
    return {
      domain,
      pricing: null,
      errors: [message],
      rawXml: xml,
    };
  }

  private log(label: string, data: any) {
    console.log(`[NAMECHEAP][PRICING] ${label}:`, data);
  }
}