import { useTicketFormContext } from "@/context/TicketFormContext";
import React, { useEffect } from "react";
import { roboto } from "@/app/font"; // Import roboto

interface TicketSelectorProps {
  options: TicketOption[];
}

interface TicketOption {
  type: string;
  price: number;
  available: number;
  total: number;
}

const TicketSelector: React.FC<TicketSelectorProps> = ({ options }) => {
  const { selectedTicketType, handleTicketSelect, setSelectedTicketType } =
    useTicketFormContext();

  // Set default selected ticket type based on options
  useEffect(() => {
    if (options.length > 0 && !selectedTicketType) {
      setSelectedTicketType(options[0].type);
    }
  }, [options, selectedTicketType, setSelectedTicketType]);

  return (
    <div className="flex flex-col justify-center items-center gap-4 p-4 w-full rounded-[24px] border border-[#07373F] bg-[#052228]">
      {/* Ticket Options */}
      <div className="flex gap-4 w-full">
        {options.map((option) => (
          <button
            type="button"
            key={option.type}
            onClick={() => handleTicketSelect(option)}
            className={`flex flex-col p-3 rounded-[12px] gap-3 w-1/3 items-start text-left ${
              selectedTicketType === option.type
                ? "border border-[#197686] bg-[#12464E]"
                : "border-2 border-[#197686]"
            }`}
          >
            <p
              className={`text-white ${roboto.className} text-2xl font-semibold leading-[110%]`}
            >
              {option.price === 0 ? "Free" : `$${option.price}`}
            </p>
            <div>
              <p
                className={`text-[#FAFAFA] ${roboto.className} text-nowrap text-base font-normal leading-[150%]`}
              >
                {option.type}
              </p>
              <p
                className={`text-[#D9D9D9] ${roboto.className} text-sm font-normal leading-[150%]`}
              >
                {option.available}/{option.total}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TicketSelector;
