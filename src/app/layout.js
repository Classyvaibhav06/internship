import { Outfit, Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Vaibhav Ghoshi | Full Stack Developer",
  description: "Web developer & DSA enthusiast with C++. Curious minded, open for collaboration and freelancing in development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} ${inter.variable} font-sans flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950`}>
        <Navbar />
        <main className="flex-1 w-full flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
