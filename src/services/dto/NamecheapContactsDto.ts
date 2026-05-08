import { NamecheapContactDto } from "./NamecheapContactDto";

export class NamecheapContactsDto {
  registrant!: NamecheapContactDto;
  tech!: NamecheapContactDto;
  admin!: NamecheapContactDto;
  auxBilling!: NamecheapContactDto;

  constructor(partial?: Partial<NamecheapContactsDto>) {
    Object.assign(this, partial);
  }
}