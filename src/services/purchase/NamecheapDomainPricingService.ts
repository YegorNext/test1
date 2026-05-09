import { NamecheapHttpClient } from './dns/NamecheapHttpClient';
import { NamecheapPricingRequestBuilder } from './pricing/NamecheapPricingRequestBuilder';
import { NamecheapPricingResponseParser } from './pricing/NamecheapPricingResponseParser';
import { NamecheapPricingErrorHandler } from './pricing/NamecheapPricingErrorHandler';
import { NamecheapPricingMapper } from './mappers/NamecheapPricingMapper';
import { NamecheapAccount } from '../../types/NamecheapAccount';

export class NameCheapDomainPricingService {
  private readonly errorHandler = new NamecheapPricingErrorHandler();

  constructor(
    private readonly http: NamecheapHttpClient,
    private readonly parser: NamecheapPricingResponseParser,
    private readonly account: NamecheapAccount,
  ) {}

  async getPricing(domain: string) {
    let rawXml = '';

    try {
      const params = NamecheapPricingRequestBuilder.build(this.account, domain);
      rawXml = await this.http.get(params);

      const parsed = await this.parser.parse(rawXml);

      const error = this.errorHandler.handleParsed(parsed);
      if (error) {
        return { domain, pricing: null, errors: [error.message], errorType: error.type, rawXml };
      }

      const pricing = NamecheapPricingMapper.fromXml(parsed);
      if (!pricing) {
        const mapError = this.errorHandler.handleMapping();
        return { domain, pricing: null, errors: [mapError.message], errorType: mapError.type, rawXml };
      }

      return { domain, pricing, errors: [], errorType: null, rawXml };
    } catch (e: any) {
      return { domain, pricing: null, errors: [e.message ?? 'UNKNOWN_ERROR'], errorType: 'UNKNOWN', rawXml };
    }
  }
}
