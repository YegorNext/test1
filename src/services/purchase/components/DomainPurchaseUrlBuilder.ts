import { URLSearchParams } from "url";

import { DomainUtils } from "../dns/DomainUtils";

import { NamecheapContactsMapper } from "../mappers/NamecheapContactsMapper";

export class DomainPurchaseUrlBuilder {
  constructor(
    private readonly account: any,
    private readonly domain: string,
    private readonly years = 1
  ) {}

  public build(): string {
    const { sld, tld } = DomainUtils.split(this.domain);

    const contacts = NamecheapContactsMapper.fromJson(
      this.account.contacts
    );

    const params = new URLSearchParams({
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
    });

    this.appendRegistrant(params, contacts.registrant);
    this.appendTech(params, contacts.tech);
    this.appendAdmin(params, contacts.admin);
    this.appendAuxBilling(params, contacts.auxBilling);

    return `${this.account.apiUrl}?${params.toString()}`;
  }

  private appendRegistrant(params: URLSearchParams, r: any) {
    params.append("RegistrantFirstName", r.firstName);
    params.append("RegistrantLastName", r.lastName);
    params.append("RegistrantAddress1", r.address1);

    if (r.address2) {
      params.append("RegistrantAddress2", r.address2);
    }

    params.append("RegistrantCity", r.city);
    params.append("RegistrantStateProvince", r.stateProvince);
    params.append("RegistrantPostalCode", r.postalCode);
    params.append("RegistrantCountry", r.country);
    params.append("RegistrantPhone", r.phone);
    params.append("RegistrantEmailAddress", r.email);
  }

  private appendTech(params: URLSearchParams, t: any) {
    params.append("TechFirstName", t.firstName);
    params.append("TechLastName", t.lastName);
    params.append("TechAddress1", t.address1);

    if (t.address2) {
      params.append("TechAddress2", t.address2);
    }

    params.append("TechCity", t.city);
    params.append("TechStateProvince", t.stateProvince);
    params.append("TechPostalCode", t.postalCode);
    params.append("TechCountry", t.country);
    params.append("TechPhone", t.phone);
    params.append("TechEmailAddress", t.email);
  }

  private appendAdmin(params: URLSearchParams, a: any) {
    params.append("AdminFirstName", a.firstName);
    params.append("AdminLastName", a.lastName);
    params.append("AdminAddress1", a.address1);

    if (a.address2) {
      params.append("AdminAddress2", a.address2);
    }

    params.append("AdminCity", a.city);
    params.append("AdminStateProvince", a.stateProvince);
    params.append("AdminPostalCode", a.postalCode);
    params.append("AdminCountry", a.country);
    params.append("AdminPhone", a.phone);
    params.append("AdminEmailAddress", a.email);
  }

  private appendAuxBilling(params: URLSearchParams, a: any) {
    params.append("AuxBillingFirstName", a.firstName);
    params.append("AuxBillingLastName", a.lastName);
    params.append("AuxBillingAddress1", a.address1);

    if (a.address2) {
      params.append("AuxBillingAddress2", a.address2);
    }

    params.append("AuxBillingCity", a.city);
    params.append("AuxBillingStateProvince", a.stateProvince);
    params.append("AuxBillingPostalCode", a.postalCode);
    params.append("AuxBillingCountry", a.country);
    params.append("AuxBillingPhone", a.phone);
    params.append("AuxBillingEmailAddress", a.email);
  }
}