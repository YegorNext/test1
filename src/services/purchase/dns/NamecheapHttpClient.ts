import axios, { AxiosInstance } from 'axios';

export class NamecheapHttpClient {
  private readonly client: AxiosInstance;

  constructor(private readonly baseUrl: string) {
    console.log('[HTTP CLIENT INIT]', baseUrl);

    this.client = axios.create({
      baseURL: baseUrl,
      timeout: 10000,
    });
  }

  public async get(params: Record<string, string>): Promise<string> {
    console.log('[HTTP REQUEST PARAMS]');
    console.log(JSON.stringify(params, null, 2));

    const response = await this.client.get('', { params });

    console.log('[HTTP STATUS]:', response.status);

    return response.data;
  }
}