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
    try {
      const params = NamecheapPricingRequestBuilder.build(
        this.apiUser,
        this.apiKey,
        this.userName,
        this.clientIp,
        domain
      );

      const xml = await this.http.get(params);

      const parsed = await this.parser.parse(xml);

      if (!parsed) {
        return this.fail(domain, 'Invalid XML response', xml);
      }

      const status = parsed?.ApiResponse?.$?.Status;

      if (status !== 'OK') {
        const error = parsed?.ApiResponse?.Errors?.Error;

        const message =
          typeof error === 'string'
            ? error
            : error?._ || 'Unknown Namecheap API error';

        return this.fail(domain, message, xml);
      }

      const pricing = NamecheapPricingMapper.fromXml(parsed);

      if (!pricing) {
        return this.fail(domain, 'Mapping failed', xml);
      }

      return {
        domain,
        pricing,
        errors: [],
        rawXml: xml,
      };
    } catch (e: any) {
      return this.fail(domain, e.message || 'UNKNOWN_ERROR', '');
    }
  }

  private fail(domain: string, message: string, xml: string) {
    return {
      domain,
      pricing: null,
      errors: [message],
      rawXml: xml,
    };
  }
}