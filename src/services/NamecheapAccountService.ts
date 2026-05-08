import { prisma } from '../utils/prisma';
import { NamecheapAccountEntity } from '@org/db-models';

export class NamecheapAccountService {
  async findById(id: string): Promise<NamecheapAccountEntity | null> {
    const account = await prisma.namecheapAccount.findUnique({
      where: { id },
    });

    if (!account) {
      return null;
    }

    return new NamecheapAccountEntity({
      ...account,
      contacts: this.normalizeContacts(account.contacts),
    });
  }

  private normalizeContacts(value: any): Record<string, any> {
    if (!value || typeof value !== 'object' || Array.isArray(value)) {
      return {};
    }

    return value as Record<string, any>;
  }
}