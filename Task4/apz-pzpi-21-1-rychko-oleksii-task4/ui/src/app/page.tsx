"use client";

import { VStack, Heading, Button, Box, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const token = localStorage.getItem("token");

  const handleGetStarted = () => {
    router.push("/login");
  };

  return (
    <Box p={6} textAlign="center">
      <VStack spacing={6}>
        <Heading size="2xl">Welcome to StarOfLife</Heading>
        {token ? (
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
            <Text fontSize="xl">To see your children, go to:</Text>
            <Button
              colorScheme="teal"
              size="lg"
              onClick={() => router.push("/children")}
            >
              Get Started
            </Button>
          </>
        )}
      </VStack>
    </Box>
  );
}
