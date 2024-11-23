import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { RegisterForm } from '@/components/auth/register-form';

import RedirectLogin from '@/components/auth/redirect-login';

const SignUpPage = () => {
  return (
    <div>
      <RedirectLogin/>
    <div className="flex min-h-screen items-center justify-center  py-12 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
          <CardDescription>
            Enter your details below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent>

          <RegisterForm/>

        </CardContent>
      </Card>
    </div>
    </div>
  );
};

export default SignUpPage;

