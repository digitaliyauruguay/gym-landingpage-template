import "./globals.css";
import { Inter } from "next/font/google";
import ThemeProvider from "./theme-provider";
import { siteConfig } from "./config/site";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: siteConfig.branding.metaTitle,
  description: siteConfig.branding.metaDescription,
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}