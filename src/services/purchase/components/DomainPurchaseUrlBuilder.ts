import { NamecheapCommands } from '../../../utils/namecheap/constants/commands';
import { NamecheapAccount } from '../../../types/NamecheapAccount';
import { NamecheapBaseParams } from '../../../utils/namecheap/namecheap-base-params';

export class DomainPurchaseUrlBuilder {
  constructor(
    private readonly account: NamecheapAccount,
    private readonly domain: string,
    private readonly years: number = 1
  ) {}

  public build(): string {
    this.validate();

    const params = this.buildParams();

    return `${this.account.apiUrl}?${params.toString()}`;
  }

  private buildParams(): URLSearchParams {
    return new URLSearchParams({
      ...NamecheapBaseParams.build(this.account),
      Command: NamecheapCommands.DOMAIN_CREATE,
      DomainName: this.domain,
      Years: String(this.years),
      AddFreeWhoisguard: 'no',
      WGEnabled: 'no',
    });
  }

  private validate(): void {
    if (!this.account.clientIp) {
      throw new Error('ClientIp is missing in account');
    }

    if (!this.domain) {
      throw new Error('Domain is required');
    }
  }
}