"use client";

import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import axiosInstance from "@/utils/axios-instance";
import useAuthStore from "@/store";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setToken } = useAuthStore();
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await axiosInstance.post("/User/login", {
        username,
        password,
      });

      if (response.status === 200) {
        setToken(response.data.token);
        router.push("/");
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Box p={6}>
      <VStack spacing={4} align="flex-start">
        <Heading>Login</Heading>
        <Text>Welcome back to StarOfLife. Please log in to your account.</Text>
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <Button colorScheme="teal" onClick={handleLogin}>
          Login
        </Button>
      </VStack>
    </Box>
  );
};

export default Login;
