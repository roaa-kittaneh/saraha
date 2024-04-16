import massagemodel from "../../../DB/model/massage.model.js";
import UserModel from "../../../DB/model/user.model.js";

export const getmassage= async(req,res)=>{
const massaglist=await massagemodel.find({receiverdId:req.user._id})
.select('content createAt');
return res.json({massage:"success",massaglist});

}

export const sendmassage= async(req,res)=>{
const {receiverdId}=req.params;
const {massage}=req.body;
const user =await UserModel.findById(receiverdId);
if(!user){
    return res.json({massage:"user not found"});

}
 const creatmassage=await massagemodel.create({content:massage,receiverdId});
 return res.json({massage:"success",creatmassage});
}