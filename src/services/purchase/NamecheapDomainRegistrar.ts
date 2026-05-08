import { IDomainRegistrar } from './IDomainRegistrar';
import { DomainPurchaseUrlBuilder } from './components/DomainPurchaseUrlBuilder';
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
    return this.checker.checkAvailability(domain);
  }

  public async registerDomain(domain: string): Promise<boolean> {
    console.log('[REGISTER] START:', domain);

    await this.ensureAvailable(domain);

    console.log('[REGISTER] AVAILABLE OK');

    const url = new DomainPurchaseUrlBuilder(this.account, domain).build();

    console.log('[REGISTER] URL:', url);

    const xml = await this.httpClient.get(
      Object.fromEntries(new URL(url).searchParams)
    );

    console.log('[REGISTER] RESPONSE RECEIVED');

    const result = await this.parser.parseRegistered(xml);

    console.log('[REGISTER] RESULT:', result);

    return result;
  }

  private async ensureAvailable(domain: string): Promise<void> {
    const available = await this.checkAvailability(domain);

    if (!available) {
      throw new Error(`Domain ${domain} is not available for registration.`);
    }
  }
}