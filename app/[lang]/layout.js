import { Inter } from "next/font/google";
import "./globals.css";
import { i18n } from "@/i18n.config";

import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/app/[lang]/components/Navbar/Navbar";
import AuthProvider from "@/components/AuthProvider/AuthProvider";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "BEST-IT | Company",
};
export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({ children, params }) {
  return (
    <html lang={params?.lang ? params?.lang : "uz"}>
      <body className={inter.className}>
        <AuthProvider>
          <link rel="icon" href="/favicon.svg" type="image/x-icon" />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.0.0/css/flag-icons.min.css"
          />
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar lang={params.lang} />
            {children}
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
