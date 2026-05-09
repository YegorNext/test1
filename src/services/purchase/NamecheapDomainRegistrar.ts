import { IDomainRegistrar } from './IDomainRegistrar';
import { DomainResponseParser } from './components/DomainResponseParser';
import { NamecheapHttpClient } from './dns/NamecheapHttpClient';
import { NamecheapDomainChecker } from './components/NamecheapDomainChecker';

import { NamecheapCommands } from '../../utils/namecheap/constants/commands';
import { NamecheapBaseParams } from '../../utils/namecheap/namecheap-base-params';
import { mergeParams } from '../../utils/namecheap/merge-params';
import { NamecheapContactsParamsBuilder } from '../../utils/namecheap/namecheap-contacts-paramds.builder';

export class NamecheapDomainRegistrar implements IDomainRegistrar {
  private checker: NamecheapDomainChecker;
  private parser: DomainResponseParser;

  constructor( private readonly account: any, private readonly httpClient: NamecheapHttpClient) {
    this.checker = new NamecheapDomainChecker(account, httpClient);
    this.parser = new DomainResponseParser();
  }

  public async checkAvailability(domain: string): Promise<boolean> {
    const result = await this.checker.checkAvailability(domain);
    return result.available;
  }

  public async registerDomain(domain: string): Promise<boolean> {
    await this.ensureAvailable(domain);

    const params = this.buildParams(domain);

    const xml = await this.httpClient.get(params);

    return this.parser.parseRegistered(xml);
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

  private async ensureAvailable(domain: string): Promise<void> {
    const result = await this.checker.checkAvailability(domain);

    if (!result.available) {
      throw new Error(`Domain ${domain} is not available for registration`);
    }
  }
}