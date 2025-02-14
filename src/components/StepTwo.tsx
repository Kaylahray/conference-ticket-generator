import React from "react";
import { Button } from "./ui/Button";
import { useTicketFormContext } from "@/context/TicketFormContext";
import ImageUpload from "./ImageUpload";

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
      >
        <div>
          <ImageUpload
            value={imagePreview}
            onChange={(url) => setValue("avatarUrl", url)}
            onSetPreview={setImagePreview}
            error={errors.avatarUrl?.message as string}
          />
        </div>

        <div className="bg-[#07373F] w-full h-1"></div>

        <div>
          <label>Enter your name</label>
          <input {...register("fullName")} />
          {errors.fullName && (
            <p className="text-red-500 text-sm">{errors.fullName.message}</p>
          )}
        </div>

        <div>
          <label>Enter you email *</label>
          <input type="email" {...register("email")} />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="lg:hidden"> About Project</label>
          <label className="hidden lg:block">Special request?</label>

          <textarea
            {...register("request")}
            className="w-full border p-2 rounded-md resize-none overflow-hidden text-[#aaa]"
            placeholder="Textarea"
            rows={3}
          ></textarea>
        </div>

        <div className="md:flex-row flex flex-col gap-4">
          <Button type="submit" isLoading={isSubmitting} fullWidth>
            Get My Free Ticket
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
