import { NAMECHEAP_XML_KEYS } from './constants/xml.keys';

export class NamecheapXmlExtractor {
  static getCheckDomainResult(document: any) {
    return document
      ?.[NAMECHEAP_XML_KEYS.COMMON.API_RESPONSE]
      ?.[NAMECHEAP_XML_KEYS.COMMON.COMMAND_RESPONSE]
      ?.[NAMECHEAP_XML_KEYS.DOMAIN_CHECK.RESULT]
      ?.$;
  }

  static getCreateDomainResult(document: any) {
    return document
      ?.[NAMECHEAP_XML_KEYS.COMMON.API_RESPONSE]
      ?.[NAMECHEAP_XML_KEYS.COMMON.COMMAND_RESPONSE]
      ?.[NAMECHEAP_XML_KEYS.DOMAIN_CREATE.RESULT]
      ?.at(0)
      ?.$ ?? null;
  }
}