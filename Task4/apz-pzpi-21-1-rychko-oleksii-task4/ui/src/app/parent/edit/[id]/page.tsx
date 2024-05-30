"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Button, Input, VStack, useToast } from "@chakra-ui/react";
import axiosInstance from "@/utils/axios-instance";
import { Parent } from "../../page";

const EditParent = ({ params }: { params: { id: number } }) => {
  const [parent, setParent] = useState<Parent>({
    id: 0,
    name: "",
    contractInfo: "",
  });
  const router = useRouter();
  const toast = useToast();

  useEffect(() => {
    const fetchParentData = async () => {
      try {
        const response = await axiosInstance.get(`/Parent/${params.id}`);
        setParent(response.data);
      } catch (error) {
        console.error("Error fetching parent data:", error);
        toast({
          title: "Error",
          description: "Failed to fetch parent data.",
          status: "error",
          duration: 5000,
        });
      }
    };

    fetchParentData();
  }, [params.id, toast]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setParent({ ...parent, [name]: value });
  };

  const handleSave = async () => {
    try {
      await axiosInstance.put(`/Parent/${parent.id}`, {
        name: parent.name,
        contractInfo: parent.contractInfo,
      });
      toast({
        title: "Success",
        description: "Profile updated successfully.",
        status: "success",
        duration: 5000,
      });
      router.push("/parent");
    } catch (error) {
      console.error("Error updating profile:", error);
      toast({
        title: "Error",
        description: "Failed to update profile.",
        status: "error",
        duration: 5000,
      });
    }
  };

  const handleCancel = () => {
    router.push("/parent");
  };

  return (
    <VStack spacing={4} align="stretch">
      <Box>
        <Input
          placeholder="Name"
          value={parent.name}
          onChange={handleInputChange}
          name="name"
          mb={2}
        />
        <Input
          placeholder="Contract info"
          value={parent.contractInfo}
          onChange={handleInputChange}
          name="contractInfo"
          mb={2}
        />
        <Button colorScheme="blue" onClick={handleSave}>
          Save Changes
        </Button>
        <Button colorScheme="gray" onClick={handleCancel} ml={4}>
          Cancel
        </Button>
      </Box>
    </VStack>
  );
};

export default EditParent;
