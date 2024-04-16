import UserModel from "../../../DB/model/user.model.js";

export const profile= async(req,res)=>{
    const user=await UserModel.findById(req.user._id);
    return res.json({massage:"success",user});
}