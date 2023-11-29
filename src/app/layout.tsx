"use client";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "@/lib/theme";

// const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider theme={defaultTheme}>
        <RecoilRoot>
          <body>{children}</body>
        </RecoilRoot>
      </ThemeProvider>
    </html>
  );
}
