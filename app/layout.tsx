import type { Metadata } from "next";
import "./globals.css";
import Nav from "./components/UI/nav";
import Footer from "./components/UI/footer";
import { Montserrat } from "next/font/google";

export const metadata: Metadata = {
  title: "Berry Studio",
  description: "Biuro Projektowe Instalacji Budynkowych",
};

const navigation = [
  { name: "Home", href: "/" },
  { name: "O Nas", href: "/about" },
  { name: "Usługi", href: "/about#serv" },
  { name: "Kontakt", href: "/#contact" },
];

const montserrat = Montserrat({
  weight: ["600", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className+" "}>
        <Nav />
        {children}
        <Footer navigation={navigation} />
      </body>
    </html>
  );
}
