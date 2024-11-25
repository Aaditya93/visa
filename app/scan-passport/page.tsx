import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Camera, Upload } from "lucide-react";

const PhotoUpload = () => {
  return (
    <div className='flex items-center h-screen'>
      <Card className="w-full max-w-md mx-auto bg-white">
        <CardContent className="p-6 space-y-4">
          <CardTitle>Scan Passport</CardTitle>
          {/* Camera preview area */}
          <div className="aspect-square rounded-full bg-primary-foreground flex items-center justify-center mx-auto w-full max-w-sm">
            <Camera className="w-12 h-12 text-primary opacity-50" />
          </div>
          {/* Buttons */}
          <div className="space-y-3">
            <Button 
              className="w-full py-6"
            >
              Scan Passport
            </Button>
            
            <Button 
              variant="outline"
              className="w-full py-6"
            >
              Upload
            </Button>
            
            <Button
              variant="ghost"
              className="w-full flex items-center justify-center gap-2"
            >
              <Upload className="w-4 h-4" />
              Upload from iPhone
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PhotoUpload;
