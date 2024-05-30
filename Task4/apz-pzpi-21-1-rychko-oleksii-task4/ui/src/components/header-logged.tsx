"use client";

import { Box, Flex, Text, Spacer, Heading, Button } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/navigation";

const HeaderLogged = () => {
  const router = useRouter();
  const logout = () => localStorage.removeItem("token");

  const handleLogout = () => {
    logout();
    window.dispatchEvent(new Event("storage"));
    router.push("/login");
  };

  return (
    <Box bg="teal.500" p={15}>
      <Flex alignItems="center">
        <NextLink href="/" passHref>
          <Heading size="md" color="white">
            StarOfLife
          </Heading>
        </NextLink>
        <Spacer />
        <NextLink href="/parents/newborns" passHref>
          <Text mr={4} color="white" fontWeight="bold">
            Check Newborns
          </Text>
        </NextLink>
        <Button onClick={handleLogout} colorScheme="red" variant="solid">
          Logout
        </Button>
      </Flex>
    </Box>
  );
};

export default HeaderLogged;
