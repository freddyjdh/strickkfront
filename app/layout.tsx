import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import "./main.ts";
import Nav from "./components/nav";
import Hydrate from "./components/util/hydrate";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Strickk",
  description: "",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="w-100vw overflow-x-hidden" lang="en">
      <body className={`w-100vw overflow-x-hidden ${inter.className}`}>
      <Hydrate>


         <Nav/>  
         <div className="">      
        {children}
        </div>
        <Footer/>
        </Hydrate>
        </body>
       
    </html>
  );
}
