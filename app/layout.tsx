import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elevate AI Future — Private AI Infrastructure",
  description: "The capital, facility, and operating plan for Elevate Innovation Technologies' private frontier-AI cluster.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{__html:`(function(){var theme="dark";try{var saved=localStorage.getItem("elevate-theme");theme=saved==="light"||saved==="dark"?saved:(window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark")}catch(e){}document.documentElement.dataset.theme=theme;document.documentElement.style.colorScheme=theme})()`}} />
      </head>
      <body>{children}</body>
    </html>
  );
}
