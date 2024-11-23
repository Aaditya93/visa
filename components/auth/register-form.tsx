"use client"

import React from 'react';
import { Input } from '@/components/ui/input';
import { Socials } from '@/components/auth/socials';
import { RegisterButton } from '@/components/auth/register-button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { RegisterSchema } from '@/app/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { register } from '@/actions/auth/register';
import { useTransition, useState} from 'react';
import { FormError } from './form-error';
import { FormSuccess } from './form-success';


export const RegisterForm = () =>{
  const [error, setError] = useState<string | undefined>("");
  const [success, setScuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const onSubmit = (values : z.infer<typeof RegisterSchema>) => {
    setError("");
    setScuccess("");
    startTransition(() => {
      register(values).then((data) => {
        setError(data.error);
        setScuccess(data.success);
      })  
    })

  };
    
      const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
          email: "",
          password: "",
        },
      });
    return(
      <div className='space-y-4'>
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <FormField
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} id="name" placeholder="John Doe"  disabled={isPending} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} id="email" type="text" placeholder="name@example.com"  disabled={isPending}/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} id="password" type="password"  placeholder="********"  disabled={isPending}/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
              <FormSuccess message={success} />
              <FormError message={error} />

            <RegisterButton />

         
          </div>
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

            <p className="text-center text-sm">
              By clicking continue, you agree to our{' '}
              <a href="#" className="underline ">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="underline ">
                Privacy Policy
              </a>.
            </p>
      </div>
    )
}
