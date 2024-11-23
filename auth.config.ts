import { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "./app/schemas";
import { authenticateUser } from "./db/models/User";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";


export default {
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        Github({
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
        }),
        Credentials({
           
           
            authorize: async (credentials) =>{


                // Validate the credentials against the schema
                const validatedFields = LoginSchema.safeParse(credentials);
                if (!validatedFields.success) {
                    throw new Error("Invalid input data");
                }

                const { email, password } = validatedFields.data;
                return authenticateUser({ email, password });
            },
        }),
    ],
   
    
} satisfies NextAuthConfig;
