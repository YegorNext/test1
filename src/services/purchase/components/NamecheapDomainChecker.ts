import { parseStringPromise } from 'xml2js';
import { NamecheapHttpClient } from '../dns/NamecheapHttpClient';
import { NamecheapCommands } from '../../../utils/namecheap/constants/commands';

import { NamecheapBaseParams } from '../../../utils/namecheap/namecheap-base-params';
import { mergeParams } from '../../../utils/namecheap/merge-params';
import { NamecheapXmlExtractor } from '../../../utils/namecheap/xml.extractor';

import {
  DOMAIN_STATUS,
  DOMAIN_REASONS,
} from '../../../utils/namecheap/constants/domain.constants';

import {
  DomainCheckResult,
  DomainAvailabilityResult,
} from '../../../utils/namecheap/types/domain.types';

export class NamecheapDomainChecker {
  constructor(
    private readonly account: any,
    private readonly httpClient: NamecheapHttpClient
  ) {}

  public async checkAvailability(domain: string): Promise<DomainAvailabilityResult> {
    const params = this.buildParams(domain);

    const xml = await this.httpClient.get(params);

    const parsed = await parseStringPromise(xml, {
      explicitArray: false,
    });

    const result: DomainCheckResult | undefined =
      NamecheapXmlExtractor.getCheckDomainResult(parsed);

    if (!result) {
      return this.notAvailable(DOMAIN_REASONS.EMPTY_RESPONSE, xml);
    }

    const mapped = this.mapResult(result);

    return {
      ...mapped,
      rawXml: xml,
    };
  }

  private mapResult(
    result: DomainCheckResult
  ): Omit<DomainAvailabilityResult, 'rawXml'> {
    const isAvailable = result.Available === 'true';

    if (isAvailable) {
      return {
        available: true,
        status: DOMAIN_STATUS.AVAILABLE,
        reason: null,
      };
    }

    return {
      available: false,
      status: DOMAIN_STATUS.NOT_AVAILABLE,
      reason: this.resolveReason(result),
    };
  }

  private resolveReason(result: DomainCheckResult): string {
    if (result.Description) {
      return result.Description;
    }

    if (result.ErrorNo === '0') {
      return DOMAIN_REASONS.LIKELY_REGISTERED;
    }

    return DOMAIN_REASONS.EXPLICIT_RESTRICTION;
  }

  private notAvailable(reason: string, xml: string): DomainAvailabilityResult {
    return {
      available: false,
      status: DOMAIN_STATUS.NOT_AVAILABLE,
      reason,
      rawXml: xml,
    };
  }

  private buildParams(domain: string) {
    return mergeParams(
      NamecheapBaseParams.build(this.account),
      {
        Command: NamecheapCommands.DOMAIN_CHECK,
        DomainList: domain,
      }
    );
  }
}