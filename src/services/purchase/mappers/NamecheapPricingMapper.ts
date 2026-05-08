export class NamecheapPricingMapper {
  static fromXml(parsed: any) {
    try {
      const result =
        parsed?.ApiResponse?.CommandResponse?.UserGetPricingResult;

      const productTypes = this.toArray(result?.ProductType);

      const pricing: any = {};

      for (const type of productTypes) {
        const categories = this.toArray(type?.ProductCategory);

        for (const category of categories) {
          const products = this.toArray(category?.Product);

          for (const product of products) {
            const prices = this.toArray(product?.Price);

            pricing[product?.Name] ??= [];

            for (const price of prices) {
              pricing[product.Name].push({
                duration: Number(price.Duration),
                currency: price.Currency,
                price: Number(price.Price),
                type: price.PricingType,
                yourPrice: Number(price.YourPrice),
              });
            }
          }
        }
      }

      return Object.keys(pricing).length ? pricing : null;
    } catch (e) {
      console.log('[NAMECHEAP][MAPPER ERROR]', e);
      return null;
    }
  }

  private static toArray<T>(value: T | T[] | undefined): T[] {
    if (!value) return [];
    return Array.isArray(value) ? value : [value];
  }
}