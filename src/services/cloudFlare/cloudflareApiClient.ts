import axios, { AxiosInstance } from "axios";
import { CloudflareAccountEntity } from "@org/db-models";
import { CloudflareApiError } from "./cloudFlareApiError";

export class CloudflareApiClient {
  private client: AxiosInstance;

  constructor(account: CloudflareAccountEntity) {
    this.client = axios.create({
      baseURL: "https://api.cloudflare.com/client/v4", 
      headers: {
        Authorization: `Bearer ${account.apiToken}`,
        "Content-Type": "application/json",
      },
    });
  }

  async get<T>(url: string, params?: any): Promise<T> {
    try {
      const res = await this.client.get(url, { params });
      return res.data;
    } catch (error: any) {
      this.handleError(error);
    }
  }

  async post<T>(url: string, body: any): Promise<T> {
    try {
      const res = await this.client.post(url, body);
      return res.data;
    } catch (error: any) {
      this.handleError(error);
    }
  }

  async patch<T>(url: string, body: any): Promise<T> {
    try {
      const res = await this.client.patch(url, body);
      return res.data;
    } catch (error: any) {
      this.handleError(error);
    }
  }

  private handleError(error: any): never {
    const status = error?.response?.status;
    const data = error?.response?.data;

    throw new CloudflareApiError(
      data?.errors?.[0]?.message || error.message,
      status,
      data
    );
  }
}