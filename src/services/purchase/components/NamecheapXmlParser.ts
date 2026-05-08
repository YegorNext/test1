import { parseStringPromise } from 'xml2js';

export class NamecheapXmlParser {
  public async parse(xml: string): Promise<any | null> {
    try {
      const result = await parseStringPromise(xml, {
        explicitArray: false,
      });

      return result ?? null;
    } catch (error) {
      console.error('[XML PARSER ERROR]', error);
      return null;
    }
  }
}