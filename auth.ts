
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth"
import authConfig from "./auth.config";
import client from "./lib/mongo";
import { emailVerified, getUserById } from "./db/models/User";


export const { handlers, signIn, signOut, auth } = NextAuth({
  pages:{
    signIn: '/auth/signin',
    error: '/auth/error',
  },
  events:{
    async linkAccount({user}){
      console.log("linkAccount");
      if (user.id) {
        await emailVerified(user.id);
      }
    }

  },
  callbacks:{
    // async signIn({account}){
    //   if(account?.provider !== 'credentials') return true;

    // //   const existingUser = await getUserById(user.id);
    // //   console.log(existingUser);
      
    // //   if (!existingUser || existingUser.emailVerified === null) {
    // //     // Return false if no user is found or if email is not verified
    // //     return false;
    // // }

    // //   return true;

    // },
    async session({ session,token}){
      if(token.sub && session.user){
        session.user.id = token.sub;
      }
      if(token.role && session.user){
        session.user.role = token.role as "Admin" | "User" | "TravelAgent";
      }
      if(token.image && session.user){
        session.user.image = token.image as string;
      }

      

      return session;
    },
    async jwt({token}){
      if(!token.sub){
        return token;
      }
      const existingUser  = await getUserById(token.sub);
      if(!existingUser){
        return token;
      }
      token.image = existingUser.image;
      token.role = existingUser.role;

      return token;
    }
  },
  adapter: MongoDBAdapter(client),
  session:{ strategy : 'jwt'},
  ...authConfig,

})

