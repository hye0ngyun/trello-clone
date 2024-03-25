"use client";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "@/lib/theme";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Container } from "@mui/material";

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
          <body>
            <Container
              sx={{
                bgcolor: "#AD88C6",
                minHeight: "100dvh",
              }}
            >
              {children}
            </Container>
          </body>
        </RecoilRoot>
      </ThemeProvider>
    </html>
  );
}
