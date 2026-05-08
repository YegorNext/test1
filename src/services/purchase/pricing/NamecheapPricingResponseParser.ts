import { parseStringPromise } from 'xml2js';

export class NamecheapPricingResponseParser {
  async parse(xml: string): Promise<any | null> {
    try {
      return await parseStringPromise(xml, {
        explicitArray: false,
        ignoreAttrs: false,
        trim: true,
      });
    } catch (e) {
      console.log('[NAMECHEAP][PRICING] PARSE ERROR:', e);
      return null;
    }
  }
}