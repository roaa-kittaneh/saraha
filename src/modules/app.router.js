import connectDB from '../../DB/conniction.js';
import massageRouter from '../modules/massage/massage.router.js';
import authRouter from '../modules/auth/auth.router.js';
import userRouter from '../modules/user/user.router.js';
const initAPP=(app,express)=>{
    app.use(express.json());
    connectDB();
    app.use('/massage', massageRouter);
    app.use('/auth', authRouter);
    app.use('/user', userRouter);
   

}

export default initAPP;