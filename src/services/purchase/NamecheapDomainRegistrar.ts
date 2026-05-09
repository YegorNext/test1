import { IDomainRegistrar } from './IDomainRegistrar';
import { DomainResponseParser } from './components/DomainResponseParser';
import { NamecheapHttpClient } from './dns/NamecheapHttpClient';
import { NamecheapDomainChecker } from './components/NamecheapDomainChecker';
import { NamecheapCommands } from '../../utils/namecheap/constants/commands';
import { NamecheapBaseParams } from '../../utils/namecheap/namecheap-base-params';
import { mergeParams } from '../../utils/namecheap/merge-params';
import { NamecheapContactsParamsBuilder } from '../../utils/namecheap/namecheap-contacts-paramds.builder';
import { NamecheapAccount } from '../../types/NamecheapAccount';

interface AccountWithContacts extends NamecheapAccount {
  contacts?: {
    registrant?: Record<string, any>;
  };
}

export class NamecheapDomainRegistrar implements IDomainRegistrar {
  private readonly checker: NamecheapDomainChecker;
  private readonly parser: DomainResponseParser;

  constructor(
    private readonly account: AccountWithContacts,
    private readonly httpClient: NamecheapHttpClient,
  ) {
    this.checker = new NamecheapDomainChecker(account, httpClient);
    this.parser = new DomainResponseParser();
  }

  async checkAvailability(domain: string): Promise<boolean> {
    const result = await this.checker.checkAvailability(domain);
    return result.available;
  }

  async registerDomain(domain: string): Promise<boolean> {
    await this.ensureAvailable(domain);
    const params = this.buildParams(domain);
    const xml = await this.httpClient.get(params);
    return this.parser.parseRegistered(xml);
  }

  private buildParams(domain: string): Record<string, string> {
    const contacts = this.account.contacts?.registrant;

    return mergeParams(
      mergeParams(NamecheapBaseParams.build(this.account), {
        Command: NamecheapCommands.DOMAIN_CREATE,
        DomainName: domain,
        Years: '1',
        AddFreeWhoisguard: 'no',
        WGEnabled: 'no',
      }),
      NamecheapContactsParamsBuilder.build(contacts),
    );
  }

  private async ensureAvailable(domain: string): Promise<void> {
    const result = await this.checker.checkAvailability(domain);

    if (!result.available) {
      throw new Error(`Domain ${domain} is not available for registration`);
    }
  }
}
