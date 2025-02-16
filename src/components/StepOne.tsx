// StepOne.tsx
import React from "react";
import { Button } from "./ui/Button";
import TicketSelector from "./TicketSelect";
import { useTicketFormContext } from "@/context/TicketFormContext";
import { roadRage, roboto } from "@/app/font";

const StepOne = () => {
  const { handleCancel, next, ticketOptions, handleQuantityChange, quantity } =
    useTicketFormContext();

  return (
    <div className="flex flex-col justify-center items-start gap-8 lg:p-6 p-0 border-transparent rounded-[32px] border lg:border-[#0E464F] lg:bg-[#08252B]">
      <section
        aria-labelledby="event-title"
        className="flex flex-col gap-4 lg:gap-2 lg:p-6 pt-4 px-6 pb-6 w-full text-center h-fit rounded-[24px] border-l-2 border-r-2 border-b-2 border-[#07373F] bg-gradient-to-b from-[#24A0B5]/20 to-[#24A0B5]/0 backdrop-blur-[7px]"
      >
        <h1
          id="event-title"
          className={`${roadRage.className} text-white lg:text-[62px] text-[48px] leading-[100%]`}
        >
          Techember Fest &quot;25
        </h1>

        <p
          className={`text-[#FAFAFA] text-center ${roboto.className} text-[16px] max-w-[340px] p-2 mx-auto font-normal leading-[150%]`}
        >
          Join us for an unforgettable experience at [Event Name]! Secure your
          spot now.
        </p>

        <div
          className={`md:flex-row flex flex-col md:gap-4 justify-center items-center text-white text-[16px] leading-[150%] ${roboto.className} font-normal`}
        >
          <span role="text" aria-label="Event Location">
            📍 Event Location
          </span>
          <span className="mx-4 hidden md:inline-block" aria-hidden="true">
            | |
          </span>
          <span role="text">March 15, 2025 | 7:00 PM</span>
        </div>
      </section>

      <div className="bg-[#07373F] w-full h-1" role="separator" />

      <form
        className="flex flex-col gap-6 w-full"
        aria-label="Ticket selection form"
      >
        <TicketSelector options={ticketOptions} />

        <div className="flex flex-col">
          <label
            htmlFor="quantity"
            className={`text-white ${roboto.className} text-sm mb-2`}
          >
            Number of Tickets
          </label>
          <select
            id="quantity"
            value={quantity}
            onChange={handleQuantityChange}
            aria-label="Select number of tickets"
          >
            {[...Array(5).keys()].map((num) => (
              <option key={num + 1} value={num + 1}>
                {num + 1}
              </option>
            ))}
          </select>
        </div>

        <div className="md:flex-row flex flex-col gap-4">
          <Button
            type="button"
            variant="secondary"
            onClick={handleCancel}
            fullWidth
          >
            Cancel
          </Button>
          <Button type="button" onClick={next} fullWidth>
            Next
          </Button>
        </div>
      </form>
    </div>
  );
};

export default StepOne;
