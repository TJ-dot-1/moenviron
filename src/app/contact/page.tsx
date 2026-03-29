import ContactComponent from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Moenviron",
  description:
    "Get in touch with Moenviron. Contact us for partnership opportunities, investment inquiries, or collaboration. We operate across Europe, Africa, and emerging textile trade corridors.",
};

export default function Contact() {
  return (
    <>
      <Navbar />
      <main>
        <ContactComponent />
      </main>
      <Footer />
    </>
  );
}