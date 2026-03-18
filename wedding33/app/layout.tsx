import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anthony & Eli | Wedding Invitation",
  description: "Join us in celebrating the wedding of Anthony and Eli.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        <div className="grain-overlay"></div>
        {children}
      </body>
    </html>
  );
}
