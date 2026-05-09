import { NamecheapAccountEntity } from '@org/db-models';
import { NamecheapAccount } from '../../../types/NamecheapAccount';

export class NamecheapAccountMapper {
  static toDomain(entity: NamecheapAccountEntity, apiUrl: string, clientIp: string): NamecheapAccount {
    return {
      apiUser: entity.apiUser,
      apiKey: entity.apiKey,
      username: entity.username,

      apiUrl,
      clientIp,
    };
  }
}