import AboutComponent from "@/components/About";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Moenviron",
  description:
    "Learn about Moenviron, a circular economy company transforming textile waste into structured, scalable value through reuse, recycling, and global trade.",
};

export default function About() {
  return (
    <>
      <Navbar />
      <main>
        <AboutComponent />
      </main>
      <Footer />
    </>
  );
}
