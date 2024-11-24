"use client"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from "react-hook-form";
import { LoginSchema } from '@/app/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Socials } from './socials';
import { LoginButton } from './login-button';
import { Input } from '@/components/ui/input';
import { login } from '@/actions/auth/login';
import { useTransition, useState} from 'react';
import { FormError } from './form-error';
import { FormSuccess } from './form-success';




export const LoginForm = () =>{

    
    const [error, setError] = useState<string | undefined>("");
    const [success, setScuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();
    const onSubmit = (values : z.infer<typeof LoginSchema>) => {
      setError("");
      setScuccess("");
      startTransition(() => {
        login(values).then((data) => {
          setError(data?.error);
          setScuccess(data?.success);
        })  
      })

    };
    
    
      const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
          email: "",
          password: "",
        },

      });


    return(
        <div className='space-y-4'>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="name@example.com" {...field} type="text" disabled={isPending}/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center justify-between">
                        <FormLabel>Password</FormLabel>
                        <a 
                          href="http://localhost:3000/auth/reset" 
                          className="text-sm   hover:underline"
                        >
                          Forgot password?
                        </a>
                      </div>
                      <FormControl>
                        <Input {...field} type="password" placeholder="********" disabled={isPending}/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormSuccess message={success} />
                <FormError message={error } />
                <LoginButton/>
              
                
              </form>
            </Form>

            <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-sm uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
            <Socials />

            <div className="text-center text-sm">
              <span className="">Don&apos;t have an account?</span>{' '}
              <a 
                href="http://localhost:3000/auth/register" 
                className=" hover:underline font-medium"
              >
                Sign up
              </a>
            </div>
        </div>
    )
}
