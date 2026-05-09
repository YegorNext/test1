import { DomainUtils } from './DomainUtils';
import { NamecheapCommands } from '../../../utils/namecheap/constants/commands';
import { NamecheapAccount } from '../../../types/NamecheapAccount';

export class NamecheapRequestBuilder {
  static buildARecord(
    account: Pick<NamecheapAccount, 'apiUser' | 'apiKey' | 'username' | 'clientIp'>,
    domain: string,
    ip: string,
    hostName = '@',
    ttl = 1800,
  ): Record<string, string> {
    const { sld, tld } = DomainUtils.split(domain);

    return {
      ApiUser: account.apiUser,
      ApiKey: account.apiKey,
      UserName: account.username,
      ClientIp: account.clientIp,
      Command: NamecheapCommands.DNS_SET_HOSTS,
      SLD: sld,
      TLD: tld,
      HostName1: hostName,
      RecordType1: 'A',
      Address1: ip,
      TTL1: ttl.toString(),
    };
  }

  static buildSetCustomNameservers(
    account: Pick<NamecheapAccount, 'apiUser' | 'apiKey' | 'username' | 'clientIp'>,
    domain: string,
    nameservers: string[],
  ): Record<string, string> {
    const { sld, tld } = DomainUtils.split(domain);

    return {
      ApiUser: account.apiUser,
      ApiKey: account.apiKey,
      UserName: account.username,
      ClientIp: account.clientIp,
      Command: NamecheapCommands.DNS_SET_CUSTOM,
      SLD: sld,
      TLD: tld,
      NameServers: nameservers.join(','),
    };
  }
}
