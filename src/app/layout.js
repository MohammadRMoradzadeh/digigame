import { Inter } from "next/font/google";
import Navbar from "@/components/modules/navbar/Navbar";
import MobileNavbar from "@/components/modules/MobileNavbar/MobileNavbar";
import "./globals.css";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DigiGame",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {

  return (
    <html lang="fa" dir="rtl">
      <body className={inter.className}>
        <Navbar/>
        <MobileNavbar/>
        {children}
        </body>
    </html>
  );
}
