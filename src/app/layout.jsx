import "./globals.css";

export const metadata = {
  title: "사랑의 알고리즘 ♥",
  description:
    "자신의 언어유형을 알아보고 그에 따른 잘 맞는 사람을 뽑는 사이트 입니다",
  icons: {
    icon: "/swlovealgorithm.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-pink-50 font-bold">{children}</body>
    </html>
  );
}
