import { Router } from 'express';
import IndexCtrl from '../controllers/IndexCtrl'

const router = Router();
router.post('/', IndexCtrl.UserCtrl.create);
router.get('/', IndexCtrl.UserCtrl.findAll);
router.get('/:id', IndexCtrl.UserCtrl.findOne);
router.put('/:id', IndexCtrl.UserCtrl.update);
router.delete('/:id', IndexCtrl.UserCtrl.remove);
router.get('/rawsql/:id', IndexCtrl.UserCtrl.rawSQL);

export default router;