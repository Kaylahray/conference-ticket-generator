// components/Ticket.tsx
import React from "react";
import Image from "next/image";
import { roadRage, roboto } from "@/app/font"; // Import roboto

interface TicketProps {
  fullName: string;
  email: string;
  avatarUrl: string;
  request?: string;
  ticketType: string;
  quantity: number;
}

const Ticket: React.FC<TicketProps> = ({
  fullName,
  email,
  avatarUrl,
  quantity,
  request,
  ticketType,
}) => {
  return (
    <div className="relative max-w-[300px] mx-auto">
      <Image
        src="/ticket.svg"
        alt="ticket"
        width={100}
        height={100}
        className="h-full w-full"
      />
      <Image
        src="/bar.svg"
        alt="bar"
        width={236}
        height={68}
        className=" absolute bottom-[20px] left-[40px] right-[40px]"
      />
      <div className="flex flex-col absolute top-[20px] right-[20px] left-[20px] p-[14px] items-center gap-5 shrink-0 rounded-[16px] border border-[#24A0B5] bg-[rgba(3,30,33,0.10)] backdrop-blur-[2px]">
        <div className="flex flex-col text-center ">
          <h1
            className={`${roadRage.className} text-white text-center text-[34px] leading-[100%]`}
          >
            Techember Fest ”25
          </h1>
          <p className={`text-white text-[10px] leading-[150%] ${roboto.className} font-normal`}>
            📍 04 Rumens road, Ikoyi, Lagos
          </p>
          <p className={`text-white text-[10px] leading-[150%] ${roboto.className} font-normal`}>
            {" "}
            📅 March 15, 2025 | 7:00 PM
          </p>
        </div>
        <div className="w-[140px] h-[140px] rounded-[12px] border-[4px] border-[#24A0B580] bg-gray-300 ">
          <Image
            src={avatarUrl}
            alt="Avatar"
            width={100}
            height={100}
            className="h-full w-full"
          />
        </div>
        <div className="rounded-md border border-[#133D44] bg-[#08343C] flex flex-col p-1">
          <div className="grid grid-cols-2 border-b border-[#24A0B5]">
            <div className="p-2">
              <p className={`text-white ${roboto.className} text-[10px] font-normal leading-[150%]`}>
                Enter your name
              </p>
              <p className={`text-white ${roboto.className} text-wrap text-[12px] font-bold leading-[150%]`}>
                {fullName}
              </p>
            </div>
            <div className="border-l border-[#24A0B5] p-2">
              <p className={`text-white ${roboto.className} text-[10px] font-normal leading-[150%]`}>
                Enter your email *
              </p>
              <p className={`text-white ${roboto.className} break-words text-[12px] font-bold leading-[150%]`}>
                {email}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 border-b border-[#24A0B5]">
            <div className="p-2">
              <p className={`text-white ${roboto.className} text-[10px] font-normal leading-[150%]`}>
                Ticket Type:
              </p>
              <p className={`text-white ${roboto.className} text-[12px] font-bold leading-[150%]`}>
                {ticketType}
              </p>
            </div>
            <div className="border-l border-[#24A0B5] p-2">
              <p className={`text-white ${roboto.className} text-[10px] font-normal leading-[150%]`}>
                Ticket for :
              </p>

              <p className={`text-white ${roboto.className} text-[12px] font-bold leading-[150%]`}>
                {quantity}
              </p>
            </div>
          </div>

          <div className="pt-2">
            <p className={`text-white ${roboto.className} text-[10px] font-normal leading-[150%]`}>
              Special request?
            </p>
            <p className={`text-white ${roboto.className} text-[10px] font-normal leading-[150%]`}>
              {request || "Nil"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
