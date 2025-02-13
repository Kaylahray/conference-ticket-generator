// components/Ticket.tsx
import React from "react";
import Image from "next/image";

interface TicketProps {
  fullName: string;
  email: string;
  avatarUrl: string;
}

const Ticket: React.FC<TicketProps> = ({ fullName, email, avatarUrl }) => {
  return (
    <div className="max-w-md mx-auto mt-6 p-6 bg-white shadow-md rounded text-center">
      <h2 className="text-2xl font-bold mb-4">Conference Ticket</h2>
      <p>
        <strong>Name:</strong> {fullName}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <div className="mt-4 flex justify-center">
        <Image
          src={avatarUrl}
          alt="Avatar"
          width={100}
          height={100}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Ticket;
