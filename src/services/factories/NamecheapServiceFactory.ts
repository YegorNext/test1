import { NamecheapAccountService } from '../NamecheapAccountService';

import { NamecheapHttpClient } from '../purchase/dns/NamecheapHttpClient';
import { NamecheapDnsParser } from '../purchase/dns/NamecheapDnsParser';
import { NameCheapDomainPricingService } from '../purchase/NamecheapDomainPricingService';
import { NamecheapDomainRegistrar } from '../purchase/NamecheapDomainRegistrar';
import { NamecheapDNSService } from '../NamecheapDNSService';
import { NamecheapPricingResponseParser } from '../purchase/pricing/NamecheapPricingResponseParser';

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
    const dnsParser = new NamecheapDnsParser();

    return new NamecheapDNSService(
      http,
      dnsParser,
      {
        apiUser: account.apiUser,
        apiKey: account.apiKey,
        username: account.username,
        clientIp: this.clientIp,
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

    const http = new NamecheapHttpClient(this.apiUrl);

    return new NamecheapDomainRegistrar(account, http);
  }
}