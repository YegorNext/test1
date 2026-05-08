import { NamecheapHttpClient } from './purchase/dns/NamecheapHttpClient';
import { NamecheapRequestBuilder } from './purchase/dns/NamecheapRequestBuilder';
import { NamecheapDnsParser } from './purchase/dns/NamecheapDnsParser';

export class NamecheapDNSService {
  constructor(
    private readonly http: NamecheapHttpClient,
    private readonly dnsParser: NamecheapDnsParser,
    private readonly account: {
      apiUser: string;
      apiKey: string;
      username: string;
      clientIp: string;
    }
  ) {}

  async setARecord(domain: string, ip: string, host = '@', ttl = 1800) {
    const params = NamecheapRequestBuilder.buildARecord(
      this.account,
      domain,
      ip,
      host,
      ttl
    );

    const xml = await this.http.get(params);

    const parsed = await this.parseXml(xml);

    const isSuccess = this.dnsParser.parseSetARecord(parsed);

    return {
      isSuccess,
      rawXml: xml,
      errors: [],
    };
  }

  async setCustomNameservers(domain: string, nameservers: string[]) {
    const params = NamecheapRequestBuilder.buildSetCustomNameservers(
      this.account,
      domain,
      nameservers
    );

    const xml = await this.http.get(params);

    const parsed = await this.parseXml(xml);

    const isSuccess = this.dnsParser.parseSetCustomNameservers(parsed);

    return {
      isSuccess,
      rawXml: xml,
    };
  }

  private async parseXml(xml: string) {
    const { parseStringPromise } = await import('xml2js');

    return parseStringPromise(xml, {
      explicitArray: false,
    });
  }
}