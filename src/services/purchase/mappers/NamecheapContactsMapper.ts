import { NamecheapContactsDto } from '../../dto/NamecheapContactsDto';
import { NamecheapContactDto } from '../../dto/NamecheapContactDto';

export class NamecheapContactsMapper {
  static fromJson(input: any): NamecheapContactsDto {
    const source = input?.contacts ?? input;

    return new NamecheapContactsDto({
      registrant: new NamecheapContactDto(
        this.normalize(source?.registrant)
      ),
      tech: new NamecheapContactDto(
        this.normalize(source?.tech)
      ),
      admin: new NamecheapContactDto(
        this.normalize(source?.admin)
      ),
      auxBilling: new NamecheapContactDto(
        this.normalize(source?.auxBilling)
      ),
    });
  }

  private static normalize(c: any) {
    if (!c) return {};

    return {
      firstName: c.firstName,
      lastName: c.lastName,
      address1: c.address1,
      address2: c.address2,
      city: c.city,
      stateProvince: c.stateProvince,
      postalCode: c.postalCode,
      country: c.country,
      phone: this.normalizePhone(c.phone),
      email: c.email,
    };
  }

  private static normalizePhone(phone: string) {
    if (!phone) return '';
    return phone.replace(/\./g, '');
  }
}