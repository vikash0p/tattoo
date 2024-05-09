import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import GlobalLayout from "@/utils/GlobalLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Karma Tattoo",
  description: "A Karma tattoo depicts the concept of cause and effect, symbolizing that our actions have consequences, whether positive or negative. Often illustrated with a circular motif representing the cycle of life, it serves as a reminder to cultivate good deeds and mindfulness in daily life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${inter.className} `}>
        <GlobalLayout>{children} </GlobalLayout>
      </body>
    </html>
  );
}
