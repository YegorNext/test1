import { CloudflareZoneService } from "./cloudFlare/cloudflareZoneService";
import { CloudflareDNSService } from "./cloudFlare/cloudflareDNSService";
import { CloudflareSSLService } from "./cloudFlare/cloudflareSSLService";
import { NamecheapDNSService } from "./NamecheapDNSService";

export class DomainProvisionService {
  constructor(private zoneService: CloudflareZoneService, private dnsService: CloudflareDNSService, private sslService: CloudflareSSLService, private namecheapDNS: NamecheapDNSService) {}

  async provision(domain: string, ip: string) {
    console.log("START");

    const zone = await this.zoneService.addDomain(domain);
    console.log("ZONE CREATED", zone);

    await this.namecheapDNS.setCustomNameservers(domain, zone.nameservers)
      .catch(err => {
        console.error("NS SWITCH FAILED:", err.message);
        throw err;
    });
    console.log("NAMECHEAP NS SET", domain);

    const root = await this.dnsService.createARecord(zone.zoneId, "@", ip);
    console.log("ROOT RECORD CREATED", root);

    const www = await this.dnsService.createCNAMERecord(zone.zoneId, "www", domain);
    console.log("WWW RECORD CREATED", www);

    await this.sslService.enableHttps(zone.zoneId);
    console.log("HTTPS ENABLED", zone.zoneId);

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