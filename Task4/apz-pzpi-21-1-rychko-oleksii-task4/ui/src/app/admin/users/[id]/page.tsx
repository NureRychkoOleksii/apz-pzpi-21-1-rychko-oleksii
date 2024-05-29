"use client";

import { useState, useEffect } from "react";
import axiosInstance from "@/utils/axios-instance";
import { useRouter } from "next/navigation";
import { VStack, Box, Input, Select, Button, useToast } from "@chakra-ui/react";
import { Role, User } from "@/components/management/user-management";

const EditUser = ({ params }: { params: { id: number } }) => {
  const [editableUser, setEditableUser] = useState<User & { password: string }>(
    {
      id: 0,
      username: "",
      email: "",
      role: Role.Parent.toString(),
      password: "",
    }
  );
  const router = useRouter();
  const toast = useToast();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axiosInstance.get(`/User/${params.id}`);
        setEditableUser({
          ...response.data,
          role: Role[response.data.role],
        });
      } catch (error) {
        console.error("Error fetching user:", error);
        toast({
          title: "Error",
          description: "Failed to fetch user data.",
          status: "error",
          duration: 5000,
        });
      }
    };

    fetchUser();
  }, [params.id, toast]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setEditableUser({ ...editableUser, [name]: value });
  };

  const handleSaveUser = async () => {
    console.log({ editableUser });
    try {
      await axiosInstance.put(`/User/${params.id}`, {
        username: editableUser.username,
        email: editableUser.email,
        role: Role[editableUser.role as any],
        password: editableUser.password,
      });
      toast({
        title: "Success",
        description: "User updated successfully.",
        status: "success",
        duration: 5000,
      });
      router.push("/admin");
    } catch (error) {
      console.error("Error updating user:", error);
      toast({
        title: "Error",
        description: "Failed to update user data.",
        status: "error",
        duration: 5000,
      });
    }
  };

  const handleCancelEdit = () => {
    router.push("/admin");
  };

  if (!editableUser) {
    return <div>Loading...</div>;
  }

  return (
    <VStack spacing={4} align="stretch">
      <Box>
        <Input
          placeholder="Username"
          value={editableUser.username}
          onChange={handleInputChange}
          name="username"
          mb={2}
        />
        <Input
          placeholder="Email"
          value={editableUser.email}
          onChange={handleInputChange}
          name="email"
          mb={2}
        />
        <Select
          placeholder="Select Role"
          value={editableUser.role}
          onChange={(e) => {
            setEditableUser({
              ...editableUser,
              role: e.target.value,
            });
          }}
          mb={2}
        >
          {Object.keys(Role)
            .filter((key: string) => !isNaN(+key))
            .map((key: string) => (
              <option key={key} value={Role[+key]}>
                {Role[+key]}
              </option>
            ))}
        </Select>
        <Button colorScheme="blue" onClick={handleSaveUser} mr={2}>
          Save Changes
        </Button>
        <Button colorScheme="gray" onClick={handleCancelEdit}>
          Cancel
        </Button>
      </Box>
    </VStack>
  );
};

export default EditUser;
