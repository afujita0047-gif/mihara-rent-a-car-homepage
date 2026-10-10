import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "三原産業のレンタカー | 料金と車種",
  description: "軽自動車からキャンピングカーまで。三原産業のレンタカー料金と車種をご案内します。",
  robots: { index: false, follow: true, googleBot: { index: false, follow: true } },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja"><body>{children}</body></html>;
}
