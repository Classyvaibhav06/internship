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
  metadataBase: new URL('https://vaibhav-ghoshi.vercel.app'),
  title: {
    default: "Vaibhav Ghoshi | Full Stack Developer & DSA Enthusiast",
    template: "%s | Vaibhav Ghoshi"
  },
  description: "Portfolio of Vaibhav Ghoshi, a passionate Full Stack Web Developer and DSA enthusiast specializing in C++, React, Next.js, and modern JavaScript.",
  keywords: ["Vaibhav Ghoshi", "Full Stack Developer", "Web Developer", "React Developer", "Next.js", "C++", "DSA", "JavaScript", "Frontend Developer", "Backend Developer", "Portfolio"],
  authors: [{ name: "Vaibhav Ghoshi", url: "https://vaibhav-ghoshi.vercel.app" }],
  creator: "Vaibhav Ghoshi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vaibhav-ghoshi.vercel.app",
    title: "Vaibhav Ghoshi | Full Stack Developer",
    description: "Portfolio of Vaibhav Ghoshi, a passionate Full Stack Web Developer and DSA enthusiast.",
    siteName: "Vaibhav Ghoshi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaibhav Ghoshi | Full Stack Developer",
    description: "Portfolio of Vaibhav Ghoshi, a passionate Full Stack Web Developer and DSA enthusiast.",
    creator: "@vaibhavghoshi",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
