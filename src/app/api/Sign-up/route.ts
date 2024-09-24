import dbConnect from "@/lib/dbConnect";
import UserModel from "@/models/User";
import bcrypt from "bcryptjs"
import { sendVerificationEmail } from "@/helpers/sendVerificationEmail";
export async function POST(request : Request){
    try{
        const {username, email, password} = await request.json()
    }
    catch(err)
    {
        console.log("Error Registering User", err);
        return Response.json({
            success : false, 
            message : "Error Registering User"
            }, 
            {
                status :500  
            }
        )
    }

}
