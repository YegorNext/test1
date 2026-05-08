import { NamecheapAccountService } from '../NamecheapAccountService';

import { NamecheapHttpClient } from '../purchase/dns/NamecheapHttpClient';
import { NamecheapXmlParser } from '../purchase/components/NamecheapXmlParser';

import { NamecheapDnsParser } from '../purchase/dns/NamecheapDnsParser';
import { NamecheapPricingResponseParser } from '../purchase/pricing/NamecheapPricingResponseParser';

import { NamecheapDNSService } from '../NamecheapDNSService';
import { NameCheapDomainPricingService } from '../purchase/NamecheapDomainPricingService';
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

    return account;
  }

  async createDNSService(accountId: string) {
    const account = await this.getAccount(accountId);

    const http = new NamecheapHttpClient(this.apiUrl);

    const xmlParser = new NamecheapXmlParser();
    const dnsParser = new NamecheapDnsParser();

    return new NamecheapDNSService(
      http,
      xmlParser,
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

    return new NamecheapDomainRegistrar({
      apiUser: account.apiUser,
      apiKey: account.apiKey,
      username: account.username,
      clientIp: this.clientIp,
      apiUrl: this.apiUrl
    });
  }
}