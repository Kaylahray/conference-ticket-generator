"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { useForm, UseFormSetValue, UseFormClearErrors } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "@/lib/schema";

import {
  UseFormRegister,
  UseFormHandleSubmit,
  FieldErrors,
} from "react-hook-form";

export interface FormData {
  fullName: string;
  email: string;
  avatarUrl: string;
  request?: string;
  selectNum: number;
  ticketType: string;
  quantity: number;
}

export interface TicketOption {
  type: string;
  price: number;
  available: number;
  total: number;
}

interface TicketFormContextType {
  register: UseFormRegister<FormData>;
  handleSubmit: UseFormHandleSubmit<FormData>;
  errors: FieldErrors<FormData>;
  isSubmitting: boolean;
  isValid: boolean;
  setValue: UseFormSetValue<FormData>;
  clearErrors: UseFormClearErrors<FormData>;
  reset: () => void;
  imagePreview: string;
  setImagePreview: (url: string) => void;
  previousStep: number;
  currentStep: number;
  totalSteps: number;
  delta: number;
  ticketData: FormData | null;
  selectedTicketType: string | null;
  ticketOptions: TicketOption[];
  quantity: number;
  setQuantity: (quantity: number) => void;
  submitForm: (data: FormData) => Promise<FormData>;
  prev: () => void;
  next: () => void;
  back: () => void;
  setSelectedTicketType: (type: string) => void;
  handleCancel: () => void;
  handleDownload: () => void;
  handleBookAgain: () => void;
  handleImageUpload: (url: string) => void;
  handleTicketSelect: (option: TicketOption, selectedQuantity?: number) => void;
  handleQuantityChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

// Create Context
const TicketFormContext = createContext<TicketFormContextType | undefined>(
  undefined
);

export function TicketFormProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    setValue,
    clearErrors, // Added clearErrors
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const [imagePreview, setImagePreview] = useState("");
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(1);
  const [ticketData, setTicketData] = useState<FormData | null>(null);
  const [selectedTicketType, setSelectedTicketType] = useState<string | null>(
    null
  );
  const [quantity, setQuantity] = useState<number>(1);

  // Initialize ticket options directly in the context
  const ticketOptions: TicketOption[] = [
    { type: "REGULAR", price: 0, available: 20, total: 52 },
    { type: "VIP", price: 150, available: 20, total: 52 },
    { type: "VVIP", price: 150, available: 20, total: 52 },
  ];
  const handleQuantityChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newQuantity = parseInt(event.target.value);
    setQuantity(newQuantity);
    setValue("quantity", newQuantity);
  };

  const totalSteps = 3;
  const delta = currentStep - previousStep;

  const next = () => {
    setPreviousStep(currentStep);
    setCurrentStep((step) => step + 1);
  };

  const prev = () => {
    if (currentStep > 1) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step - 1);
    }
  };

  const back = () => {
    setPreviousStep(currentStep);
    setCurrentStep((step) => step - 1);
  };

  // Load saved data on mount
  useEffect(() => {
    const savedTicketType = localStorage.getItem("selectedTicketType");
    const savedTicketData = localStorage.getItem("ticketData");

    if (savedTicketType) {
      setSelectedTicketType(savedTicketType);
    }

    if (savedTicketData) {
      const data = JSON.parse(savedTicketData) as FormData;
      setTicketData(data);
      setQuantity(data.quantity || 1);

      Object.entries(data).forEach(([key, value]) => {
        setValue(key as keyof FormData, value);
      });
      if (data.avatarUrl) {
        setImagePreview(data.avatarUrl);
      }
    }
  }, [setValue]);

  const submitForm = async (data: FormData) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Delay for 2 seconds

      const finalData = {
        ...data,
        ticketType: selectedTicketType ?? "",
        quantity: quantity,
      };

      localStorage.setItem("ticketData", JSON.stringify(finalData));
      setTicketData(finalData);
      setPreviousStep(currentStep);
      setCurrentStep((prev) => prev + 1);

      return finalData;
    } catch (error) {
      console.error("Error submitting form:", error);
      throw error;
    }
  };

  const clearFormData = () => {
    localStorage.removeItem("ticketData");
    localStorage.removeItem("selectedTicketType");
    setSelectedTicketType(null);
    setTicketData(null);
    setImagePreview("");
    setQuantity(1);
    reset();
  };

  const handleImageUpload = (url: string) => {
    setValue("avatarUrl", url);
    setImagePreview(url);

    // Clear the error when a valid image is uploaded
    if (url) {
      clearErrors("avatarUrl");
    }

    const storedData = localStorage.getItem("ticketData");
    const existingData = storedData ? JSON.parse(storedData) : {};

    const updatedData = { ...existingData, avatarUrl: url };
    localStorage.setItem("ticketData", JSON.stringify(updatedData));
  };

  const handleTicketSelect = (
    option: TicketOption,
    selectedQuantity?: number
  ) => {
    setSelectedTicketType(option.type);
    if (selectedQuantity) {
      setQuantity(selectedQuantity);
    }
    localStorage.setItem("selectedTicketType", option.type);
  };

  return (
    <TicketFormContext.Provider
      value={{
        register,
        handleSubmit,
        errors,
        isSubmitting,
        isValid,
        setValue,
        clearErrors, // Added clearErrors
        reset,
        imagePreview,
        setImagePreview,
        previousStep,
        currentStep,
        totalSteps,
        delta,
        ticketData,
        selectedTicketType,
        ticketOptions,
        quantity,
        setQuantity,
        submitForm,
        prev,
        next,
        back,
        handleQuantityChange,
        setSelectedTicketType,
        handleCancel: clearFormData,
        handleDownload: () => console.log("Download ticket"),
        handleBookAgain: () => {
          clearFormData();
          setCurrentStep(1);
          setPreviousStep(0);
        },
        handleImageUpload,
        handleTicketSelect,
      }}
    >
      {children}
    </TicketFormContext.Provider>
  );
}

// Hook for using the context
export function useTicketFormContext() {
  const context = useContext(TicketFormContext);
  if (!context) {
    throw new Error(
      "useTicketFormContext must be used within a TicketFormProvider"
    );
  }
  return context;
}
