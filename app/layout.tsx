import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sidarth Krishna",
  description: "Personal portfolio website for Sidarth Krishna"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
