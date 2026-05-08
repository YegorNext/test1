import { NamecheapAccountService } from "../NamecheapAccountService";
import { CloudflareAccountService } from "../CloudflareAccountService";

import { NamecheapServiceFactory } from "./NamecheapServiceFactory";

import { CloudflareApiClient } from "../cloudFlare/cloudflareApiClient";
import { CloudflareZoneService } from "../cloudFlare/cloudflareZoneService";
import { CloudflareDNSService } from "../cloudFlare/cloudflareDNSService";
import { CloudflareSSLService } from "../cloudFlare/cloudflareSSLService";

import { DomainProvisionService } from "../DomainProvisioningService";

export class DomainProvisioningFactory {
  constructor(
    private readonly cloudflareAccountService: CloudflareAccountService,
    private readonly namecheapFactory: NamecheapServiceFactory 
  ) {}

  async createCloudflareProvisionService(cloudflareAccountId: string, namecheapAccountId: string) {
    const cfAccount = await this.cloudflareAccountService.findById(cloudflareAccountId);

    if (!cfAccount) throw new Error("Cloudflare account not found");

    const apiClient = new CloudflareApiClient(cfAccount);

    const zoneService = new CloudflareZoneService(apiClient, cfAccount);
    const dnsService = new CloudflareDNSService(apiClient);
    const sslService = new CloudflareSSLService(apiClient);

    const namecheapDNS = await this.namecheapFactory.createDNSService(namecheapAccountId);

    return new DomainProvisionService(
      zoneService,
      dnsService,
      sslService,
      namecheapDNS
    );
  }
}