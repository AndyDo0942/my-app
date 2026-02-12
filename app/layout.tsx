import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Andy Do | Software Engineer",
  description:
    "Personal website for Andy Do, a product designer and frontend engineer crafting bold digital experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
