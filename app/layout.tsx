import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SceneGuard | Community Operations",
  description: "Management and safety tools for roleplay communities.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

