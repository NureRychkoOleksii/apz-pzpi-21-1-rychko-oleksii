import { Box, Flex, Link, Spacer, Heading } from "@chakra-ui/react";
import NextLink from "next/link";

const HeaderNotLogged = () => {
  return (
    <Box bg="teal.500" p={15}>
      <Flex alignItems="center">
        <NextLink href="/" passHref>
          <Heading size="md" color="white">
            StarOfLife
          </Heading>
        </NextLink>
        <Spacer />
        <NextLink href="/signup" passHref>
          <Link mr={4} color="white" fontWeight="bold">
            Sign Up
          </Link>
        </NextLink>
        <NextLink href="/login" passHref>
          <Link color="white" fontWeight="bold">
            Log In
          </Link>
        </NextLink>
      </Flex>
    </Box>
  );
};

export default HeaderNotLogged;
