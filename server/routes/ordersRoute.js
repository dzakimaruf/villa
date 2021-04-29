import { Router } from 'express';
import IndexCtrl from '../controllers/IndexCtrl'

const router = Router();
router.post('/', IndexCtrl.ordersCtrl.create);
router.get('/', IndexCtrl.ordersCtrl.findAll);
router.get('/:id', IndexCtrl.ordersCtrl.findOne);
router.put('/:id', IndexCtrl.ordersCtrl.update);
router.delete('/:id', IndexCtrl.ordersCtrl.remove);
router.get('/rawsql/:id', IndexCtrl.ordersCtrl.rawSQL);

export default router;