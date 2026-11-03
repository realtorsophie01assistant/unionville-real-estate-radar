import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "渔人村地产周报 | Unionville Real Estate Radar",
  description: "Unionville 与 Markham 周边房地产市场情报、社区动态与 AI 周报。",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}