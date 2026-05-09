import { Request, Response, NextFunction } from 'express';
import { NamecheapServiceFactory } from '../services/factories/NamecheapServiceFactory';

export class DomainController {
  constructor(private readonly factory: NamecheapServiceFactory) {}

  addARecordOnNamecheap = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { domain, ip, host, accountId } = req.body;

    if (!domain || !ip || !accountId) {
      res.status(400).json({ success: false, message: 'domain, ip and accountId are required' });
      return;
    }

    try {
      const dnsService = await this.factory.createDNSService(accountId);
      const aRecordResult = await dnsService.setARecord(domain, ip, host ?? '@');

      res.json({ domain, namecheapARecord: aRecordResult });
    } catch (error) {
      next(error);
    }
  };

  purchaseDomain = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { domain, accountId } = req.body;

    if (!domain || !accountId) {
      res.status(400).json({ success: false, message: 'domain and accountId are required' });
      return;
    }

    try {
      const registrar = await this.factory.createRegistrar(accountId);
      const registered = await registrar.registerDomain(domain);

      res.json({
        domain,
        registered,
        message: registered ? 'Domain successfully registered' : 'Domain registration failed',
      });
    } catch (error) {
      next(error);
    }
  };

  getDomainPricing = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { domain, accountId } = req.body;

    if (!domain || !accountId) {
      res.status(400).json({ success: false, message: 'domain and accountId are required' });
      return;
    }

    try {
      const pricingService = await this.factory.createPricingService(accountId);
      const result = await pricingService.getPricing(domain);

      res.json({ domain: result.domain, price: result.pricing, errors: result.errors });
    } catch (error) {
      next(error);
    }
  };
}
