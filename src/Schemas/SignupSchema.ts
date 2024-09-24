import {z} from "zod"

export const UserSignupValidation = z
    .string()
    .min(2, "Username must be atleast 2 charecters")
    .max(20, "Username must be at most 20 charecters")
    .regex(/^[a-zA-Z0-9_]+$/, "Username is invalid")

export const  SignupSchema = z.object({
    username : UserSignupValidation,
    email : z
        .string()
        .email({message :"Invalid Email Address"}),
    password : z
            .string()
            .min(6, {message : "Password must be atleast of 6 chars"})
            .max(20, {message : "Password must be atmost 20 charecters"})
        
})