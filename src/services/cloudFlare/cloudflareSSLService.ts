import { CloudflareApiClient } from "./cloudflareApiClient";

export class CloudflareSSLService {
  constructor(private client: CloudflareApiClient) {}

  async enableHttps(zoneId: string) {
    await this.client.patch(
      `/zones/${zoneId}/settings/always_use_https`,
      { value: "on" }
    );

    await this.client.patch(
      `/zones/${zoneId}/settings/ssl`,
      { value: "full" }
    );
  }
}