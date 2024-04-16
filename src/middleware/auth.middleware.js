import jwt from "jsonwebtoken";
import UserModel from "../../DB/model/user.model.js";
const auth= async(req,res,next)=>{
    const {authorization}=req.headers;
    if(!authorization.startsWith(process.env.BEARERKEY)){
        return res.json({ message: "Invalid token1" });
    }
   const token=authorization.split(process.env.BEARERKEY)[1];
   try {
    const decoded = await jwt.verify(token, process.env.LOGINSIG);
    const authUser=await UserModel.findById(decoded.id).select('username');
    req.user=authUser;
    next();
} catch (error) {
    return res.json({ message: "Invalid token2",error:error.stack });
}


}
export default auth;
