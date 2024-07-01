import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../components/footer";
import Header from "../components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Animal Crossing",
  description: "Site Animal Crossing de Clément et Ange",
  icons: {
    icon: "/logo-ac.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
