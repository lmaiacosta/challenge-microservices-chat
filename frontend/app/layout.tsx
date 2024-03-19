import "./globals.css";
import Header from "@/ui/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-full w-full flex-col lg:container md:mx-auto">
          {/* <div className="mt-14 flex-col items-center justify-between border-2 border-blue-700 "> */}
          <div className="mt-14 flex-col items-center justify-between">
            <Header />
          </div>
          <div className="h-4/5 grow flex-col items-center justify-between p-3">
            <main className="md:p-25 grow items-center justify-between p-2 font-mono text-sm">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
