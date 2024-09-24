import {z} from "zod"

export const verifySchema = z.object({
    identifier : z.string().length(6, {message : "Must be 6 len"})
})
