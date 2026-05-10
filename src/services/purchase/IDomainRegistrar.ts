import { DomainAvailabilityResult } from '../../utils/namecheap/types/domain.types';

export interface IDomainRegistrar {
  registerDomain(domain: string): Promise<{
    success: boolean;
    rawXml: string;
    reason?: string | null;
  }>;

  checkAvailability(domain: string): Promise<DomainAvailabilityResult>;
}