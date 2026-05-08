import { parseStringPromise } from 'xml2js';
import { NamecheapHttpClient } from '../dns/NamecheapHttpClient';

export class NamecheapDomainChecker {
  constructor(
    private readonly account: any,
    private readonly httpClient: NamecheapHttpClient
  ) {}

  public async checkAvailability(domain: string): Promise<boolean> {
    console.log('\n[CHECK START]');
    console.log('[DOMAIN]:', domain);

    const params = this.buildParams(domain);

    console.log('[CHECK REQUEST PARAMS]:');
    console.log(JSON.stringify(params, null, 2));

    const xml = await this.httpClient.get(params);

    console.log('[CHECK RAW XML]:');
    console.log(xml);

    const parsed = await parseStringPromise(xml, {
      explicitArray: false,
    });

    console.log('[CHECK PARSED FULL]:');
    console.log(JSON.stringify(parsed, null, 2));

    const result =
      parsed?.ApiResponse?.CommandResponse?.DomainCheckResult?.$;

    console.log('[CHECK ATTRIBUTES]:', result);

    if (!result) {
      console.log('[CHECK ERROR]: missing DomainCheckResult');
      return false;
    }

    const normalized = {
      domain: result.Domain,
      available: result.Available,
      errorNo: result.ErrorNo,
      description: result.Description,
      isPremium: result.IsPremiumName,
    };

    console.log('[CHECK NORMALIZED]:', normalized);

    const interpretation = this.interpret(result);

    console.log('[CHECK INTERPRETATION]:', interpretation);

    return result.Available === 'true';
  }

  private interpret(result: any) {
    if (result.Available === 'true') {
      return {
        status: 'AVAILABLE',
        reason: null,
      };
    }

    return {
      status: 'NOT_AVAILABLE',
      reason:
        result.Description ||
        (result.ErrorNo === '0'
          ? 'Likely already registered or restricted by registry'
          : 'Namecheap returned explicit restriction'),
    };
  }

  private buildParams(domain: string) {
    return {
      ApiUser: this.account.apiUser,
      ApiKey: this.account.apiKey,
      UserName: this.account.username,
      ClientIp: this.account.clientIp,
      Command: 'namecheap.domains.check',
      DomainList: domain,
    };
  }
}