import Ticket from "./Ticket";
import { Button } from "./ui/Button";
import { useTicketFormContext } from "@/context/TicketFormContext";

const StepThree = () => {
  const { ticketData, handleBookAgain, handleDownload } =
    useTicketFormContext();

  return (
    <>
      {ticketData && <Ticket {...ticketData} />}

      <div className="flex gap-4 w-full mt-6">
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
