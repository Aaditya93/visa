import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import { Label } from '@/components/ui/label';
import { FaFile } from 'react-icons/fa';
import Link from 'next/link';
const VietnamPassportUpload = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FaFile className="" size={24} />
            <span>Upload Visa Form File</span>
            </CardTitle>
        </CardHeader>
        <CardContent>
          <p >
            Please upload your visa file in CSV format.
          </p>
          <div className="mt-6">
          <Label htmlFor="File">File</Label>
            <Input id="visa-file" type="file" className="w-full " />
          </div>
          <div className="mt-4">
            <Button asChild className="w-full" >
              <Link href="/admin/dashboard"> Upload</Link>
              
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VietnamPassportUpload;
