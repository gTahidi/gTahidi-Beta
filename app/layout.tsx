import "./globals.css";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { GlobalDataProvider } from "@/hooks/useGlobalData";
import { SessionProvider } from "next-auth/react";
import "react-toastify/dist/ReactToastify.css";
import { NextAuthSessionProviderWrapper } from "@/components/NextAuthSessionProviderWrapper";
import { ToastContainer } from "@/components/ToastContainer";
import Script from "next/script";


export const metadata: Metadata = {
  title: "gTahidi AI",
  description: "AI in education",
};

const DM_SANS = DM_Sans({
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
        <script type="text/javascript">
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "n4fmj413ma");
        </script>
      </body>
    </html>
  );
}
