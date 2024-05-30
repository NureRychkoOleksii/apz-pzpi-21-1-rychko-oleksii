"use client";

import axiosInstance from "@/utils/axios-instance";
import { Box, Button, useToast } from "@chakra-ui/react";

const BackupManagement = () => {
  const toast = useToast();

  const handleBackup = async () => {
    try {
      await axiosInstance.post("/backup/save");

      toast({
        title: "Success",
        description: "Saving database backup was successful.",
        status: "success",
        duration: 5000,
      });
    } catch (error) {
      console.error("Error saving backup:", error);
      toast({
        title: "Error",
        description: "Failed to save database backup.",
        status: "error",
        duration: 5000,
      });
    }
  };

  const handleDownload = async () => {
    try {
      const response = await axiosInstance.post("/backup/download", null, {
        responseType: "blob",
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "database_backup.zip");
      document.body.appendChild(link);
      link.click();
      link.remove();

      toast({
        title: "Success",
        description: "Database backup was downloaded.",
        status: "success",
        duration: 5000,
      });
    } catch (error) {
      console.error("Error downloading backup:", error);
      toast({
        title: "Error",
        description: "Failed to download database backup.",
        status: "error",
        duration: 5000,
      });
    }
  };

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <Button colorScheme="blue" onClick={handleBackup}>
        Save Backup
      </Button>
      <Button colorScheme="blue" onClick={handleDownload}>
        Download Backup
      </Button>
    </Box>
  );
};

export default BackupManagement;
