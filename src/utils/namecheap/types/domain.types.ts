export interface DomainCheckResult {
  Available: string;
  Description?: string;
  ErrorNo?: string;
}

export interface DomainAvailabilityResult {
  available: boolean;
  status: string;
  reason: string | null;
}
