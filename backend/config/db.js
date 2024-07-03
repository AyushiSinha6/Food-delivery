import mongoose from "mongoose"

export const connectDB= async()=>{
    await mongoose.connect('mongodb+srv://sinhaayushi338:06012005@cluster0.sykylyb.mongodb.net/food-del').then(()=>console.log("DB connected"))
}