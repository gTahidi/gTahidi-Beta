import "./globals.css";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { GlobalDataProvider } from "@/hooks/useGlobalData";

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
        <GlobalDataProvider>{children}</GlobalDataProvider>
      </body>
    </html>
  );
}
