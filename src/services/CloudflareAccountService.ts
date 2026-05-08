import { prisma } from "../utils/prisma";
import { CloudflareAccountEntity } from "@org/db-models";

export class CloudflareAccountService {
  async findById(id: string): Promise<CloudflareAccountEntity | null> {
    const account = await prisma.cloudflareAccount.findUnique({
      where: { id },
    });

    if (!account) return null;

    return new CloudflareAccountEntity({
      id: account.id,
      name: account.name,
      apiToken: account.apiToken,
      accountId: account.accountId,
    });
  }
}