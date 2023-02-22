import mongoose, { mongo } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    birthDay: { type: Number, required: true, minLength: 8,maxLength: 8 },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, required: true, default: Date.now }
});

userSchema.pre("save", async function(){

    //패스워드 암호화 후 저장
    this.password = await bcrypt.hash(this.password, 5); 
});

const User = mongoose.model("User", userSchema);

export default User;