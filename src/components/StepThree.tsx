import { alatsi, roboto } from "@/app/font";
import Ticket from "./Ticket";
import { Button } from "./ui/Button";
import { useTicketFormContext } from "@/context/TicketFormContext";

const StepThree = () => {
  const { ticketData, handleBookAgain, handleDownload } =
    useTicketFormContext();

  return (
    <>
      <div className="text-center mb-16 w-full flex flex-col gap-3 lg:gap-4">
        <p
          className={`text-[#FAFAFA] text-center font-roboto lg:hidden text-[24px]  ${roboto.className} font-bold leading-[140%]`}
        >
          Your Ticket is Booked!
        </p>
        <p
          className={`text-[#FAFAFA] text-center font-roboto text-[32px] hidden lg:block  ${alatsi.className} font-bold leading-[140%]`}
        >
          Your Ticket is Booked!
        </p>
        <p
          className={`text-[#FAFAFA] text-center p-6 lg:hidden font-roboto text-[16px] ${roboto.className} font-bold leading-[140%]`}
        >
          You can download or Check your email for a copy
        </p>
        <p
          className={`text-[#FAFAFA] text-center lg:block hidden font-roboto text-[16px]  ${roboto.className} font-bold leading-[140%]`}
        >
          Check your email for a copy or you can download
        </p>
      </div>

      {ticketData && <Ticket {...ticketData} />}

      <div className="md:flex-row flex flex-col gap-4 w-full mt-6">
        <Button
          type="button"
          onClick={handleBookAgain}
          fullWidth
          variant="secondary"
        >
          Book Another Ticket
        </Button>
        <Button type="button" onClick={handleDownload} fullWidth>
          Download Ticket
        </Button>
      </div>
    </>
  );
};

export default StepThree;
