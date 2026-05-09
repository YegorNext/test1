import { parseStringPromise } from 'xml2js';
import { NamecheapHttpClient } from '../dns/NamecheapHttpClient';
import { NamecheapCommands } from '../../../utils/namecheap/constants/commands';
import { NamecheapBaseParams } from '../../../utils/namecheap/namecheap-base-params';
import { mergeParams } from '../../../utils/namecheap/merge-params';
import { NamecheapXmlExtractor } from '../../../utils/namecheap/xml.extractor';
import { DOMAIN_STATUS, DOMAIN_REASONS } from '../../../utils/namecheap/constants/domain.constants';
import { DomainCheckResult, DomainAvailabilityResult } from '../../../utils/namecheap/types/domain.types';
import { NamecheapAccount } from '../../../types/NamecheapAccount';

export type NamecheapAuthAccount = Pick<
  NamecheapAccount,
  'apiUser' | 'apiKey' | 'username' | 'clientIp'
>;

export class NamecheapDomainChecker {
  constructor(
    private readonly account: Pick<NamecheapAccount, 'apiUser' | 'apiKey' | 'username' | 'clientIp'>,
    private readonly httpClient: NamecheapHttpClient,
  ) {}

  async checkAvailability(domain: string): Promise<DomainAvailabilityResult> {
    const params = this.buildParams(domain);
    const xml = await this.httpClient.get(params);
    const parsed = await parseStringPromise(xml, { explicitArray: false });
    const result: DomainCheckResult | undefined = NamecheapXmlExtractor.getCheckDomainResult(parsed);

    if (!result) {
      return this.notAvailable(DOMAIN_REASONS.EMPTY_RESPONSE);
    }

    return this.mapResult(result);
  }

  private mapResult(result: DomainCheckResult): DomainAvailabilityResult {
    if (result.Available === 'true') {
      return { available: true, status: DOMAIN_STATUS.AVAILABLE, reason: null };
    }

    return {
      available: false,
      status: DOMAIN_STATUS.NOT_AVAILABLE,
      reason: this.resolveReason(result),
    };
  }

  private resolveReason(result: DomainCheckResult): string {
    if (result.Description) return result.Description;
    if (result.ErrorNo === '0') return DOMAIN_REASONS.LIKELY_REGISTERED;
    return DOMAIN_REASONS.EXPLICIT_RESTRICTION;
  }

  private notAvailable(reason: string): DomainAvailabilityResult {
    return { available: false, status: DOMAIN_STATUS.NOT_AVAILABLE, reason };
  }

  private buildParams(domain: string): Record<string, string> {
    return mergeParams(NamecheapBaseParams.build(this.account), {
      Command: NamecheapCommands.DOMAIN_CHECK,
      DomainList: domain,
    });
  }
}
