import axios, { AxiosInstance } from 'axios';

const REQUEST_TIMEOUT_MS = 10_000;

export class NamecheapHttpClient {
  private readonly client: AxiosInstance;

  constructor(baseUrl: string) {
    this.client = axios.create({
      baseURL: baseUrl,
      timeout: REQUEST_TIMEOUT_MS,
    });
  }

  async get(params: Record<string, string>): Promise<string> {
    const response = await this.client.get('', { params });
    return response.data;
  }
}
