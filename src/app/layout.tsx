import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";
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
    <html lang="en"
    suppressHydrationWarning>
      <body
        className={`font-mono antialiased text-gray-800 dark:text-gray-200 bg-white dark:bg-black/80`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
