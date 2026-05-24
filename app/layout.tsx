import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "US vs China: The AI Race",
  description:
    "Three metrics that explain who's winning the AI race and why the answer is more complicated than the spending suggests.",
  openGraph: {
    title: "US vs China: The AI Race",
    description:
      "Three metrics that explain who's winning the AI race and why the answer is more complicated than the spending suggests.",
    type: "website",
    locale: "en_US",
    siteName: "US vs China AI Race",
  },
  twitter: {
    card: "summary_large_image",
    title: "US vs China: The AI Race",
    description:
      "Three metrics that explain who's winning the AI race and why the answer is more complicated than the spending suggests.",
    creator: "@jakeprokopets",
  },
  metadataBase: new URL("https://us-vs-china-ai.vercel.app"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
