import { CloudflareZoneService } from './cloudflareZoneService';
import { CloudflareDNSService } from './cloudflareDNSService';
import { CloudflareSSLService } from './cloudflareSSLService';

export class CloudflareDomainService {
  constructor(
    private readonly zoneService: CloudflareZoneService,
    private readonly dnsService: CloudflareDNSService,
    private readonly sslService: CloudflareSSLService
  ) {}

  async addDomain(domain: string, ip: string) {
    const zone = await this.zoneService.addDomain(domain);

    const root = await this.dnsService.createARecord(zone.zoneId, '@', ip);

    const www = await this.dnsService.createCNAMERecord(zone.zoneId, 'www', domain);

    await this.sslService.enableHttps(zone.zoneId);

    return {
      domain,
      zoneId: zone.zoneId,
      nameservers: zone.nameservers,
      dns: {
        root,
        www,
      },
      https: true,
    };
  }
}