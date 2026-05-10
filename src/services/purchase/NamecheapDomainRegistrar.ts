import { IDomainRegistrar } from './IDomainRegistrar';
import { DomainResponseParser } from './components/DomainResponseParser';
import { NamecheapHttpClient } from './dns/NamecheapHttpClient';
import { NamecheapDomainChecker } from './components/NamecheapDomainChecker';

import { NamecheapCommands } from '../../utils/namecheap/constants/commands';
import { NamecheapBaseParams } from '../../utils/namecheap/namecheap-base-params';
import { mergeParams } from '../../utils/namecheap/merge-params';
import { NamecheapContactsParamsBuilder } from '../../utils/namecheap/namecheap-contacts-paramds.builder';

import { DomainAvailabilityResult } from '../../utils/namecheap/types/domain.types';

export class NamecheapDomainRegistrar implements IDomainRegistrar {
  private checker: NamecheapDomainChecker;
  private parser: DomainResponseParser;

  constructor(
    private readonly account: any,
    private readonly httpClient: NamecheapHttpClient
  ) {
    this.checker = new NamecheapDomainChecker(account, httpClient);
    this.parser = new DomainResponseParser();
  }

  public async checkAvailability(domain: string): Promise<DomainAvailabilityResult> {
    return this.checker.checkAvailability(domain);
  }

  public async registerDomain(domain: string): Promise<{success: boolean; rawXml: string; reason?: string | null;}> {
    const availability = await this.checker.checkAvailability(domain);

    if (!availability.available) {
      throw new Error(
        `Domain ${domain} is not available: ${availability.reason}`
      );
    }

    const params = this.buildParams(domain);

    const xml = await this.httpClient.get(params);

    return {
      success: await this.parser.parseRegistered(xml),
      rawXml: xml,
      reason: availability.reason,
    };
  }

  private buildParams(domain: string) {
    const contacts = this.account.contacts?.registrant;

    const baseParams = mergeParams(
      NamecheapBaseParams.build(this.account),
      {
        Command: NamecheapCommands.DOMAIN_CREATE,
        DomainName: domain,
        Years: '1',
        AddFreeWhoisguard: 'no',
        WGEnabled: 'no',
      }
    );

    return mergeParams(
      baseParams,
      NamecheapContactsParamsBuilder.build(contacts)
    );
  }
}