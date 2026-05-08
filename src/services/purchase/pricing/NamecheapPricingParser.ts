import { NamecheapHttpClient } from '../dns/NamecheapHttpClient';
import { NamecheapPricingRequestBuilder } from '../pricing/NamecheapPricingRequestBuilder';
import { NamecheapPricingResponseParser } from '../pricing/NamecheapPricingResponseParser';
import { NamecheapPricingMapper } from '../mappers/NamecheapPricingMapper';
import { NamecheapPricingErrorHandler } from './NamecheapPricingErrorHandler';

export class NameCheapDomainPricingService {
  constructor(
    private readonly http: NamecheapHttpClient,
    private readonly parser: NamecheapPricingResponseParser,
    private readonly errorHandler: NamecheapPricingErrorHandler,
    private readonly apiUser: string,
    private readonly apiKey: string,
    private readonly userName: string,
    private readonly clientIp: string
  ) {}

  public async getPricing(domain: string) {
    let pricing = null;
    let errors: string[] = [];
    let errorType: string | null = null;
    let rawXml = '';

    try {
      const params = NamecheapPricingRequestBuilder.build(
        this.apiUser,
        this.apiKey,
        this.userName,
        this.clientIp,
        domain
      );

      rawXml = await this.http.get(params);

      const parsed = await this.parser.parse(rawXml);

      const error = this.errorHandler.handleParsed(parsed);

      if (error) {
        errors.push(error.message);
        errorType = error.type;
      } else {
        pricing = NamecheapPricingMapper.fromXml(parsed);

        if (!pricing) {
          const mapError = this.errorHandler.handleMapping();
          errors.push(mapError.message);
          errorType = mapError.type;
        }
      }
    } catch (e: any) {
      errors.push(e.message);
      errorType = 'UNKNOWN';
    }

    return {
      domain,
      pricing,
      errors,
      errorType,
      rawXml,
    };
  }
}