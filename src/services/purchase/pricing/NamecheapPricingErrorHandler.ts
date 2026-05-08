export type PricingError =
  | { type: 'EMPTY_RESPONSE'; message: string }
  | { type: 'PARSE_ERROR'; message: string }
  | { type: 'API_ERROR'; message: string }
  | { type: 'MAPPING_ERROR'; message: string };

export class NamecheapPricingErrorHandler {
  public handleParsed(parsed: any): PricingError | null {
    if (!parsed) {
      return {
        type: 'EMPTY_RESPONSE',
        message: 'Invalid or empty API response',
      };
    }

    const apiResponse = parsed?.ApiResponse;

    if (!apiResponse) {
      return {
        type: 'PARSE_ERROR',
        message: 'Missing ApiResponse block',
      };
    }

    const status = apiResponse?.$?.Status;

    if (status !== 'OK') {
      const errorNode = apiResponse?.Errors?.Error;

      const message =
        typeof errorNode === 'string'
          ? errorNode
          : errorNode?._ || 'Unknown Namecheap API error';

      return {
        type: 'API_ERROR',
        message,
      };
    }

    return null;
  }

  public handleMapping(): PricingError {
    return {
      type: 'MAPPING_ERROR',
      message: 'Failed to map pricing structure',
    };
  }
}