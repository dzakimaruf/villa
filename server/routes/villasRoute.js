import { Router } from 'express';
import IndexCtrl from '../controllers/IndexCtrl'

const router = Router();
router.post('/', IndexCtrl.villasCtrl.create);
router.get('/', IndexCtrl.villasCtrl.findAll);
router.get('/:id', IndexCtrl.villasCtrl.findOne);
router.put('/:id', IndexCtrl.villasCtrl.update);
router.delete('/:id', IndexCtrl.villasCtrl.remove);
router.get('/rawsql/:id', IndexCtrl.villasCtrl.rawSQL);

export default router;