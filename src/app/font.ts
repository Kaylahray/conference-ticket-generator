// app/fonts.ts
import { Roboto, Road_Rage } from "next/font/google";
import { Alatsi } from "next/font/google";

export const alatsi = Alatsi({ subsets: ["latin"], weight: "400" });

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

export const roadRage = Road_Rage({
  subsets: ["latin"],
  weight: "400",
});
