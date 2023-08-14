import "./globals.css";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { GlobalDataProvider } from "@/hooks/useGlobalData";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "@/authConfig";
import { PublicClientApplication, EventType } from "@azure/msal-browser";

export const metadata: Metadata = {
  title: "gTahidi AI",
  description: "AI in education",
};

export const DM_SANS = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const msalInstance = new PublicClientApplication(msalConfig);

msalInstance.initialize().then(() => {
  // Account selection logic is app dependent. Adjust as needed for different use cases.
  const accounts = msalInstance.getAllAccounts();
  if (accounts.length > 0) {
    msalInstance.setActiveAccount(accounts[0]);
  }

  msalInstance.addEventCallback((event: any) => {
    if (event.eventType === EventType.LOGIN_SUCCESS && event.payload.account) {
      const account = event.payload.account;
      msalInstance.setActiveAccount(account);
    }
  });
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={DM_SANS.className}>
      <body>
        <MsalProvider instance={msalInstance}>
          <GlobalDataProvider>{children}</GlobalDataProvider>
        </MsalProvider>
      </body>
    </html>
  );
}
