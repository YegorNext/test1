import { NamecheapHttpClient } from './dns/NamecheapHttpClient';
import { NamecheapPricingRequestBuilder } from './pricing/NamecheapPricingRequestBuilder';
import { NamecheapPricingResponseParser } from './pricing/NamecheapPricingResponseParser';
import { NamecheapPricingErrorHandler } from './pricing/NamecheapPricingErrorHandler';
import { NamecheapPricingMapper } from './mappers/NamecheapPricingMapper';
import { NamecheapAccount } from '../../types/NamecheapAccount';

type PricingResult = {
  domain: string;
  pricing: any | null;
  errors: string[];
  errorType: string | null;
  rawXml: string;
};

export class NameCheapDomainPricingService {
  private readonly errorHandler = new NamecheapPricingErrorHandler();

  constructor(
    private readonly http: NamecheapHttpClient,
    private readonly parser: NamecheapPricingResponseParser,
    private readonly account: NamecheapAccount,
  ) {}

  async getPricing(domain: string): Promise<PricingResult> {
    let rawXml = '';

    try {
      const params = NamecheapPricingRequestBuilder.build(this.account, domain);

      rawXml = await this.http.get(params);

      const parsed = await this.parser.parse(rawXml);

      const error = this.errorHandler.handleParsed(parsed);

      if (error) {
        return this.fail(domain, rawXml, error.message, error.type);
      }

      const pricing = NamecheapPricingMapper.fromXml(parsed);

      if (!pricing) {
        const mapError = this.errorHandler.handleMapping();
        return this.fail(domain, rawXml, mapError.message, mapError.type);
      }

      return {
        domain,
        pricing,
        errors: [],
        errorType: null,
        rawXml,
      };
    } catch (e: unknown) {
      const message =
        e instanceof Error ? e.message : 'UNKNOWN_ERROR';

      return this.fail(domain, rawXml, message, 'UNKNOWN');
    }
  }

  private fail(
    domain: string,
    rawXml: string,
    message: string,
    errorType: string,
  ): PricingResult {
    return {
      domain,
      pricing: null,
      errors: [message],
      errorType,
      rawXml,
    };
  }
}