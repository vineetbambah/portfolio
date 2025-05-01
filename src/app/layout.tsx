import type { Metadata } from "next";
import "./globals.css";
import { Courier_Prime} from "next/font/google";
const courierPrime = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-courier-prime",
});
export const metadata: Metadata = {
  title: "Vineet Bambah",
  description: "Software Engineer | Open Source Contributor | Tech Enthusiast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-mono antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
