import ServicesComponent from "@/components/Services";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Moenviron",
  description:
    "Discover Moenviron's circular textile services including sourcing, reuse market integration, advisory, partnership development, and recycling solutions.",
};

export default function Services() {
  return (
    <>
      <Navbar />
      <main>
        <ServicesComponent />
      </main>
      <Footer />
    </>
  );
}
