import { Request, Response } from 'express';

import { NamecheapAccountService } from '../services/NamecheapAccountService';
import { NamecheapServiceFactory } from '../services/factories/NamecheapServiceFactory';

export class DomainController {
  private factory: NamecheapServiceFactory;

  constructor() {
    const accountService = new NamecheapAccountService();

    this.factory = new NamecheapServiceFactory(
      accountService,
      process.env.NAMECHEAP_API_URL!,  
      process.env.NAMECHEAP_CLIENT_IP! 
    );
  }


  addARecordOnNamecheap = async (req: Request, res: Response) => {
    const { domain, ip, host, accountId } = req.body;

    if (!domain || !ip || !accountId) {
      return res.status(400).json({
        message: 'Domain, IP and accountId are required.',
      });
    }

    try {
      const dnsService = await this.factory.createDNSService(accountId);

      const aRecordResult = await dnsService.setARecord(
        domain,
        ip,
        host || '@'
      );

      return res.json({
        domain,
        namecheapARecord: aRecordResult,
      });
    } catch (error: any) {
      return res.status(500).json({
        domain,
        message: error.message,
      });
    }
  };


  purchaseDomain = async (req: Request, res: Response) => {
    const { domain, accountId } = req.body;

    console.log("TEST");

    if (!domain || !accountId) {
      return res.status(400).json({
        message: 'Domain and accountId are required.',
      });
    }

    try {
      const registrar = await this.factory.createRegistrar(accountId);

      const success = await registrar.registerDomain(domain);

      return res.json({
        domain,
        registered: success,
        message: success
          ? 'Domain successfully registered'
          : 'Domain registration failed',
      });
    } catch (error: any) {
      return res.status(500).json({
        domain,
        registered: false,
        message: error.message,
      });
    }
  };

  getDomainPricing = async (req: Request, res: Response) => {
    const { domain, accountId } = req.body;

    if (!domain || !accountId) {
      return res.status(400).json({
        message: 'Domain and accountId are required.',
      });
    }

    try {
      const pricingService = await this.factory.createPricingService(accountId);

      const result = await pricingService.getPricing(domain);

      return res.json({
        domain: result.domain,
        price: result.pricing,
        errors: result.errors,
      });
    } catch (error: any) {
      return res.status(500).json({
        domain,
        message: error.message,
      });
    }
  };
}