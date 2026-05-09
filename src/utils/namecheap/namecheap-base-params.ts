import { NamecheapAccount } from '../../types/NamecheapAccount';

export class NamecheapBaseParams {
  static build(account: NamecheapAccount) {
    return {
      ApiUser: account.apiUser,
      ApiKey: account.apiKey,
      UserName: account.username,
      ClientIp: account.clientIp,
    };
  }
}