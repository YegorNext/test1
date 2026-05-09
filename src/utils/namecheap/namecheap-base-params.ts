import { NamecheapAccount } from '../../types/NamecheapAccount';

type NamecheapBaseParamsAccount = Pick<
  NamecheapAccount,
  'apiUser' | 'apiKey' | 'username' | 'clientIp'
>;

export class NamecheapBaseParams {
  static build(account: NamecheapBaseParamsAccount) {
    return {
      ApiUser: account.apiUser,
      ApiKey: account.apiKey,
      UserName: account.username,
      ClientIp: account.clientIp,
    };
  }
}