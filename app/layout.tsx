import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { MotionSettingsProvider } from "@/components/MotionSettingsProvider";
import { SkipLink } from "@/components/SkipLink";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display"
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono"
});

export const metadata: Metadata = {
  title: "Dhyey Sanghvi | Cybersecurity Portfolio",
  description:
    "Cybersecurity graduate specializing in AWS-first cloud security, zero-trust data lakes, and SIEM pipelines.",
  openGraph: {
    title: "Dhyey Sanghvi | Cybersecurity Portfolio",
    description:
      "AWS-first cloud security experience with measurable impact across telemetry, detection, and compliance.",
    url: "https://dhyeysanghvi.com",
    siteName: "Dhyey Sanghvi",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhyey Sanghvi | Cybersecurity Portfolio",
    description:
      "Cybersecurity graduate focused on cloud data pipelines, detection engineering, and secure automation."
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrains.variable}`}>
      <body className="font-body">
        <ThemeProvider>
          <MotionSettingsProvider>


            <SkipLink />
            <Nav />
            {children}
            <Footer />
          </MotionSettingsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
