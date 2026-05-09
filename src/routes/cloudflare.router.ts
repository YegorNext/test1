import { Router } from 'express';
import { CloudflareController } from '../controllers/cloudflare.controller';
import { DomainProvisioningFactory } from '../services/factories/DomainProvisioning.factory';
import { NamecheapAccountService } from '../services/NamecheapAccountService';
import { CloudflareAccountService } from '../services/CloudflareAccountService';
import { NamecheapServiceFactory } from '../services/factories/NamecheapServiceFactory';

const router = Router();

const namecheapFactory = new NamecheapServiceFactory(
  new NamecheapAccountService(),
  process.env.NAMECHEAP_API_URL!,
  process.env.NAMECHEAP_CLIENT_IP!,
);

const provisioningFactory = new DomainProvisioningFactory(
  new CloudflareAccountService(),
  namecheapFactory,
);

const controller = new CloudflareController(provisioningFactory);

// Controller handles errors via next(error) — no wrapper needed
router.post('/provision', controller.provisionDomain);

export default router;
