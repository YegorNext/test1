import { CloudflareZoneService } from './cloudflare/cloudflareZoneService';
import { CloudflareDNSService } from './cloudflare/cloudflareDNSService';
import { CloudflareSSLService } from './cloudflare/cloudflareSSLService';
import { NamecheapDNSService } from './NamecheapDNSService';

export class DomainProvisionService {
  constructor(
    private readonly zoneService: CloudflareZoneService,
    private readonly dnsService: CloudflareDNSService,
    private readonly sslService: CloudflareSSLService,
    private readonly namecheapDNS: NamecheapDNSService,
  ) {}

  async provision(domain: string, ip: string) {
    const zone = await this.zoneService.addDomain(domain);

    // Point Namecheap domain to Cloudflare nameservers
    await this.namecheapDNS.setCustomNameservers(domain, zone.nameservers);

    const root = await this.dnsService.createARecord(zone.zoneId, '@', ip);
    const www = await this.dnsService.createCNAMERecord(zone.zoneId, 'www', domain);

    await this.sslService.enableHttps(zone.zoneId);

    return {
      domain,
      zoneId: zone.zoneId,
      nameservers: zone.nameservers,
      dns: { root, www },
      https: true,
    };
  }
}
