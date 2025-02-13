"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { schema } from "../../lib/schema";
import { motion } from "framer-motion";
import Ticket from "./Ticket";

type FormData = z.infer<typeof schema>;

interface FormProps {
  onSubmit: (data: FormData) => void;
}

export interface TicketData {
  fullName: string;
  email: string;
  avatarUrl: string;
}
const steps = [
  {
    id: "Step 1",
    name: "Open Ticket",
  },
  {
    id: "Step 2",
    name: "Buy Ticket",
  },
  {
    id: "Step 3",
    name: "Complete",
  },
];

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    setValue,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const [imagePreview, setImagePreview] = useState("");

  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;
  const [ticketData, setTicketData] = useState<TicketData | null>(null);
  // if (!ticketData) {
  //   return <p>loading</p>; // or a loading spinner
  // }
  const delta = currentStep - previousStep;

  useEffect(() => {
    const savedTicketData = localStorage.getItem("ticketData");
    if (!savedTicketData) {
      return;
    }
    setTicketData(JSON.parse(savedTicketData));
  }, []);

  useEffect(() => {
    const savedTicketData = localStorage.getItem("ticketData");
    if (savedTicketData) {
      const data = JSON.parse(savedTicketData);
      setValue("fullName", data.fullName);
      setValue("email", data.email);
      setValue("avatarUrl", data.avatarUrl);
      setImagePreview(data.avatarUrl);
    }
  }, [setValue]);

  const submitForm = async (data: FormData) => {
    try {
      await onSubmit(data);
      // Save form data to localStorage
      localStorage.setItem("ticketData", JSON.stringify(data));
      // Move to the final step after successful submission
      setPreviousStep(currentStep);
      setCurrentStep(2);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step - 1);
    }
  };
  const next = async () => {
    setPreviousStep(currentStep);
    setCurrentStep((step) => step + 1);
  };

  const back = () => {
    setPreviousStep(currentStep);
    setCurrentStep((step) => step - 1);
  };

  const handleCancel = () => {
    // Clear form data and redirect or handle cancellation
    localStorage.removeItem("ticketData");
    // Add your navigation logic here
    console.log("Form cancelled");
  };

  const handleDownload = () => {
    const ticketData = localStorage.getItem("ticketData");
    if (ticketData) {
      const data = JSON.parse(ticketData);
      const link = document.createElement("a");
      link.href = data.avatarUrl; // Change this if your ticket has a different format
      link.download = "ticket.png"; // Change extension if necessary
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleBookAgain = () => {
    // Clear local storage
    localStorage.removeItem("ticketData");
    // Reset the form fields
    reset({
      fullName: "",
      email: "",
      avatarUrl: "",
    });
    // Clear image preview if needed
    setImagePreview("");
    // Go back to the first step
    setPreviousStep(currentStep);
    setCurrentStep(0);
  };
  return (
    <motion.section
      className="flex flex-col   w-full mx-auto max-w-[700px] p-12 gap-8 rounded-[40px] border border-[#0E464F] bg-[#041E23]"
      initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {/* upppppppppppp */}
      <div className="flex flex-col items justify-between ">
        <div className="flex justify-between flex-col md:flex-row mb-4">
          <span className="font-medium text-white">
            {steps[currentStep - 1]?.name}
          </span>

          <span className="text-white">
            {currentStep} / {totalSteps}
          </span>
        </div>
        <div className="relative h-[4px] w-full overflow-hidden  bg-[#0E464F] rounded-md">
          <motion.div
            style={{ width: `${(currentStep / steps.length) * 100}%` }}
            className="relative h-full bg-[#24A0B5]"
            initial={{ width: "33.33%" }}
            animate={{ width: `${(currentStep / steps.length) * 100}%` }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          ></motion.div>
        </div>
      </div>

      {/* steps */}

      <div className="bg-green-200">
        {currentStep === 1 && (
          <div>
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Personal Information
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Provide your personal details.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              hiiii
            </div>
            <>
              <button
                type="button"
                onClick={handleCancel}
                className="rounded bg-gray-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-600 transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={next}
                className="rounded bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-700 transition-colors"
              >
                Next
              </button>
            </>
          </div>
        )}

        {currentStep === 2 && (
          <div className="   p-6  rounded-3xl border border-[#0E464F] bg-[#08252B]">
            <form
              onSubmit={handleSubmit(submitForm)}
              className="w-full  bg-yellow-900 flex flex-col gap-8"
            >
              <div className="bg-[#07373F] w-full h-1"></div>
              <div>
                <label className="text-[#FAFAFA] font-roboto text-base font-normal leading-6 mb-2">
                  Enter your mail
                </label>
                <input
                  {...register("fullName")}
                  className="w-full px-3 py-2 border rounded-md"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Enter you email *
                </label>
                <input
                  type="email"
                  {...register("email")}
                  className="w-full px-3 py-2 border rounded-md"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Avatar Image
                </label>
                <CldUploadWidget
                  uploadPreset={
                    process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
                  }
                  onSuccess={(result) => {
                    if (
                      result?.info &&
                      typeof result.info === "object" &&
                      "url" in result.info
                    ) {
                      const url = result.info.url as string;
                      setValue("avatarUrl", url);
                      setImagePreview(url);
                    }
                  }}
                >
                  {({ open }) => (
                    <button
                      type="button"
                      onClick={() => open()}
                      className="w-full bg-gray-200 py-2 rounded-md"
                    >
                      Upload Avatar
                    </button>
                  )}
                </CldUploadWidget>
                {imagePreview && (
                  <Image
                    src={imagePreview}
                    alt="Avatar"
                    width={100}
                    height={100}
                    className="rounded-full mt-2"
                  />
                )}
                {errors.avatarUrl && (
                  <p className="text-red-500 text-sm">
                    {errors.avatarUrl.message}
                  </p>
                )}
              </div>

              <button
                disabled={isSubmitting}
                type="submit"
                className="w-full bg-blue-500 py-2 text-white rounded-md"
              >
                {isSubmitting ? "Generating..." : "Generate Ticket"}
              </button>
            </form>

            <>
              <button
                type="button"
                onClick={back}
                className="rounded bg-gray-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-600 transition-colors"
              >
                Back
              </button>
            </>
          </div>
        )}

        {currentStep === 3 && (
          <>
            {ticketData && <Ticket {...ticketData} />}

            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Complete
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Thank you for your submission.
            </p>

            <>
              <button
                type="button"
                onClick={handleDownload}
                className="rounded bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700 transition-colors"
              >
                Download Ticket
              </button>
              <button
                type="button"
                onClick={handleBookAgain}
                className="rounded bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-700 transition-colors"
              >
                Book Another Ticket
              </button>
            </>
          </>
        )}
      </div>
    </motion.section>
  );
};

export default Form;
