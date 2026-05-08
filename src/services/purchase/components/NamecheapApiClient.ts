import axios, { AxiosInstance } from 'axios';

export class NamecheapApiClient {
  private readonly client: AxiosInstance;

  constructor(baseUrl: string) {
    this.client = axios.create({
      baseURL: baseUrl,
      timeout: 10000,
    });
  }

  public async execute(url: string): Promise<string> {
    console.log('[HTTP REQUEST URL]:', url);

    const response = await this.client.get('', {
      params: new URL(url).searchParams,
    });

    console.log('[HTTP STATUS]:', response.status);
    console.log('[HTTP DATA RAW]:', response.data);

    return response.data;
  }
}