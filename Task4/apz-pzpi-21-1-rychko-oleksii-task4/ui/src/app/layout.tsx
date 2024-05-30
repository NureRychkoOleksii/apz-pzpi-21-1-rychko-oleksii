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
      <ChakraProvider>
        <body>
          <>
            {token ? <HeaderLogged /> : <HeaderNotLogged />}
            <main
              style={{
                padding: "30px",
              }}
            >
              {children}
            </main>
          </>
        </body>
      </ChakraProvider>
    </html>
  );
}
