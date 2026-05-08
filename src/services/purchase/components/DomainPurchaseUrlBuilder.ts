export class DomainPurchaseUrlBuilder {
  constructor(
    private readonly account: any,
    private readonly domain: string,
    private readonly years = 1
  ) {}

  public build(): string {
    if (!this.account.clientIp) {
      throw new Error('ClientIp is missing in account');
    }

    const params = new URLSearchParams({
      ApiUser: this.account.apiUser,
      ApiKey: this.account.apiKey,
      UserName: this.account.username,
      ClientIp: this.account.clientIp, 
      Command: 'namecheap.domains.create',
      DomainName: this.domain,
      Years: this.years.toString(),
      AddFreeWhoisguard: 'no',
      WGEnabled: 'no',
    });

    return `${this.account.apiUrl}?${params.toString()}`;
  }
}