import { Router } from 'express';
import raeController from '../controllers/RaeController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', raeController.index);
router.post('/', loginRequired, raeController.store);
router.put('/:id', loginRequired, raeController.update);
router.get('/:cpf', raeController.show);
router.delete('/:id', loginRequired, raeController.delete);

export default router;