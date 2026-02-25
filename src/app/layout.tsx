import type { Metadata } from "next";
// 1. Import the fonts from Google
import { Space_Grotesk, Manrope, Fira_Code } from "next/font/google";
import "./globals.css";

// 2. Configure each font and assign it to the CSS variables we used in globals.css
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space", // Matches --font-display in globals.css
  display: 'swap',
  weight: ['400','700'],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope", // Matches --font-sans in globals.css
  display: 'swap',
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono", // Matches --font-mono in globals.css
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Aditya Sharma | AI Developer",
  description: "Portfolio of Aditya Sharma, Computer Science Engineer and AI-Focused Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* 3. Inject the font variables into the body tag */}
      <body className={`${spaceGrotesk.variable} ${manrope.variable} ${firaCode.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}