import "../../styles/globals.css";

import { openSans } from "@/components/layout/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={"openSans.variable"}>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}