import { CloudflareApiClient } from "./cloudflareApiClient";

export class CloudflareDNSService {
  constructor(private client: CloudflareApiClient) {}

  async createARecord(zoneId: string, name: string, ip: string, proxied: boolean = true) {
    const response = await this.client.post<any>(
      `/zones/${zoneId}/dns_records`,
      {
        type: "A",
        name,
        content: ip,
        ttl: 1,
        proxied,
      }
    );

    return {
      recordId: response.result.id,
      name: response.result.name,
      ip: response.result.content,
      proxied: response.result.proxied,
    };
  }

  async createCNAMERecord(zoneId: string, name: string, target: string, proxied: boolean = true) {
    const response = await this.client.post<any>(
        `/zones/${zoneId}/dns_records`,
        {
        type: "CNAME",
        name,
        content: target,
        ttl: 1,
        proxied,
        }
    );

    return {
        recordId: response.result.id,
        name: response.result.name,
        target: response.result.content,
    };
 }
}