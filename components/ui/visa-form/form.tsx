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

const formSchema = z.object({
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
      code: "",
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
    <div className='w-full mt-4'>
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Visa Application Form</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Code</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter code" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

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
                name="job"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Job</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter job" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="workplace"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Workplace</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter workplace" {...field} />
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

              <FormField
                control={form.control}
                name="purpose"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Purpose</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter purpose" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

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

              <FormItem>
                <FormLabel>Duration</FormLabel>
                <FormControl>
                  <Input 
                    value={calculateDuration(form.watch('from_date'), form.watch('to_date'))} 
                    readOnly 
                  />
                </FormControl>
              </FormItem>

              <FormField
                control={form.control}
                name="place_to_get_visa"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Place to Get Visa</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter visa location" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="creator"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Creator</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter creator name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormItem>
                <FormLabel>Created Date</FormLabel>
                <FormControl>
                  <Input value={currentDateTime.date} readOnly />
                </FormControl>
              </FormItem>

              <FormItem>
                <FormLabel>Created Time</FormLabel>
                <FormControl>
                  <Input value={currentDateTime.time} readOnly />
                </FormControl>
              </FormItem>

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
                        <SelectItem value="normal">Normal</SelectItem>
                        <SelectItem value="urgent">Urgent</SelectItem>
                        <SelectItem value="express">Express</SelectItem>
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
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="approved">Approved</SelectItem>
                        <SelectItem value="rejected">Rejected</SelectItem>
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
            </div>

            <div className="flex justify-end space-x-4 mt-6">
              <Button type="submit" variant="outline">
                Save Application
              </Button>
              <Button type="submit">
                Download JSON
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
