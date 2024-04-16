import UserModel from '../../../DB/model/user.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { signinschema, signupschema } from './auth.validation.js';
import sendemail from '../../utilts/sendemail.js';

export const signup = async (req, res) => {
    const { username, email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (user) {
        return res.json({ message: "Email already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, parseInt(process.env.SALTROUND));
    const newUser=await UserModel.create({username,email,password:hashedPassword});
    if(!newUser){
        return res.json({massage:"error while creating user"});
    }

    const html = `
    <h1>hello ${username}</h1>
    <h2>confirm your email</h2>
    <a href='http://localhost:4000/auth/confirmemail/${email}'>confirm email</a>
`;



    await sendemail(email, 'wellcome', html);
    return res.json({massage:"success",newUser});
};

export const signin=async (req,res)=>{
    const {email,password}=req.body;
    
    const user=await UserModel.findOne({email}).select('username password');
    if(!user){
        return res.json({massage:"email not found"});
    } 
    const match=await bcrypt.compare(password, user.password);
    if(!match){
        return res.json({massage:"invalid password"});
    }

    const token=jwt.sign({id:user._id},process.env.LOGINSIG)
   return res.json({massage:"success",token});

}

export const confirmemail=async(req,res)=>{
   try{
    const email=req.params;
    return res.json({email});
   }
   catch(error){
    return res.json({massage:"error",error:error.stack});
   }
    
   // try{
    //    const {token}=req.params;
      //  const decoded=jwt.verify(token,process.env.CONFIRMEMAIL)
      //  const user=await UserModel.findOneAndUpdate({email:decoded.email},{confirmemail:true},{new:true});
       // return res.json({massage:"success",user});
   // }
   // catch(error) {
    //    return res.json({ message: "error", error: error, stack: error.stack });
    //}
}
