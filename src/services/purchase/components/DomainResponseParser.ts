import { parseStringPromise } from 'xml2js';
import { NamecheapXmlExtractor } from '../../../utils/namecheap/xml.extractor';

export class DomainResponseParser {
  public async parseRegistered(xml: string): Promise<boolean> {
    const document = await this.parseXml(xml);

    const domainResult = NamecheapXmlExtractor.getCreateDomainResult(document);

    return this.isRegistered(domainResult);
  }

  private async parseXml(xml: string): Promise<any> {
    return parseStringPromise(xml);
  }

  private isRegistered(domainResult: any): boolean {
    return domainResult?.Registered === 'true';
  }
}