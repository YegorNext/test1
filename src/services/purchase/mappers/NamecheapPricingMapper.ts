export class NamecheapPricingMapper {
  static fromXml(parsed: any) {
    const categories =
      parsed?.ApiResponse
        ?.CommandResponse
        ?.UserGetPricingResult
        ?.ProductType
        ?.ProductCategory;

    if (!categories) {
      return null;
    }

    const categoryList = Array.isArray(categories)
      ? categories
      : [categories];

    const result: Record<string, any> = {};

    for (const category of categoryList) {
      const categoryName = category?.$?.Name;

      const product = category?.Product;

      if (!product) {
        continue;
      }

      const prices = product?.Price;

      if (!prices) {
        continue;
      }

      const priceList = Array.isArray(prices)
        ? prices
        : [prices];

      const yearly = priceList.find(
        (p: any) =>
          p?.$?.Duration === '1' &&
          p?.$?.DurationType === 'YEAR'
      );

      if (!yearly) {
        continue;
      }

      result[categoryName] = {
        price: yearly.$?.Price ?? null,
        yourPrice: yearly.$?.YourPrice ?? null,
        additionalCost: yearly.$?.AdditionalCost ?? null,
        currency: yearly.$?.Currency ?? null,
      };
    }

    return result;
  }
}