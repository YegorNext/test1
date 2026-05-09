export class NamecheapContactsParamsBuilder {
  static build(contacts: any) {
    if (!contacts) {
      throw new Error('Contacts are missing');
    }

    return {
      RegistrantFirstName: contacts.firstName,
      RegistrantLastName: contacts.lastName,
      RegistrantAddress1: contacts.address1,
      RegistrantCity: contacts.city,
      RegistrantStateProvince: contacts.stateProvince,
      RegistrantPostalCode: contacts.postalCode,
      RegistrantCountry: contacts.country,
      RegistrantPhone: contacts.phone,
      RegistrantEmailAddress: contacts.email,

      TechFirstName: contacts.firstName,
      TechLastName: contacts.lastName,
      TechAddress1: contacts.address1,
      TechCity: contacts.city,
      TechStateProvince: contacts.stateProvince,
      TechPostalCode: contacts.postalCode,
      TechCountry: contacts.country,
      TechPhone: contacts.phone,
      TechEmailAddress: contacts.email,

      AdminFirstName: contacts.firstName,
      AdminLastName: contacts.lastName,
      AdminAddress1: contacts.address1,
      AdminCity: contacts.city,
      AdminStateProvince: contacts.stateProvince,
      AdminPostalCode: contacts.postalCode,
      AdminCountry: contacts.country,
      AdminPhone: contacts.phone,
      AdminEmailAddress: contacts.email,

      AuxBillingFirstName: contacts.firstName,
      AuxBillingLastName: contacts.lastName,
      AuxBillingAddress1: contacts.address1,
      AuxBillingCity: contacts.city,
      AuxBillingStateProvince: contacts.stateProvince,
      AuxBillingPostalCode: contacts.postalCode,
      AuxBillingCountry: contacts.country,
      AuxBillingPhone: contacts.phone,
      AuxBillingEmailAddress: contacts.email,
    };
  }
}