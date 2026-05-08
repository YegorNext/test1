import { IDomainRegistrar } from './IDomainRegistrar';
import { DomainResponseParser } from './components/DomainResponseParser';
import { NamecheapHttpClient } from './dns/NamecheapHttpClient';
import { NamecheapDomainChecker } from './components/NamecheapDomainChecker';

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

  public async checkAvailability(domain: string): Promise<boolean> {
    console.log('[CHECK] domain:', domain);

    const result = await this.checker.checkAvailability(domain);

    console.log('[CHECK RESULT]:', result);

    return result;
  }

  public async registerDomain(domain: string): Promise<boolean> {
    console.log('\n==============================');
    console.log('[REGISTER] START:', domain);
    console.log('==============================');

    await this.ensureAvailable(domain);

    console.log('[REGISTER] AVAILABLE OK');

    const params = this.buildParams(domain);

    console.log('[REGISTER] CONTACTS RAW:');
    console.log(JSON.stringify(this.account.contacts, null, 2));

    console.log('[REGISTER] PARAMS BUILT:');
    console.log(JSON.stringify(params, null, 2));

    console.log('[REGISTER] SENDING REQUEST...');

    const xml = await this.httpClient.get(params);

    console.log('[REGISTER] RAW XML RESPONSE:');
    console.log(xml);

    const result = await this.parser.parseRegistered(xml);

    console.log('[REGISTER] PARSED RESULT:', result);

    return result;
  }

  private buildParams(domain: string) {
    const contacts = this.account.contacts?.registrant;

    console.log('[REGISTER] USING CONTACTS:');
    console.log(JSON.stringify(contacts, null, 2));

    if (!contacts) {
      throw new Error('Contacts are missing in account');
    }

    const params = {
      ApiUser: this.account.apiUser,
      ApiKey: this.account.apiKey,
      UserName: this.account.username,
      ClientIp: this.account.clientIp,

      Command: 'namecheap.domains.create',

      DomainName: domain,
      Years: '1',

      AddFreeWhoisguard: 'no',
      WGEnabled: 'no',

      // REGISTRANT
      RegistrantFirstName: contacts.firstName,
      RegistrantLastName: contacts.lastName,
      RegistrantAddress1: contacts.address1,
      RegistrantCity: contacts.city,
      RegistrantStateProvince: contacts.stateProvince,
      RegistrantPostalCode: contacts.postalCode,
      RegistrantCountry: contacts.country,
      RegistrantPhone: contacts.phone,
      RegistrantEmailAddress: contacts.email,

      // TECH
      TechFirstName: contacts.firstName,
      TechLastName: contacts.lastName,
      TechAddress1: contacts.address1,
      TechCity: contacts.city,
      TechStateProvince: contacts.stateProvince,
      TechPostalCode: contacts.postalCode,
      TechCountry: contacts.country,
      TechPhone: contacts.phone,
      TechEmailAddress: contacts.email,

      // ADMIN
      AdminFirstName: contacts.firstName,
      AdminLastName: contacts.lastName,
      AdminAddress1: contacts.address1,
      AdminCity: contacts.city,
      AdminStateProvince: contacts.stateProvince,
      AdminPostalCode: contacts.postalCode,
      AdminCountry: contacts.country,
      AdminPhone: contacts.phone,
      AdminEmailAddress: contacts.email,

      // BILLING
      AuxBillingFirstName: contacts.firstName,
      AuxBillingLastName: contacts.lastName,
      AuxBillingAddress1: contacts.address1,
      AuxBillingCity: contacts.city,
      AuxBillingStateProvince: contacts.stateProvince,
      AuxBillingPostalCode: contacts.postalCode,
      AuxBillingCountry: contacts.country,
      AuxBillingPhone: contacts.phone,
      AuxBillingEmailAddress: contacts.email,
    };

    console.log('[REGISTER] FINAL PARAM OBJECT READY');

    return params;
  }

  private async ensureAvailable(domain: string): Promise<void> {
    console.log('[REGISTER] CHECK AVAILABILITY...');

    const available = await this.checkAvailability(domain);

    console.log('[REGISTER] AVAILABLE:', available);

    if (!available) {
      throw new Error(`Domain ${domain} is not available for registration.`);
    }
  }
}