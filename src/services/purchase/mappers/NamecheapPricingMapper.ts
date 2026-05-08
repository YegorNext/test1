import { NormalizedPricing } from '../../dto/NormalizedPricing';

export class NamecheapPricingMapper {
  static fromXml(apiResponse: any): NormalizedPricing | null {
    try {
      const result =
        apiResponse?.CommandResponse?.UserGetPricingResult;

      if (!result?.ProductType) {
        return null;
      }

      const productTypes = Array.isArray(result.ProductType)
        ? result.ProductType
        : [result.ProductType];

      const domainType = productTypes.find(
        (t: any) => t?.$?.Name === 'DOMAIN'
      );

      if (!domainType) return null;

      const registerCategory = this.findCategory(domainType, 'register');
      const renewCategory = this.findCategory(domainType, 'renew');
      const transferCategory = this.findCategory(domainType, 'transfer');

      return {
        register1y: this.extractPrice(registerCategory),
        renew1y: this.extractPrice(renewCategory),
        transfer1y: this.extractPrice(transferCategory),
      };
    } catch {
      return null;
    }
  }

  private static findCategory(type: any, name: string) {
    const categories = Array.isArray(type.ProductCategory)
      ? type.ProductCategory
      : [type.ProductCategory];

    return categories.find((c: any) => c?.$?.Name === name);
  }

  private static extractPrice(category: any): number | null {
    if (!category?.Product) return null;

    const products = Array.isArray(category.Product)
      ? category.Product
      : [category.Product];

    const firstProduct = products[0];

    const price = firstProduct?.Price?.[0]?.$?.Price;

    return price ? Number(price) : null;
  }
}