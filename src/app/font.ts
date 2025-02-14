// app/fonts.ts
import { Roboto, Road_Rage } from "next/font/google";
import localFont from "next/font/local";

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});



export const roadRage = Road_Rage({
  subsets: ["latin"],
  weight: "400",
});