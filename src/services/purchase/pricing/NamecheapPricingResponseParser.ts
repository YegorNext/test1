import { parseStringPromise } from 'xml2js';

export class NamecheapPricingResponseParser {
  async parse(xml: string): Promise<any | null> {
    try {
      const parsed = await parseStringPromise(xml, {
        explicitArray: false,
        ignoreAttrs: false,
        trim: true,
        mergeAttrs: true,
      });

      return parsed ?? null;
    } catch (e) {
      console.log('[NAMECHEAP][PRICING] PARSE ERROR:', e);
      return null;
    }
  }
}