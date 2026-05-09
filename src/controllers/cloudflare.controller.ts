import { Request, Response, NextFunction } from 'express';
import { DomainProvisioningFactory } from '../services/factories/DomainProvisioning.factory';

export class CloudflareController {
  constructor(private readonly provisioningFactory: DomainProvisioningFactory) {}

  provisionDomain = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { domain, ip, cloudflareAccountId, namecheapAccountId } = req.body;

    if (!domain || !ip || !cloudflareAccountId || !namecheapAccountId) {
      res.status(400).json({
        success: false,
        message: 'domain, ip, cloudflareAccountId and namecheapAccountId are required',
      });
      return;
    }

    try {
      const service = await this.provisioningFactory.createCloudflareProvisionService(
        cloudflareAccountId,
        namecheapAccountId,
      );

      const result = await service.provision(domain, ip);

      res.json({ success: true, provider: 'cloudflare', result });
    } catch (error) {
      next(error);
    }
  };
}
