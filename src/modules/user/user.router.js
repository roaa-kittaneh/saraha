import {Router} from 'express'
import * as usercontroller from './user.controller.js';
import auth from '../../middleware/auth.middleware.js';
 
const router=Router();
router.get('/profile',auth,usercontroller. profile);

export default router;