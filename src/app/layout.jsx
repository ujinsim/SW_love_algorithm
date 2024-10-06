import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "사랑의 알고리즘💕",
  description: "자신의 언어유형을 알아보고 그에 따른 잘 맞는 사람을 뽑습니다",
  icons: {
    icon: "./swIcon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-pink-50 font-bold">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
