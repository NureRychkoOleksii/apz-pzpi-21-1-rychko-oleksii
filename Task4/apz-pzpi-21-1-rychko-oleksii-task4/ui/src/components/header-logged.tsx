"use client";

import { Box, Flex, Link, Spacer, Heading, Button } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import useStore from "../store";

const HeaderLogged = () => {
  const router = useRouter();
  const logout = useStore((state) => state.clearToken);

  const handleLogout = () => {
    logout();
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
          <Link mr={4} color="white" fontWeight="bold">
            Check Newborns
          </Link>
        </NextLink>
        <Button onClick={handleLogout} colorScheme="red" variant="solid">
          Logout
        </Button>
      </Flex>
    </Box>
  );
};

export default HeaderLogged;
