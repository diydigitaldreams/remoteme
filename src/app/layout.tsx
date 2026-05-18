import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RemoteMe",
  description: "Score remote jobs by fit, draft tailored applications, and track follow-ups.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
