import { parseStringPromise } from 'xml2js';
import { NamecheapHttpClient } from './purchase/dns/NamecheapHttpClient';
import { NamecheapRequestBuilder } from './purchase/dns/NamecheapRequestBuilder';
import { NamecheapDnsParser } from './purchase/dns/NamecheapDnsParser';
import { NamecheapAccount } from '../types/NamecheapAccount';

export class NamecheapDNSService {
  constructor(
    private readonly http: NamecheapHttpClient,
    private readonly dnsParser: NamecheapDnsParser,
    private readonly account: Pick<NamecheapAccount, 'apiUser' | 'apiKey' | 'username' | 'clientIp'>,
  ) {}

  async setARecord(domain: string, ip: string, host = '@', ttl = 1800) {
    const params = NamecheapRequestBuilder.buildARecord(this.account, domain, ip, host, ttl);
    const xml = await this.http.get(params);
    const parsed = await this.parseXml(xml);
    const isSuccess = this.dnsParser.parseSetARecord(parsed);

    return { isSuccess, rawXml: xml };
  }

  async setCustomNameservers(domain: string, nameservers: string[]) {
    const params = NamecheapRequestBuilder.buildSetCustomNameservers(
      this.account,
      domain,
      nameservers,
    );
    const xml = await this.http.get(params);
    const parsed = await this.parseXml(xml);
    const isSuccess = this.dnsParser.parseSetCustomNameservers(parsed);

    return { isSuccess, rawXml: xml };
  }

  private async parseXml(xml: string): Promise<any> {
    return parseStringPromise(xml, { explicitArray: false });
  }
}
