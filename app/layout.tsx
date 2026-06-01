import type { Metadata } from "next";
import { M_PLUS_Rounded_1c } from "next/font/google";
import "./globals.css";

const rounded = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
  variable: "--font-rounded"
});

export const metadata: Metadata = {
  title: "西太子堂から地球を掘ろう！ | そとあそびプロジェクト・せたがや",
  description:
    "6月28日（土）11:00〜15:00、西太子堂駅南側の空き地で開催する穴掘り・宝探し・外遊びイベントの案内ページです。",
  openGraph: {
    title: "西太子堂から地球を掘ろう！",
    description:
      "掘りたい人、集まれ！金属探知機でも宝物をさがせる、親子で楽しむ外遊びイベント。",
    type: "website",
    locale: "ja_JP"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body className={`${rounded.variable} bg-paper text-deepSoil antialiased`}>{children}</body>
    </html>
  );
}
