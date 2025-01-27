import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Space_Mono, Inter } from "next/font/google";
import "./globals.css";

const regularFont = Inter({
  fallback: ["Times New Roman"],
  subsets: ["latin"],
  variable: "--font-regular",
  display: "swap",
  weight: "400",
});

const codeFont = Space_Mono({
  subsets: ["latin"],
  variable: "--font-code",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Avocet",
  description:
    "Avocet is an open-source feature flagging and software experimentation platform capable of integrating with any telemetry infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${regularFont.variable} ${codeFont.variable} font-regular`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="sm:container mx-auto w-[88vw] h-auto">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
