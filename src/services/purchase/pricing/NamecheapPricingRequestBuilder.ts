import { NamecheapAccount } from '../../../types/NamecheapAccount';
import { NamecheapCommands } from '../../../utils/namecheap/constants/commands';

export class NamecheapPricingRequestBuilder {

  static build(account: NamecheapAccount, domain: string): Record<string, string> {
    const tld = domain.split('.').pop();

    if (!tld) {
      throw new Error(`Cannot extract TLD from domain: ${domain}`);
    }

    return {
      ApiUser: account.apiUser,
      ApiKey: account.apiKey,
      UserName: account.username,
      ClientIp: account.clientIp,
      Command: NamecheapCommands.PRICE_GET,
      ProductType: 'DOMAIN',
      ProductName: tld,
    };
  }
}
