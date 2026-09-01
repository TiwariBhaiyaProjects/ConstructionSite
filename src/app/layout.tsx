import type { Metadata } from "next";
import { Inter, Public_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import GlobalNavbar from "@/components/layout/GlobalNavbar";
import GlobalFooter from "@/components/layout/GlobalFooter";
import NextTopLoader from "nextjs-toploader";
import GlobalWhatsAppButton from "@/components/layout/GlobalWhatsAppButton";
import ScrollToTopButton from "@/components/layout/ScrollToTopButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rajnandiniconstruction.com"),
  title: "Rajnandini Construction - Trusted Construction Partner",
  description:
    "Rajnandini Construction provides residential construction, commercial construction, G+1/G+2 buildings, renovation, interiors, civil work, planning and free estimates across Bihar and Jharkhand.",
  authors: [{ name: "Rajnandini Construction" }],
  openGraph: {
    type: "website",
    title: "Rajnandini Construction - Trusted Construction Partner",
    description:
      "Residential, commercial, G+1/G+2, renovation, interiors, civil work and planning services with free construction estimates.",
    images: ["/images/rc_logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@RajnandiniConstruction",
    images: ["/images/rc_logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${publicSans.variable}`}>
      <body className="antialiased min-h-screen flex flex-col">
        <NextTopLoader
          color="#E8B923"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
        />
        <Providers>
          <GlobalNavbar />
          <main className="flex-1">{children}</main>
          <GlobalFooter />
        </Providers>
        <GlobalWhatsAppButton />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
