import { Mode } from "fs";
import mongoose, {Schema, Document, Models} from "mongoose";
import { string } from "zod";

export interface Message extends Document{
    content : string
    createdAt : Date 
}

const MessageSchema : Schema<Message> = new Schema({
    content : {
        type : String,
        required : true
    },
    createdAt : {
        type : Date, 
        required : true, 
        default : Date.now
    }
})

export interface User extends Document{
    username : string, 
    email : string,
    password :string, 
    verifyCode : string,
    VerifyCodeExpiry : Date,
    isAcceptingMessages : boolean,
    messages : Message[],
    isVerified : boolean
}

const UserSchema : Schema<User> = new Schema({
    username : {
        type : String,
        required : true, 
        trim : true,
        unique : true
    },
    email: {
        type :String, 
        required : true, 
        match : [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Email is not Correct"],
        unique : true
    },
    password : {
        type : String, 
        required : [true, "Password is required"]
    },
    verifyCode : {
        type : String, 
        required : [true, "Verify Code is required"]
    },
    VerifyCodeExpiry : {
        type : Date,
        required: [true, "Verify Code expiry is required"]
    },
    isAcceptingMessages: {
        type: Boolean,
        default: true,
    },
    messages: [MessageSchema], // Embed MessageSchema
    isVerified : {
        type : Boolean,
        default: false
    }

})

const UserModel = (mongoose.models.AnonymousAppUsers as mongoose.Model<User>) || (mongoose.model<User>("User", UserSchema))
export default UserModel