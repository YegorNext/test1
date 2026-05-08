import { IDomainRegistrar } from './IDomainRegistrar';
import { DomainPurchaseUrlBuilder } from './components/DomainPurchaseUrlBuilder';
import { DomainResponseParser } from './components/DomainResponseParser';
import { NamecheapApiClient } from './components/NamecheapApiClient';
import { NamecheapDomainChecker } from './components/NamecheapDomainChecker';

export class NamecheapDomainRegistrar implements IDomainRegistrar {
  private checker: NamecheapDomainChecker;
  private parser: DomainResponseParser;
  private apiClient: NamecheapApiClient;

  constructor(private readonly account: any ) {
    this.checker = new NamecheapDomainChecker(account);

    this.parser = new DomainResponseParser();

    this.apiClient = new NamecheapApiClient(account.apiUrl);
  }

  public async checkAvailability(domain: string): Promise<boolean> {
    return await this.checker.checkAvailability(domain);
  }

  public async registerDomain(domain: string): Promise<boolean> {
    await this.ensureAvailable(domain);

    const url = this.buildPurchaseUrl(domain);
    const xml = await this.apiClient.execute(url);

    return this.parser.parseRegistered(xml);
  }

  private async ensureAvailable(domain: string): Promise<void> {
    const available = await this.checkAvailability(domain);

    if (!available) {
      throw new Error(`Domain ${domain} is not available for registration.`);
    }
  }

  private buildPurchaseUrl(domain: string): string {
    const builder = new DomainPurchaseUrlBuilder(this.account, domain);
    return builder.build();
  }
}