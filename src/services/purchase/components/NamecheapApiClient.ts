import axios, { AxiosInstance } from 'axios';

export class NameCheapApiClient {
  private readonly client: AxiosInstance;

  constructor(baseUrl: string) {
    this.client = axios.create({
      baseURL: baseUrl,
      timeout: 10000,
    });
  }

  public async execute(url: string): Promise<string> {
    const response = await this.client.get('', {
      params: new URL(url).searchParams,
    });

    return response.data;
  }
}