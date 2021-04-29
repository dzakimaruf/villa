import { Router } from 'express';
import IndexCtrl from '../controllers/IndexCtrl'

const router = Router();
//router.post('/profile/:id', IndexCtrl.UploadDownloadCtrl, IndexCtrl.villasCtrl.update);
router.post('/multipart/', IndexCtrl.UploadDownloadCtrl.uploadMultipart,
    IndexCtrl.villasCtrl.create,
    IndexCtrl.villasCtrl.findAll);
router.get('/:filename', IndexCtrl.UploadDownloadCtrl.download);

export default router;