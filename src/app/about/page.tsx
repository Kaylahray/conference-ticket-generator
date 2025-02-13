import Container from "@/components/Container";
import React from "react";

const Page = () => {
  return (
    <Container>
      <div className="text-white font-roboto text-base font-normal leading-6 space-y-4">
        <h1 className="text-xl font-bold">
          Event Ticket Booking UI – Open Source Practice Project 🎟️
        </h1>

        <h2 className="text-lg font-semibold">Overview</h2>
        <p>
          This is a beginner-friendly yet practical Event Ticket Booking UI
          designed for developers to clone, explore, and build upon. The design
          focuses on a seamless, login-free ticket reservation flow, allowing
          users to book event tickets quickly and efficiently.
        </p>
        <p>
          The project consists of a three-step ticket booking flow, and
          developers can extend it further by integrating payment solutions,
          user authentication (optional), and ticket validation systems.
        </p>

        <h2 className="text-lg font-semibold">Flow & Features</h2>

        <h3 className="text-base font-semibold">1️⃣ Ticket Selection</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Users can browse available tickets (Free & Paid).</li>
          <li>Ticket options are displayed in a list or card view.</li>
          <li>
            <strong>For Free Tickets</strong> → Clicking{" "}
            <em>“Get Free Ticket”</em> proceeds to attendee details.
          </li>
          <li>
            <strong>For Paid Tickets</strong> → Clicking{" "}
            <em>“Purchase Ticket”</em> would ideally open a payment modal.
          </li>
        </ul>

        <h3 className="text-base font-semibold">2️⃣ Attendee Details Form</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Users input their Name, Email, and optional Phone Number.</li>
          <li>Profile picture upload option with preview functionality.</li>
          <li>
            Ticket summary is visible to ensure users review their details
            before submission.
          </li>
        </ul>

        <h3 className="text-base font-semibold">3️⃣ Payment or Success Page</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            If the ticket is free, the user is taken directly to the Ticket
            Confirmation Page.
          </li>
          <li>
            If the ticket is paid, developers can integrate Stripe, Paystack, or
            Flutterwave to process payments before showing the confirmation
            page.
          </li>
          <li>Upon successful booking, users should receive:</li>
          <ul className="list-disc pl-8 space-y-1">
            <li>A visual ticket preview with a unique QR Code.</li>
            <li>
              An option to download the ticket as PDF or save it to their
              device.
            </li>
            <li>An email confirmation containing ticket details.</li>
          </ul>
        </ul>

        <h2 className="text-lg font-semibold">How to Build This 🚀</h2>

        <h3 className="text-base font-semibold">
          📌 Frontend (Next.js or React)
        </h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Component Breakdown:</strong>
          </li>
          <ul className="list-disc pl-8 space-y-1">
            <li>
              <code>TicketCard.tsx</code> → Displays ticket details
            </li>
            <li>
              <code>AttendeeForm.tsx</code> → Captures user details
            </li>
            <li>
              <code>PaymentModal.tsx</code> → Handles payment processing
            </li>
            <li>
              <code>SuccessScreen.tsx</code> → Shows the final ticket preview
            </li>
          </ul>
          <li>
            <strong>State Management:</strong> React’s Context API, Zustand, or
            Redux (if needed).
          </li>
          <li>
            <strong>File Handling:</strong> Users should be able to upload
            images (profile picture for ticket) using Firebase Storage,
            Cloudinary, or local preview with <code>URL.createObjectURL()</code>
            .
          </li>
        </ul>

        <h3 className="text-base font-semibold">📌 Backend (Optional)</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>If persistence is required, a backend can be built using:</li>
          <ul className="list-disc pl-8 space-y-1">
            <li>Node.js & Express or Firebase Functions</li>
            <li>
              Database: MongoDB, PostgreSQL, or Firebase Firestore to store
              ticket records
            </li>
          </ul>
        </ul>

        <h3 className="text-base font-semibold">📌 Payment Integration</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>For paid events, developers should integrate:</li>
          <ul className="list-disc pl-8 space-y-1">
            <li>Stripe Checkout (for international transactions)</li>
            <li>Paystack or Flutterwave (for African users)</li>
          </ul>
        </ul>

        <h2 className="text-lg font-semibold">What You’ll Learn 🧑‍💻</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>File handling & validation (profile picture uploads).</li>
          <li>Dynamic UI updates based on ticket selection.</li>
          <li>Persisting bookings using local state or a backend.</li>
          <li>Integrating payment gateways for ticket purchases.</li>
          <li>
            Generating & validating QR Codes for event check-in (Advanced).
          </li>
        </ul>

        <p className="font-semibold">Need Help? Reach Out! 💬</p>
      </div>
    </Container>
  );
};

export default Page;
