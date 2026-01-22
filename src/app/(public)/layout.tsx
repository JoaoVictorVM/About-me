import "../../styles/globals.css";

import { Montserrat } from "next/font/google";

const font = Montserrat({
  weight: ["400", "600", "700"],
  subsets: ["latin"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={font.className}>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}