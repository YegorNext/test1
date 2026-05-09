import { toArray, getAttr } from './xml.utils';

export class NamecheapPricingExtractor {
  static getCategories(parsed: any) {
    return parsed?.ApiResponse
      ?.CommandResponse
      ?.UserGetPricingResult
      ?.ProductType
      ?.ProductCategory;
  }

  static getPrices(product: any) {
    return toArray(product?.Price);
  }

  static getCategoryName(category: any) {
    return getAttr(category)?.Name;
  }

  static getAttrs(node: any) {
    return getAttr(node);
  }
}