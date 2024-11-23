"use server"
import { contactFormSchema } from "@/app/schemas"
import * as z from 'zod';  
import ContactForm from "@/db/models/ContactFrom"; 
import dbConnect from "@/lib/db";
export const contactUs = async(values :z.infer<typeof contactFormSchema>) =>{
    await dbConnect();
try{
    const validatedFields = contactFormSchema.safeParse(values);
    if (!validatedFields.success) {
        throw new Error('Invalid input');
    }

    const { name, email, mobile } = validatedFields.data;

    await ContactForm.create({
        name,
        email,
        mobile,
        date: new Date()
    });
// Send admin mail
//send user mail about how to apply for visa


    return {success: "Form submitted successfully"}

}catch(error){
    console.error("Error during contact form submission", error);
    return {error: "Something went wrong"}
}





}
