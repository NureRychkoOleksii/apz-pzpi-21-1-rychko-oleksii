"use client";

import React from "react";
import {
  Box,
  Heading,
  VStack,
  Link as ChakraLink,
  Button,
} from "@chakra-ui/react";
import { useAdminAuth } from "@/hooks/use-admin-auth";
import UserManagement from "@/components/management/user-management";
import SensorManagement from "@/components/management/sensor-management";
import SensorSettingsManagement from "@/components/management/sensor-settings-management";
import Link from "next/link";

const AdminPanel: React.FC = () => {
  useAdminAuth();

  return (
    <Box p={8}>
      <VStack spacing={4} align="stretch">
        <Heading as="h1" size="xl" textAlign="center">
          Admin Panel
        </Heading>
        <ChakraLink as={Link} href="/admin/backup">
          <Button colorScheme="blue" mb={4}>
            Backup Database
          </Button>
        </ChakraLink>
        <Heading as="h1" size="xl" textAlign="center">
          Users
        </Heading>
        <UserManagement />
        <Heading as="h1" size="xl" textAlign="center">
          Sensors
        </Heading>
        <SensorManagement />
        <SensorSettingsManagement />
      </VStack>
    </Box>
  );
};

export default AdminPanel;
