"use client";
import Form from "@/components/Form";

export default function Home() {
  const handleSubmit = async (data: any) => {
    // Handle form submission here
    console.log("Form submitted:", data);
    // Add your API call or other logic here
  };

  return (
    <div className="container mx-auto px-4">
      <Form onSubmit={handleSubmit} />
    </div>
  );
}
