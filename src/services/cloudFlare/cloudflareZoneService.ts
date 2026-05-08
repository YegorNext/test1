import { CloudflareApiClient } from "./cloudflareApiClient";
import { CloudflareAccountEntity } from "@org/db-models";

export interface CloudflareZoneResult {
  zoneId: string;
  nameservers: string[];
}

export class CloudflareZoneService {
  constructor(
    private client: CloudflareApiClient,
    private account: CloudflareAccountEntity
  ) {}

  async addDomain(domain: string): Promise<CloudflareZoneResult> {
    const response = await this.client.post<any>("/zones", {
      name: domain,
      type: "full",
      account: {
        id: this.account.accountId,
      },
    });

    return {
      zoneId: response.result.id,
      nameservers: response.result.name_servers,
    };
  }
}