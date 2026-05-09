import axios, { AxiosInstance } from 'axios';
import { CloudflareAccountEntity } from '@org/db-models';
import { CloudflareApiError } from './cloudflareApiError';

const CLOUDFLARE_API_BASE_URL = 'https://api.cloudflare.com/client/v4';

export class CloudflareApiClient {
  private readonly client: AxiosInstance;

  constructor(account: CloudflareAccountEntity) {
    this.client = axios.create({
      baseURL: CLOUDFLARE_API_BASE_URL,
      headers: {
        Authorization: `Bearer ${account.apiToken}`,
        'Content-Type': 'application/json',
      },
    });
  }

  async get<T>(url: string, params?: Record<string, unknown>): Promise<T> {
    try {
      const res = await this.client.get<T>(url, { params });
      return res.data;
    } catch (error: any) {
      throw this.wrapError(error);
    }
  }

  async post<T>(url: string, body: unknown): Promise<T> {
    try {
      const res = await this.client.post<T>(url, body);
      return res.data;
    } catch (error: any) {
      throw this.wrapError(error);
    }
  }

  async patch<T>(url: string, body: unknown): Promise<T> {
    try {
      const res = await this.client.patch<T>(url, body);
      return res.data;
    } catch (error: any) {
      throw this.wrapError(error);
    }
  }

  private wrapError(error: any): CloudflareApiError {
    const status = error?.response?.status;
    const data = error?.response?.data;
    const message = data?.errors?.[0]?.message ?? error.message;
    return new CloudflareApiError(message, status, data);
  }
}
