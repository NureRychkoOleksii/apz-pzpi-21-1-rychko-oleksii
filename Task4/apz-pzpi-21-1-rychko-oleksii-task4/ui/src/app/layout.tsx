import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import DynamicHeader from "@/components/dynamic-header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ChakraProvider>
        <body>
          <>
            <DynamicHeader />
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
