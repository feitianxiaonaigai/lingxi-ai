import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "灵犀命盘",
  description: "东方命理、五行主题与 Guardian 沉浸式世界"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="pre-chart">{children}</body>
    </html>
  );
}
