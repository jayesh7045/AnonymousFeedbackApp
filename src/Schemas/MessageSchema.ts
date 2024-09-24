import {z} from "zod"
export const MessagesSchema = z.object({
    content : z.string().min(10, {message : "The message len must be 10"}).max(300, {message : "Not more than 300"})git 
})