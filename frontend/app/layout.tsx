import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/ui/header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="flex h-full w-full flex-col">
          <div className="flex-col items-center justify-between border-2 border-blue-700 p-3 ">
            <Header />
          </div>
          <div className="h-4/5 grow flex-col items-center justify-between border-2 border-blue-700 p-3">
            <main className="md:p-25 grow items-center justify-between p-2 font-mono text-sm">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
