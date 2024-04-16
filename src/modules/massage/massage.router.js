import {Router} from 'express'
import * as massagecontroller from './massage.controller.js';
import auth from '../../middleware/auth.middleware.js';
 
const router=Router();
router.get('/',auth,massagecontroller.getmassage);
router.post('/:receiverdId',massagecontroller.sendmassage);
export default router;