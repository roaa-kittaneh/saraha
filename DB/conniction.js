import mongoose from 'mongoose';

const connectDB=()=>{
    mongoose.connect(process.env.db)
    .then(()=>{
        console.log("connected")
    }) 
    .catch((error)=>{
        console.log("error")
    })
}

export default connectDB;