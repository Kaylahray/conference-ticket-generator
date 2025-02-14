import "./globals.css";
import Image from "next/image";
import NavLinks from "@/components/Navbar";
import { TicketFormProvider } from "@/context/TicketFormContext";
import localFont from "next/font/local";
import { Roboto } from "next/font/google";
import { Road_Rage } from "next/font/google";

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

const jejuMyeongjo = localFont({
  src: "../fonts/JejuMyeongjo-Regular.ttf",
  display: "swap",
  variable: "--font-jeju",
});

export const roadRage = Road_Rage({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jejuMyeongjo.className} antialiased min-h-screen`}>
        <div className="min-h-screen p-5 bg-[radial-gradient(52.52%_32.71%_at_50%_97.66%,rgba(36,160,181,0.20)_0%,rgba(36,160,181,0)_100%)] bg-[#02191D]">
          <header className="mt-3 mb-[2.9rem] flex items-center justify-between max-w-[1200px] px-4 py-3 mx-auto rounded-[24px] border border-[#197686] bg-[rgba(5,37,44,0.40)] backdrop-blur-[2px]">
            <div className="flex items-center gap-2">
              <div className="px-2 py-1.5 rounded-[12px] border border-[#0E464F] bg-[#052F35]">
                <Image src="/logoImage.svg" alt="Logo" width={24} height={24} />
              </div>

              <Image
                src="/ticz.svg"
                alt="Brand Name"
                width={43}
                height={24}
                className="py-1.5"
              />
            </div>
            <NavLinks />
            <div className="flex items-center justify-center gap-2 rounded-[12px] border border-[rgba(213,234,0,0.10)] bg-white px-6 py-4">
              <span className="text-[#0A0C11] text-[16px] font-normal leading-[20px] uppercase font-jeju">
                My Tickets
              </span>
              <Image
                src="/right.svg"
                alt="Arrow"
                width={16}
                height={8}
                className="py-1.5"
              />
            </div>
          </header>
          <TicketFormProvider>{children}</TicketFormProvider>
        </div>
      </body>
    </html>
  );
}
