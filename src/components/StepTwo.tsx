import React from "react";
import { Button } from "./ui/Button";
import { useTicketFormContext } from "@/context/TicketFormContext";
import ImageUpload from "./ImageUpload";
import Image from "next/image";

const StepTwo = () => {
  const {
    handleSubmit,
    submitForm,
    setValue,
    setImagePreview,
    imagePreview,
    errors,
    isSubmitting,
    back,
    register,
  } = useTicketFormContext();

  return (
    <div className="lg:p-6 p-0 border-transparent rounded-3xl border lg:border-[#0E464F] lg:bg-[#08252B]">
      <form
        onSubmit={handleSubmit(submitForm)}
        className="w-full flex flex-col gap-8"
        noValidate
        aria-label="Ticket booking details"
      >
        <div role="group" aria-labelledby="image-upload-label">
          <span id="image-upload-label" className="sr-only">
            Profile Image Upload
          </span>
          <ImageUpload
            value={imagePreview}
            onChange={(url) => setValue("avatarUrl", url)}
            onSetPreview={setImagePreview}
            error={errors.avatarUrl?.message as string}
          />
        </div>

        <div className="bg-[#07373F] w-full h-1" role="separator" />

        <div>
          <label htmlFor="fullName" className="block mb-2">
            Enter your name
          </label>
          <input
            id="fullName"
            {...register("fullName")}
            aria-invalid={errors.fullName ? "true" : "false"}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            className="w-full border p-2 rounded-md"
          />
          {errors.fullName && (
            <p
              id="fullName-error"
              className="text-red-500 text-sm"
              role="alert"
            >
              {errors.fullName.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block mb-2">
            Enter your email *
          </label>
          <div className="relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <Image
                src="/email.svg"
                width={24}
                height={24}
                alt=""
                aria-hidden="true"
              />
            </div>
            <input
              id="email"
              type="email"
              {...register("email")}
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "email-error" : undefined}
              aria-required="true"
              className="w-full border pl-10 rounded-md"
              placeholder="hello@chioma.io"
            />
          </div>
          {errors.email && (
            <p id="email-error" className="text-red-500 text-sm" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="request" className="lg:hidden block mb-2">
            About Project
          </label>
          <label htmlFor="request" className="hidden lg:block mb-2">
            Special request?
          </label>
          <textarea
            id="request"
            {...register("request")}
            className="w-full border p-2 rounded-md resize-none overflow-hidden text-[#aaa]"
            placeholder="Textarea"
            rows={3}
            aria-describedby="request-hint"
          />
          <span id="request-hint" className="sr-only">
            Optional: Enter any special requests or requirements for your ticket
          </span>
        </div>

        <div className="md:flex-row flex flex-col gap-4">
          <Button
            type="submit"
            isLoading={isSubmitting}
            fullWidth
            disabled={isSubmitting}
            aria-busy={isSubmitting}
          >
            {isSubmitting ? "Processing..." : "Get My Free Ticket"}
          </Button>
          <Button type="button" variant="secondary" onClick={back} fullWidth>
            Back
          </Button>
        </div>
      </form>
    </div>
  );
};
export default StepTwo;
