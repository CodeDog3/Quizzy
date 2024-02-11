import mongoose from "mongoose"

export const connectMongoDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI as string)
    }
    catch(err){
        console.log("error connecting to mongodb: ", err)
    }}