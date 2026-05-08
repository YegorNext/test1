import { parseStringPromise } from 'xml2js';
import { NamecheapHttpClient } from '../dns/NamecheapHttpClient';

export class NamecheapDomainChecker {
  constructor(
    private readonly account: any,
    private readonly httpClient: NamecheapHttpClient
  ) {}

  public async checkAvailability(domain: string): Promise<boolean> {
    try {
      const params = this.buildParams(domain);

      const xml = await this.httpClient.get(params);

      return this.parseDomainAvailability(xml);
    } catch (error: any) {
      console.error(`[CHECK] Error for ${domain}: ${error.message}`);
      return false;
    }
  }

  private buildParams(domain: string): Record<string, string> {
    const { apiUser, apiKey, username, clientIp } = this.account;

    return {
      ApiUser: apiUser,
      ApiKey: apiKey,
      UserName: username,
      ClientIp: clientIp,
      Command: 'namecheap.domains.check',
      DomainList: domain,
    };
  }

  private async parseDomainAvailability(xml: string): Promise<boolean> {
    const result = await parseStringPromise(xml, {
      explicitArray: false,
    });

    const domainCheckResult =
      result?.ApiResponse?.CommandResponse?.DomainCheckResult?.$;

    if (!domainCheckResult) return false;

    return domainCheckResult.Available === 'true';
  }
}