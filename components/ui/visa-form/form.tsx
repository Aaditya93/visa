"use client";

import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const formSchema = z.object({
  code: z.string().min(1, "Code is required"),
  full_name: z.string().min(2, "Name must be at least 2 characters"),
  birthday: z.string().min(1, "Birthday is required"),
  sex: z.enum(["Nam", "Nữ"], "Please select a gender"),
  current_nationality: z.string().min(2, "Current nationality required"),
  original_nationality: z.string().min(2, "Original nationality required"),
  job: z.string().min(2, "Job is required"),
  workplace: z.string().min(2, "Workplace is required"),
  passport_number: z.string().min(6, "Invalid passport number"),
  passport_type: z.string().min(1, "Passport type is required"),
  purpose: z.string().min(2, "Purpose required"),
  from_date: z.string().min(1, "From date is required"),
  to_date: z.string().min(1, "To date is required"),
  place_to_get_visa: z.string().min(2, "Place to get visa is required"),
  creator: z.string().min(2, "Creator is required"),
  speed: z.enum(["normal", "urgent", "express"], "Please select speed"),
  status: z.enum(["pending", "approved", "rejected"], "Please select status"),
  note: z.string().optional()
});

const VisaApplicationForm = () => {
  const [currentDateTime] = React.useState({
    date: new Date().toISOString().split('T')[0],
    time: new Date().toTimeString().split(' ')[0]
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      code: "1",
      full_name: "",
      birthday: "",
      sex: undefined,
      current_nationality: "",
      original_nationality: "",
      job: "",
      workplace: "",
      passport_number: "",
      passport_type: "",
      purpose: "",
      from_date: "",
      to_date: "",
      place_to_get_visa: "",
      creator: "",
      speed: undefined,
      status: undefined,
      note: ""
    }
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const formData = {
      ...values,
      created_date: currentDateTime.date,
      created_time: currentDateTime.time,
      duration: calculateDuration(values.from_date, values.to_date)
    };
    
    const blob = new Blob([JSON.stringify(formData, null, 2)], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'visa_application.json';
    link.click();
  };

  const calculateDuration = (fromDate: string, toDate: string) => {
    if (!fromDate || !toDate) return '';
    const start = new Date(fromDate);
    const end = new Date(toDate);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return `${diffDays} days`;
  };

  return (
    <div className="w-full mt-4">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>Visa Application Form</CardTitle>
          <span>Group 4</span>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
     
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-lg">Passport Details</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-3 gap-4">
                <FormField
                    control={form.control}
                    name="full_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="birthday"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Birthday</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="sex"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Sex</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select Sex" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Nam">Nam</SelectItem>
                            <SelectItem value="Nữ">Nữ</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="current_nationality"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Current Nationality</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter current nationality" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="original_nationality"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Original Nationality</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter original nationality" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="passport_number"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Passport Number</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter passport number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="passport_type"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Type of Passport</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter passport type" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                 
                </CardContent>
              </Card>

            
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Manual Information</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-3 gap-4">
                <FormField
                    control={form.control}
                    name="from_date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>From Date</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="to_date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>To Date</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                     <FormField
                    control={form.control}
                    name="Handled_by"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Handled By</FormLabel>
                        <FormControl>
                          <Input placeholder="Handled By" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />


                  
                 
                   <FormField
                    control={form.control}
                    name="Airport"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Airport</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select Airport" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Hanoi Airport">Hanoi Airport</SelectItem>
                            <SelectItem value="Ho Chi Minh Airport">Ho Chi Minh Airport</SelectItem>
                            <SelectItem value="Da Nang Airport">Da Nang Airport</SelectItem>
                            <SelectItem value="Phuquoc Airport">Phuquoc Airport</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="Embassy"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Embassy</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select Embassy" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Vietnam embassy in Mumbai">Vietnam embassy in Mumbai</SelectItem>
                            <SelectItem value="Vietnam embassy in Delhi">Vietnam embassy in Delhi</SelectItem>
                            <SelectItem value="Vietnam embassy in Shanghai ">Vietnam embassy in Shanghai</SelectItem>
                            <SelectItem value="Vietnam embassy in Beijing ">Vietnam embassy in Beijing</SelectItem>
                            <SelectItem value="Vietnam embassy in Guangzhou">Vietnam embassy in Guangzhou</SelectItem>
                            <SelectItem value="Vietnam embassy in Taiwan ">Vietnam embassy in Taiwan</SelectItem>
                           
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="speed"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Speed</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select Speed" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="4H">4H</SelectItem>
                            <SelectItem value="8H">8H</SelectItem>
                            <SelectItem value="1D">1D</SelectItem>
                            <SelectItem value="2D">2D</SelectItem>
                            <SelectItem value="3D">3D</SelectItem>
                            <SelectItem value="NO">NO</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                   <FormField
                    control={form.control}
                    name="Duration"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Duration</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select Duration" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Single Entry">Single Entry</SelectItem>
                            <SelectItem value="Mutiple Entry">Mutiple Entry</SelectItem>
                            
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="status"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Status</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select Status" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="pending">Success</SelectItem>
                            <SelectItem value="approved">Cancel</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="note"
                    render={({ field }) => (
                      <FormItem className="col-span-3">
                        <FormLabel>Note</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter any additional notes" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                 
                </CardContent>
              </Card>
              <div className="flex justify-end space-x-4">
                <Button type="submit" variant="outline">
                  Save Application
                </Button>
                <Button type="submit">
                  Download Excel
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default VisaApplicationForm;
