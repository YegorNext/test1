import { Router } from "express";
import { CloudflareController } from "../controllers/cloudflare.controller";
import { errorHandler } from "../utils/handlers/error.handler";

import { DomainProvisioningFactory } from "../services/factories/DomainProvisioning.factory";
import { NamecheapAccountService } from "../services/NamecheapAccountService";
import { CloudflareAccountService } from "../services/CloudflareAccountService";
import { NamecheapServiceFactory } from "../services/factories/NamecheapServiceFactory";

const router = Router();

const namecheapAccountService = new NamecheapAccountService();
const cloudflareAccountService = new CloudflareAccountService();

const namecheapFactory = new NamecheapServiceFactory(
  namecheapAccountService,
  process.env.NAMECHEAP_API_URL!,
  process.env.NAMECHEAP_CLIENT_IP!
);

const provisioningFactory = new DomainProvisioningFactory(
  cloudflareAccountService,
  namecheapFactory
);


const controller = new CloudflareController(provisioningFactory);


router.post("/provision", async (req, res, next) => {
  try {
    await controller.provisionDomain(req, res);
  } catch (err) {
    next(err);
  }
});

router.use(errorHandler);

export default router;