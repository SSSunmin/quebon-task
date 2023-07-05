import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Recoil from "@/Recoil";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shopping",
  description: "You can buy anything in this world.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Recoil>
          <Navbar />
          {children}
        </Recoil>
      </body>
    </html>
  );
}
