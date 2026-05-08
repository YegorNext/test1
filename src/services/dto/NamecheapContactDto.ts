export class NamecheapContactDto {
  firstName!: string;
  lastName!: string;
  address1!: string;
  address2?: string;
  city!: string;
  stateProvince!: string;
  postalCode!: string;
  country!: string;
  phone!: string;
  email!: string;

  constructor(partial?: Partial<NamecheapContactDto>) {
    Object.assign(this, partial);

    this.address2 = this.address2 ?? '';
  }
}