"use client";
import { motion } from "framer-motion";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import { useTicketFormContext } from "@/context/TicketFormContext";
import Container from "./Container";

const steps = [
  {
    id: "Step 1",
    name: "Ticket Selection",
  },
  {
    id: "Step 2",
    name: "Attendee Details",
  },
  {
    id: "Step 3",
    name: "Ready",
  },
];

const Form = () => {
  const { currentStep, totalSteps } = useTicketFormContext();
  return (
    <Container>
      {/* name and progressBar */}
      <div className="flex flex-col items justify-between ">
        <div className="flex justify-between flex-col md:flex-row mb-4">
          <span className="text-white text-[24px] lg:text-[32px] font-normal leading-normal">
            {steps[currentStep - 1]?.name}
          </span>

          <span className="text-base text-[#FAFAFA] font-roboto font-normal leading-[150%]">
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
      <div className="w-full">
        {currentStep === 1 && <StepOne />}

        {currentStep === 2 && <StepTwo />}

        {currentStep === 3 && <StepThree />}
      </div>
    </Container>
  );
};

export default Form;
