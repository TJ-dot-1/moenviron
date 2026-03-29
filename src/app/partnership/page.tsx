import PartnershipComponent from "@/components/Partnership";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partnership | Moenviron",
  description:
    "Partner with Moenviron to build circular textile systems. We work with collection organizations, exporters, fashion brands, recycling partners, and ecosystem networks.",
};

export default function Partnership() {
  return (
    <>
      <Navbar />
      <main>
        <PartnershipComponent />
      </main>
      <Footer />
    </>
  );
}