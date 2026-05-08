export class CloudflareApiError extends Error {
  status?: number;
  details?: unknown;

  constructor(message: string, status?: number, details?: unknown) {
    super(message);
    this.name = "CloudflareApiError";

    if (status !== undefined) {
      this.status = status;
    }

    if (details !== undefined) {
      this.details = details;
    }
  }
}