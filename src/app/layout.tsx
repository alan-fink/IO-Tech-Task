import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/lib/StoreProvider";
import ThemeWrapper from "@/components/ThemeWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IO TECH",
  description: "IO Tech – Frontend Technical Task",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Оставляем lang="en" по умолчанию, ThemeWrapper обновит его в браузере
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#FDFBF9]`}>
        <StoreProvider>
          {/* ThemeWrapper управляет направлением (RTL/LTR) и шрифтами арабского языка */}
          <ThemeWrapper>
            {children}
          </ThemeWrapper>
        </StoreProvider>
      </body>
    </html>
  );
}