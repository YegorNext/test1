import { NamecheapAccountService } from '../NamecheapAccountService';
import { NamecheapHttpClient } from '../purchase/dns/NamecheapHttpClient';
import { NamecheapDnsParser } from '../purchase/dns/NamecheapDnsParser';
import { NamecheapDNSService } from '../NamecheapDNSService';
import { NameCheapDomainPricingService } from '../purchase/NamecheapDomainPricingService';
import { NamecheapPricingResponseParser } from '../purchase/pricing/NamecheapPricingResponseParser';
import { NamecheapDomainRegistrar } from '../purchase/NamecheapDomainRegistrar';
import { NamecheapAccount } from '../../types/NamecheapAccount';
import { NamecheapAccountMapper } from '../purchase/mappers/NamecheapAccountMapper';

export class NamecheapServiceFactory {
  constructor(
    private readonly accountService: NamecheapAccountService,
    private readonly apiUrl: string,
    private readonly clientIp: string,
  ) {}

  private async getAccount(accountId: string): Promise<NamecheapAccount> {
    const entity = await this.accountService.findById(accountId);

    if (!entity) {
      throw new Error(`Namecheap account not found: ${accountId}`);
    }

    return NamecheapAccountMapper.toDomain(entity, this.apiUrl, this.clientIp);
  }

  async createDNSService(accountId: string): Promise<NamecheapDNSService> {
    const account = await this.getAccount(accountId);

    return new NamecheapDNSService(
      new NamecheapHttpClient(this.apiUrl),
      new NamecheapDnsParser(),
      account,
    );
  }

  async createPricingService(accountId: string): Promise<NameCheapDomainPricingService> {
    const account = await this.getAccount(accountId);

    return new NameCheapDomainPricingService(
      new NamecheapHttpClient(this.apiUrl),
      new NamecheapPricingResponseParser(),
      account,
    );
  }

  async createRegistrar(accountId: string): Promise<NamecheapDomainRegistrar> {
    const account = await this.getAccount(accountId);

    return new NamecheapDomainRegistrar(account, new NamecheapHttpClient(this.apiUrl));
  }
}
