import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "./globals.css";

const inter = Orbitron({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`dark:bg-black bg-white bg-no-repeat text-black dark:text-white ${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
