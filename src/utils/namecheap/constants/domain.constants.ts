export const DOMAIN_STATUS = {
  AVAILABLE: 'AVAILABLE',
  NOT_AVAILABLE: 'NOT_AVAILABLE',
} as const;

export const DOMAIN_REASONS = {
  EMPTY_RESPONSE: 'Empty response',
  LIKELY_REGISTERED: 'Likely already registered or restricted by registry',
  EXPLICIT_RESTRICTION: 'Namecheap returned explicit restriction',
} as const;