import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "US vs China: The AI Race",
  description:
    "Three metrics that explain who's winning the AI race and why the answer is more complicated than the spending suggests.",

  // OpenGraph tags for rich social previews
  openGraph: {
    title: "US vs China: The AI Race",
    description:
      "Three metrics that explain who's winning the AI race and why the answer is more complicated than the spending suggests.",
    type: "website",
    locale: "en_US",
    siteName: "US vs China AI Race",
  },

  // Twitter card
  twitter: {
    card: "summary_large_image",
    title: "US vs China: The AI Race",
    description:
      "Three metrics that explain who's winning the AI race and why the answer is more complicated than the spending suggests.",
    creator: "@jakeprokopets",
  },

  // Canonical URL (replace with your Vercel domain after deploy)
  metadataBase: new URL("https://us-vs-china-ai.vercel.app"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-950 text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
