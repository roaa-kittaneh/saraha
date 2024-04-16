import {Router} from 'express'
import * as authcontroller from './auth.controller.js';
import validation2 from '../../middleware/validation.js';
import { signinschema, signupschema } from './auth.validation.js';
 
const router=Router();
router.post('/signup',validation2(signupschema),authcontroller.signup);
router.post('/signin',validation2(signinschema),authcontroller.signin);
router.post('/confrimemail/:token',authcontroller.confirmemail);
export default router;