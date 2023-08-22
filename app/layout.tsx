import "./globals.css";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { GlobalDataProvider } from "@/hooks/useGlobalData";
import { SessionProvider } from "next-auth/react";
import "react-toastify/dist/ReactToastify.css";
import { NextAuthSessionProviderWrapper } from "@/components/NextAuthSessionProviderWrapper";
import { ToastContainer } from "@/components/ToastContainer";

export const metadata: Metadata = {
  title: "gTahidi AI",
  description: "AI in education",
};

export const DM_SANS = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={DM_SANS.className}>
      <body>
        <ToastContainer />
        <NextAuthSessionProviderWrapper>
          <GlobalDataProvider>{children}</GlobalDataProvider>
        </NextAuthSessionProviderWrapper>
      </body>
    </html>
  );
}
