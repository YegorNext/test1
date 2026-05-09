import { CloudflareAccountService } from '../CloudflareAccountService';
import { NamecheapServiceFactory } from './NamecheapServiceFactory';
import { CloudflareApiClient } from '../cloudflare/cloudflareApiClient';
import { CloudflareZoneService } from '../cloudflare/cloudflareZoneService';
import { CloudflareDNSService } from '../cloudflare/cloudflareDNSService';
import { CloudflareSSLService } from '../cloudflare/cloudflareSSLService';
import { DomainProvisionService } from '../DomainProvisioningService';

export class DomainProvisioningFactory {
  constructor(
    private readonly cloudflareAccountService: CloudflareAccountService,
    private readonly namecheapFactory: NamecheapServiceFactory,
  ) {}

  async createCloudflareProvisionService(
    cloudflareAccountId: string,
    namecheapAccountId: string,
  ): Promise<DomainProvisionService> {
    const cfAccount = await this.cloudflareAccountService.findById(cloudflareAccountId);

    if (!cfAccount) {
      throw new Error(`Cloudflare account not found: ${cloudflareAccountId}`);
    }

    const apiClient = new CloudflareApiClient(cfAccount);

    const zoneService = new CloudflareZoneService(apiClient, cfAccount);
    const dnsService = new CloudflareDNSService(apiClient);
    const sslService = new CloudflareSSLService(apiClient);

    const namecheapDNS = await this.namecheapFactory.createDNSService(namecheapAccountId);

    return new DomainProvisionService(zoneService, dnsService, sslService, namecheapDNS);
  }
}
