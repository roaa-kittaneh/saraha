import { Schema } from "mongoose";
import { signinschema } from "../modules/auth/auth.validation.js";

const datamethod=['body','params','query','headers'];
const validation2=(Schema)=>{
    return (req,res,next)=>{
        const validationArr=[];
        datamethod.forEach(key=>{
            if(Schema[key]){
                const validations=Schema[key].validate(req[key],{abortEarly:false});
                if(validations.error){
                    validationArr.push(validations.error);
                }
            }
        });
        
       
        if(validationArr.length>0){
            return res.json({massage:"validatio error", validationArr});
        }
        next();
    }
}

export default validation2;