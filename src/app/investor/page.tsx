import InvestorComponent from "@/components/Investor";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investor Relations | Moenviron",
  description:
    "Discover the investment opportunity in Moenviron - a circular economy company building the infrastructure for the future of textiles.",
};

export default function Investor() {
  return (
    <>
      <Navbar />
      <main>
        <InvestorComponent />
      </main>
      <Footer />
    </>
  );
}
