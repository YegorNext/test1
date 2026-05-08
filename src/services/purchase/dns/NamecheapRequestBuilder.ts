import { DomainUtils } from './DomainUtils';

export class NamecheapRequestBuilder {
  static buildARecord(
    account: any, 
    domain: string,
    ip: string,
    hostName: string = '@',
    ttl: number = 1800
  ): Record<string, string> {
    const { sld, tld } = DomainUtils.split(domain);

    return {
      ApiUser: account.apiUser,
      ApiKey: account.apiKey,
      UserName: account.username,
      ClientIp: account.clientIp,

      Command: 'namecheap.domains.dns.setHosts',

      SLD: sld,
      TLD: tld,

      HostName1: hostName,
      RecordType1: 'A',
      Address1: ip,
      TTL1: ttl.toString(),
    };
  }

  static buildSetCustomNameservers(
    account: any, 
    domain: string,
    nameservers: string[]
  ) {
    const { sld, tld } = DomainUtils.split(domain);

    return {
      ApiUser: account.apiUser,
      ApiKey: account.apiKey,
      UserName: account.username,
      ClientIp: account.clientIp,

      Command: 'namecheap.domains.dns.setCustom',

      SLD: sld,
      TLD: tld,

      NameServers: nameservers.join(','),
    };
  }
}