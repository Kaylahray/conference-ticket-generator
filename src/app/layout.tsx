import "./globals.css";
import Image from "next/image";
import NavLinks from "@/components/NavLink";
import { TicketFormProvider } from "@/context/TicketFormContext";
import localFont from "next/font/local";

const jejuMyeongjo = localFont({
  src: "../fonts/JejuMyeongjo-Regular.ttf",
  display: "swap",
  variable: "--font-jeju",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jejuMyeongjo.className} antialiased min-h-screen`}>
        <div className="min-h-screen pt-2.5 lg:pt-6 pl-5 pr-5 pb-16 bg-[radial-gradient(52.52%_32.71%_at_50%_97.66%,rgba(36,160,181,0.20)_0%,rgba(36,160,181,0)_100%)] bg-[#02191D]">
          <div className="fixed top-0 left-0 right-0 z-50 px-5 pt-2.5 lg:pt-6">
            <header className="mb-[18px] lg:mb-[2.9rem] flex items-center justify-between max-w-[1200px] px-4 py-3 mx-auto rounded-[24px] border border-[#197686] bg-[rgba(5,37,44,0.40)] backdrop-blur-[2px]">
              <div className="flex items-center gap-2">
                <div className="px-2 py-1.5 rounded-[12px] border border-[#0E464F] bg-[#052F35]">
                  <Image
                    src="/logoImage.svg"
                    alt="Logo"
                    width={24}
                    height={24}
                  />
                </div>

                <Image
                  src="/ticz.svg"
                  alt="Brand Name"
                  width={43}
                  height={24}
                  className="py-1.5"
                />
              </div>
              <div className="hidden lg:block">
                <NavLinks />
              </div>
              <div className="flex items-center h-[52px] justify-center gap-2 rounded-[12px] border border-[rgba(213,234,0,0.10)] bg-white  pr-2 pl-4 py-3 lg:pr-2.5 lg:pl-6 lg:py-4">
                <span className="text-[#0A0C11] text-[14px] lg:text-base font-normal leading-[20px]">
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
          </div>
          <TicketFormProvider>
            <main className="w-full mt-[6rem] lg:mt-[7rem]">{children}</main>
          </TicketFormProvider>
        </div>
      </body>
    </html>
  );
}
