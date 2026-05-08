import { NamecheapContactDto } from "../../dto/NamecheapContactDto";
import { NamecheapContactsDto } from "../../dto/NamecheapContactsDto";

export class NamecheapContactsMapper {
  static fromJson(json: unknown): NamecheapContactsDto {
    if (!json || typeof json !== "object") {
      throw new Error("Invalid Namecheap contacts json");
    }

    const data = json as Record<string, any>;

    return new NamecheapContactsDto({
      registrant: this.mapContact(data.registrant),
      tech: this.mapContact(data.tech),
      admin: this.mapContact(data.admin),
      auxBilling: this.mapContact(data.auxBilling),
    });
  }

  private static mapContact(data: any): NamecheapContactDto {
    if (!data) {
      throw new Error("Invalid contact object");
    }

    return new NamecheapContactDto({
      firstName: data.firstName,
      lastName: data.lastName,

      address1: data.address1,
      address2: data.address2,

      city: data.city,
      stateProvince: data.stateProvince,
      postalCode: data.postalCode,
      country: data.country,

      phone: data.phone,
      email: data.email,
    });
  }
}