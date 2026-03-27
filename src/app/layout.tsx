import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Moenviron | Redefining Textile Waste",
  description:
    "Moenviron builds scalable solutions to transform post-consumer textiles into reusable, recyclable, and traceable resources.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white antialiased">
        {children}
      </body>
    </html>
  );
}
