import { NamecheapAccountService } from "../NamecheapAccountService";
import { CloudflareAccountService } from "../CloudflareAccountService";

import { NamecheapServiceFactory } from "./NamecheapServiceFactory";

import { CloudflareApiClient } from "../cloudflare/cloudflareApiClient";
import { CloudflareZoneService } from "../cloudflare/cloudflareZoneService";
import { CloudflareDNSService } from "../cloudflare/cloudflareDNSService";
import { CloudflareSSLService } from "../cloudflare/cloudflareSSLService";

import { DomainProvisionService } from "../DomainProvisioningService";

export class DomainProvisioningFactory {
  constructor(
    private readonly cloudflareAccountService: CloudflareAccountService,
    private readonly namecheapFactory: NamecheapServiceFactory 
  ) {}

  async createCloudflareProvisionService(
    cloudflareAccountId: string,
    namecheapAccountId: string
  ) {
    console.log("\n==============================");
    console.log("[CLOUDFLARE FACTORY] START");
    console.log("==============================");
    console.log("[INPUT] cloudflareAccountId:", cloudflareAccountId);
    console.log("[INPUT] namecheapAccountId:", namecheapAccountId);

    const cfAccount = await this.cloudflareAccountService.findById(cloudflareAccountId);

    console.log("[CF ACCOUNT RAW]:", cfAccount);

    if (!cfAccount) {
      console.log("[CF ACCOUNT ERROR] NOT FOUND");
      throw new Error("Cloudflare account not found");
    }

    console.log("[CF ACCOUNT OK]");
    console.log("[CF ACCOUNT id]:", cfAccount.id);
    console.log("[CF ACCOUNT name]:", cfAccount.name);
    console.log("[CF ACCOUNT apiToken exists]:", !!cfAccount.apiToken);
    console.log("[CF ACCOUNT accountId]:", cfAccount.accountId);

    if (cfAccount.apiToken) {
      console.log("[CF ACCOUNT apiToken prefix]:", cfAccount.apiToken.slice(0, 10) + "...");
    }

    console.log("[CLOUDFLARE] Creating API client...");

    const apiClient = new CloudflareApiClient(cfAccount);

    console.log("[CLOUDFLARE] API client created");

    console.log("[CLOUDFLARE] Creating ZoneService...");
    const zoneService = new CloudflareZoneService(apiClient, cfAccount);

    console.log("[CLOUDFLARE] Creating DNSService...");
    const dnsService = new CloudflareDNSService(apiClient);

    console.log("[CLOUDFLARE] Creating SSLService...");
    const sslService = new CloudflareSSLService(apiClient);

    console.log("[NAMECHEAP] Creating DNS service...");
    const namecheapDNS = await this.namecheapFactory.createDNSService(namecheapAccountId);

    console.log("[NAMECHEAP] DNS service ready");

    console.log("[PROVISION] Building DomainProvisionService...");

    const service = new DomainProvisionService(
      zoneService,
      dnsService,
      sslService,
      namecheapDNS
    );

    console.log("[PROVISION] READY");

    return service;
  }
}