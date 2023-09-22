import Header from "@/components/common/Header/Header";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/common/Footer/Footer";
import { figtree } from "./fonts";

export const metadata: Metadata = {
  title: "Level Up Home Page",
  description: "Level Up is a cricket analytics website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        id="root"
        className={`${figtree.className} ${figtree.variable} text-black`}
      >
        <main>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
