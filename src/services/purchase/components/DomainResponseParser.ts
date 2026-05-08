import { parseStringPromise } from 'xml2js';

export class DomainResponseParser {
  public async parseRegistered(xml: string): Promise<boolean> {
    console.log('[REGISTER RAW XML LENGTH]:', xml?.length);

    try {
      const result = await parseStringPromise(xml);

      console.log('[REGISTER PARSED FULL]:');
      console.log(JSON.stringify(result, null, 2));

      const commandResponse =
        result?.ApiResponse?.CommandResponse?.[0];

      const domainResult =
        commandResponse?.DomainCreateResult?.[0]?.$;

      console.log('[REGISTER ATTRIBUTES]:', domainResult);

      if (!domainResult) {
        console.log('[REGISTER ERROR]: missing DomainCreateResult');
        return false;
      }

      return domainResult.Registered === 'true';
    } catch (e) {
      console.error('[REGISTER PARSE ERROR]:', e);
      return false;
    }
  }
}