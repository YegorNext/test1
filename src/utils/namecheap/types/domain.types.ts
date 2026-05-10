export interface DomainCheckResult {
  Domain: string;
  Available: string;
  ErrorNo?: string;
  Description?: string;
  IsPremiumName?: string;
  PremiumRegistrationPrice?: string;
  PremiumRenewalPrice?: string;
  PremiumRestorePrice?: string;
  IcannFee?: string;
  EapFee?: string;
}

export interface DomainAvailabilityResult {
  available: boolean;
  status: string;
  reason: string | null;
}