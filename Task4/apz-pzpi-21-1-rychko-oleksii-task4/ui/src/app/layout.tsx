"use client";

import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import HeaderLogged from "@/components/header-logged";
import HeaderNotLogged from "@/components/header-not-logged";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const token = localStorage.getItem("token");

  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <>
            {token ? <HeaderLogged /> : <HeaderNotLogged />}
            <main>{children}</main>
          </>
        </ChakraProvider>
      </body>
    </html>
  );
}
