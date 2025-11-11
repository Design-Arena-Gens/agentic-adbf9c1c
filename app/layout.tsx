import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apple | Vision of Tomorrow",
  description:
    "Immersive interactive advertisement experience celebrating Apple's next-generation innovations.",
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
