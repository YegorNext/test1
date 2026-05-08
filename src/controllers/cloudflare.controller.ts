import { Request, Response } from "express";
import { DomainProvisioningFactory } from "../services/factories/DomainProvisioning.factory";

export class CloudflareController {
  constructor(private readonly provisioningFactory: DomainProvisioningFactory) {}

  provisionDomain = async (req: Request, res: Response) => {
    const { domain, ip, cloudflareAccountId, namecheapAccountId } = req.body;

    if (!domain || !ip || !cloudflareAccountId || !namecheapAccountId) {
      return res.status(400).json({
        message: "domain, ip, cloudflareAccountId, namecheapAccountId are required",
      });
    }

    try {
      const service =
        await this.provisioningFactory.createCloudflareProvisionService(
          cloudflareAccountId,
          namecheapAccountId
        );

      const result = await service.provision(domain, ip);

      return res.json({
        success: true,
        provider: "cloudflare",
        result,
      });
    } catch (error: any) {
      return res.status(500).json({
        success: false,
        message: error.message,
        details: error.details,
      });
    }
  };
}