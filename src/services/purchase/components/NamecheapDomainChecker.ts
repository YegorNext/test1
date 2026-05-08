import { parseStringPromise } from 'xml2js';

export class NameCheapDomainChecker {
  constructor(
    private readonly account: any 
  ) {}

  public async checkAvailability(domain: string): Promise<boolean> {
    try {
      const url = this.buildCheckUrl(domain);

      const response = await fetch(url).then(r => r.text());

      return this.parseDomainAvailability(response);
    } catch (error: any) {
      console.error(`Error checking domain ${domain}: ${error.message}`);
      return false;
    }
  }

  private buildCheckUrl(domain: string): string {
    const { apiUser, apiKey, username, clientIp, apiUrl } = this.account;

    return `${apiUrl}?ApiUser=${apiUser}&ApiKey=${apiKey}&UserName=${username}&ClientIp=${clientIp}&Command=namecheap.domains.check&DomainList=${domain}`;
  }

  private async parseDomainAvailability(xml: string): Promise<boolean> {
    const result = await parseStringPromise(xml, {
      explicitArray: false,
    });

    const domainCheckResult =
      result?.ApiResponse?.CommandResponse?.DomainCheckResult?.$;

    if (!domainCheckResult || typeof domainCheckResult.Available === 'undefined') {
      console.error('Unexpected response from NameCheap API');
      return false;
    }

    return domainCheckResult.Available === 'true';
  }
}