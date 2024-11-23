import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import { Label } from '@/components/ui/label';
import { FaPassport } from 'react-icons/fa';
import Link from 'next/link';

const VietnamPassportUpload = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FaPassport className="" size={24} />
            <span>Upload Passport</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p >
            The Vietnam government requires the front page of your Passport.
          </p>
          <div className="mt-6">
            <Label htmlFor="passport-upload" className="block mb-2 text-sm font-medium">
               Passport
            </Label>
            <Input id="passport-upload" type="file" className="w-full" />
          </div>
          <div className="mt-4">
            <Button asChild className="w-full">
              <Link href="/visa"> Upload </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VietnamPassportUpload;
