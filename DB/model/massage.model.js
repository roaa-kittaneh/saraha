import { Schema, Types,model } from "mongoose";
 const MassageSchema= new Schema({
    content:{
        type:String,
        required:true,

    },
    receiverdId:{
        type:Types.ObjectId,
        required:true,
    },
    

},
{
        timestamps:true
    
    }); 

    const massagemodel=model('massage',MassageSchema);
    export default massagemodel;