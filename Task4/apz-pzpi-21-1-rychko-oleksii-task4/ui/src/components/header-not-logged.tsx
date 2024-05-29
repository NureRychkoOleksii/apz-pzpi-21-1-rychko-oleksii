import { Box, Flex, Text, Spacer, Heading } from "@chakra-ui/react";
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
          <Text mr={4} color="white" fontWeight="bold">
            Sign Up
          </Text>
        </NextLink>
        <NextLink href="/login" passHref>
          <Text color="white" fontWeight="bold">
            Log In
          </Text>
        </NextLink>
      </Flex>
    </Box>
  );
};

export default HeaderNotLogged;
