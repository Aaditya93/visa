
import { type DefaultSession } from "next-auth";

export type ExtenedUser = DefaultSession['user'] & {
    role : "Admin" | "User" | "TravelAgent";
}
declare module "next-auth" {
  interface Session{
    user: ExtenedUser;
  }
}





