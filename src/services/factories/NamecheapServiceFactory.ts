import { NamecheapAccountService } from '../NamecheapAccountService';

import { NamecheapHttpClient } from '../purchase/dns/NamecheapHttpClient';
import { NamecheapDnsParser } from '../purchase/dns/NamecheapDnsParser';
import { NamecheapDNSService } from '../NamecheapDNSService';

import { NameCheapDomainPricingService } from '../purchase/NamecheapDomainPricingService';
import { NamecheapPricingResponseParser } from '../purchase/pricing/NamecheapPricingResponseParser';

import { NamecheapDomainRegistrar } from '../purchase/NamecheapDomainRegistrar';

export class NamecheapServiceFactory {
  constructor(
    private readonly accountService: NamecheapAccountService,
    private readonly apiUrl: string,
    private readonly clientIp: string
  ) {}

  private async getAccount(accountId: string) {
    const account = await this.accountService.findById(accountId);

    if (!account) {
      throw new Error('Namecheap account not found');
    }

    console.log('[ACCOUNT RAW]:', account);

    if (account.contacts?.contacts) {
      account.contacts = account.contacts.contacts;
    }

    console.log('[ACCOUNT CONTACTS FIXED]:', account.contacts);

    return account;
  }

  async createDNSService(accountId: string) {
    const account = await this.getAccount(accountId);

    const http = new NamecheapHttpClient(this.apiUrl);
    const dnsParser = new NamecheapDnsParser();

    return new NamecheapDNSService(
      http,
      dnsParser,
      {
        apiUser: account.apiUser,
        apiKey: account.apiKey,
        username: account.username,
        clientIp: this.clientIp
      }
    );
  }

  async createPricingService(accountId: string) {
    const account = await this.getAccount(accountId);

    const http = new NamecheapHttpClient(this.apiUrl);
    const pricingParser = new NamecheapPricingResponseParser();

    return new NameCheapDomainPricingService(
      http,
      pricingParser,
      account.apiUser,
      account.apiKey,
      account.username,
      this.clientIp
    );
  }

async createRegistrar(accountId: string) {
  const account = await this.getAccount(accountId);

  console.log('[ACCOUNT RAW]:', account);
  console.log('[ACCOUNT CONTACTS TYPE]:', typeof account.contacts);

  const http = new NamecheapHttpClient(this.apiUrl);

  return new NamecheapDomainRegistrar(
    {
      apiUser: account.apiUser,
      apiKey: account.apiKey,
      username: account.username,
      apiUrl: this.apiUrl,
      clientIp: this.clientIp,

      contacts: account.contacts
    },
    http
  );
}
}