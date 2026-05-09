import axios, { AxiosInstance } from 'axios';

const HTTP_CONFIG = {
  TIMEOUT: 10_000,
} as const;

export class NamecheapApiClient {
  private readonly client: AxiosInstance;

  constructor(baseUrl: string) {
    this.client = axios.create({
      baseURL: baseUrl,
      timeout: HTTP_CONFIG.TIMEOUT,
    });
  }

  public async execute(url: string): Promise<string> {
    const response = await this.client.get('', {
      params: this.extractParams(url),
    });

    return response.data;
  }

  private extractParams(url: string) {
    return new URL(url).searchParams;
  }
}