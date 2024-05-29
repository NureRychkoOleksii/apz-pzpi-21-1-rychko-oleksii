"use client";

import dynamic from "next/dynamic";
import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import useAuthStore from "../store";

const HeaderNotLogged = dynamic(
  () => import("../components/header-not-logged"),
  {
    ssr: false,
  }
);
const HeaderLogged = dynamic(() => import("../components/header-logged"), {
  ssr: false,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isLoggedIn = useAuthStore((state) => state.token);

  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <>
            {isLoggedIn !== null ? <HeaderLogged /> : <HeaderNotLogged />}
            <main>{children}</main>
          </>
        </ChakraProvider>
      </body>
    </html>
  );
}
