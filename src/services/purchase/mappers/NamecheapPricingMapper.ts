import { toArray, getAttr, isYearlyPrice } from '../../../utils/namecheap/xml.utils';

export class NamecheapPricingMapper {
  static fromXml(parsed: any) {
    const categories = this.extractCategories(parsed);

    if (!categories) {
      return null;
    }

    const result: Record<string, any> = {};

    for (const category of toArray(categories)) {
      const categoryName = getAttr(category)?.Name;

      const yearly = this.extractYearlyPrice(category);
      if (!yearly) continue;

      const attrs = getAttr(yearly);

      result[categoryName] = {
        price: attrs.Price ?? null,
        yourPrice: attrs.YourPrice ?? null,
        additionalCost: attrs.AdditionalCost ?? null,
        currency: attrs.Currency ?? null,
      };
    }

    return result;
  }

  private static extractCategories(parsed: any) {
    return parsed?.ApiResponse
      ?.CommandResponse
      ?.UserGetPricingResult
      ?.ProductType
      ?.ProductCategory;
  }

  private static extractYearlyPrice(category: any) {
    const product = category?.Product;
    if (!product) return null;

    const prices = toArray(product?.Price);

    return prices.find(isYearlyPrice) ?? null;
  }
}