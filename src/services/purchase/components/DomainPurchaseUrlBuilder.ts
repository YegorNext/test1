import { DomainUtils } from "../dns/DomainUtils";
import { NamecheapContactsMapper } from "../mappers/NamecheapContactsMapper";

export class DomainPurchaseUrlBuilder {
  constructor(
    private readonly account: any,
    private readonly domain: string,
    private readonly years = 1
  ) {}

  public build(): Record<string, string> {
    const { sld, tld } = DomainUtils.split(this.domain);

    const contacts = NamecheapContactsMapper.fromJson(
      this.account.contacts
    );

    const params: Record<string, string> = {
      ApiUser: this.account.apiUser,
      ApiKey: this.account.apiKey,
      UserName: this.account.username,
      ClientIp: this.account.clientIp,

      Command: "namecheap.domains.create",

      DomainName: this.domain,
      Years: this.years.toString(),

      AddFreeWhoisguard: "no",
      WGEnabled: "no",

      SLD: sld,
      TLD: tld,
    };

    this.appendRegistrant(params, contacts.registrant);
    this.appendTech(params, contacts.tech);
    this.appendAdmin(params, contacts.admin);
    this.appendAuxBilling(params, contacts.auxBilling);

    return params;
  }

  private appendRegistrant(params: Record<string, string>, r: any) {
    params["RegistrantFirstName"] = r.firstName;
    params["RegistrantLastName"] = r.lastName;
    params["RegistrantAddress1"] = r.address1;

    if (r.address2) params["RegistrantAddress2"] = r.address2;

    params["RegistrantCity"] = r.city;
    params["RegistrantStateProvince"] = r.stateProvince;
    params["RegistrantPostalCode"] = r.postalCode;
    params["RegistrantCountry"] = r.country;
    params["RegistrantPhone"] = r.phone;
    params["RegistrantEmailAddress"] = r.email;
  }

  private appendTech(params: Record<string, string>, t: any) {
    params["TechFirstName"] = t.firstName;
    params["TechLastName"] = t.lastName;
    params["TechAddress1"] = t.address1;

    if (t.address2) params["TechAddress2"] = t.address2;

    params["TechCity"] = t.city;
    params["TechStateProvince"] = t.stateProvince;
    params["TechPostalCode"] = t.postalCode;
    params["TechCountry"] = t.country;
    params["TechPhone"] = t.phone;
    params["TechEmailAddress"] = t.email;
  }

  private appendAdmin(params: Record<string, string>, a: any) {
    params["AdminFirstName"] = a.firstName;
    params["AdminLastName"] = a.lastName;
    params["AdminAddress1"] = a.address1;

    if (a.address2) params["AdminAddress2"] = a.address2;

    params["AdminCity"] = a.city;
    params["AdminStateProvince"] = a.stateProvince;
    params["AdminPostalCode"] = a.postalCode;
    params["AdminCountry"] = a.country;
    params["AdminPhone"] = a.phone;
    params["AdminEmailAddress"] = a.email;
  }

  private appendAuxBilling(params: Record<string, string>, a: any) {
    params["AuxBillingFirstName"] = a.firstName;
    params["AuxBillingLastName"] = a.lastName;
    params["AuxBillingAddress1"] = a.address1;

    if (a.address2) params["AuxBillingAddress2"] = a.address2;

    params["AuxBillingCity"] = a.city;
    params["AuxBillingStateProvince"] = a.stateProvince;
    params["AuxBillingPostalCode"] = a.postalCode;
    params["AuxBillingCountry"] = a.country;
    params["AuxBillingPhone"] = a.phone;
    params["AuxBillingEmailAddress"] = a.email;
  }
}