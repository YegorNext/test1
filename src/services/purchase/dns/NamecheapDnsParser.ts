export class NamecheapDnsParser {
  parseSetARecord(parsed: any): boolean {
    const result =
      parsed?.ApiResponse?.CommandResponse?.DomainDNSSetHostsResult;

    const status = parsed?.ApiResponse?.$?.Status;

    return status === 'OK' && !!result;
  }

  parseSetCustomNameservers(parsed: any): boolean {
    const result =
      parsed?.ApiResponse?.CommandResponse?.DomainDNSSetCustomResult;

    const status = parsed?.ApiResponse?.$?.Status;

    return status === 'OK' && result?.$?.Updated === 'true';
  }
}