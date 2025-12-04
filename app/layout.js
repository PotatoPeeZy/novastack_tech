import "./globals.css";
import Header from "@/components/Header/Header";
import { Russo_One } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import Meta from "@/components/SEO/Meta";

const russoOne = Russo_One({
  variable: "--font-russo-one",
  subsets: ["latin"],
  weight: ["400"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Meta />
      </head>

      <body className={`${russoOne.variable} antialiased`}>
        <Header />
        <div className="[background:transparent] mt-24"></div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
