import { Box, Heading, VStack } from "@chakra-ui/react";
import BackupManagement from "./backup-management";

const BackupPage = () => {
  return (
    <VStack spacing={4} align="stretch">
      <Box>
        <Heading as="h1" size="lg" mb={4}>
          Backup Management
        </Heading>
        <BackupManagement />
      </Box>
    </VStack>
  );
};

export default BackupPage;
