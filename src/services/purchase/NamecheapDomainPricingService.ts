import { NamecheapHttpClient } from './dns/NamecheapHttpClient';
import { NamecheapPricingRequestBuilder } from './pricing/NamecheapPricingRequestBuilder';
import { NamecheapPricingResponseParser } from './pricing/NamecheapPricingResponseParser';
import { NamecheapPricingMapper } from './mappers/NamecheapPricingMapper';

import { NamecheapAccount } from '../../types/NamecheapAccount';

export class NameCheapDomainPricingService {
  constructor(
    private readonly http: NamecheapHttpClient,
    private readonly parser: NamecheapPricingResponseParser,
    private readonly account: NamecheapAccount
  ) {}

  public async getPricing(domain: string) {
    try {
      const params = NamecheapPricingRequestBuilder.build(
        this.account,
        domain
      );

      const xml = await this.http.get(params);

      const parsed = await this.parser.parse(xml);

      if (!this.isValidResponse(parsed)) {
        return this.fail(domain, 'Invalid API response', xml);
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

  private isValidResponse(parsed: any): boolean {
    return parsed?.ApiResponse?.$?.Status === 'OK';
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