// app/visa/page.tsx
"use client";

import VisaApplicationForm from "@/components/ui/visa-form/form";

const VisaForm = () => {
  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <div className="container mx-auto py-8">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold mb-8 text-gray-900">Visa Application System</h1>
          <VisaApplicationForm />
        </div>
      </div>
    </div>
  );
};

export default VisaForm;
