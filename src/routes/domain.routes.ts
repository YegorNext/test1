import { Router } from 'express';
import { DomainController } from '../controllers/domain.controller';
import { NamecheapAccountService } from '../services/NamecheapAccountService';
import { NamecheapServiceFactory } from '../services/factories/NamecheapServiceFactory';

const router = Router();

const factory = new NamecheapServiceFactory(
  new NamecheapAccountService(),
  process.env.NAMECHEAP_API_URL!,
  process.env.NAMECHEAP_CLIENT_IP!,
);

const controller = new DomainController(factory);

router.post('/namecheap/add-a', controller.addARecordOnNamecheap);
router.post('/namecheap/purchase', controller.purchaseDomain);
router.post('/namecheap/pricing', controller.getDomainPricing);

export default router;
