import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Launch check | Deployment test",
  description: "A simple Next.js deployment test app.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
