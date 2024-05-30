"use client";

import { VStack, Heading, Button, Box, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(localStorage.getItem("token") ?? "");

    const handleStorageChange = () => {
      const newToken = localStorage.getItem("token") ?? "";
      setToken(newToken);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleGetStarted = () => {
    router.push("/login");
  };

  return (
    <Box p={6} textAlign="center">
      <VStack spacing={6}>
        <Heading size="2xl">Welcome to StarOfLife</Heading>
        {!token ? (
          <>
            <Text fontSize="xl">
              Your trusted partner in monitoring and ensuring the health of
              newborns.
            </Text>
            <Button colorScheme="teal" size="lg" onClick={handleGetStarted}>
              Get Started
            </Button>
          </>
        ) : (
          <>
            <Text fontSize="xl">To see your info, go to:</Text>
            <Button
              colorScheme="teal"
              size="lg"
              onClick={() => router.push("/parent")}
            >
              Get Started
            </Button>
          </>
        )}
      </VStack>
    </Box>
  );
}
