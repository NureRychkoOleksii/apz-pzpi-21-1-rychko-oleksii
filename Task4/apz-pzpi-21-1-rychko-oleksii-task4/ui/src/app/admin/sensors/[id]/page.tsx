"use client";

import React, { useEffect, useState } from "react";
import { Box, Button, Input, Select, useToast } from "@chakra-ui/react";
import axiosInstance from "@/utils/axios-instance";
import { useRouter } from "next/navigation";
import { Sensor, SensorType } from "@/components/management/sensor-management";

const EditSensor = ({ params }: { params: { id: number } }) => {
  const [editableSensor, setEditableSensor] = useState<
    Sensor & { type: number }
  >({
    id: 0,
    type: SensorType.ElectroCardiogram,
    newbornId: 0,
    sensorSettingsId: 0,
  });
  const router = useRouter();
  const toast = useToast();

  useEffect(() => {
    const fetchSensor = async () => {
      try {
        const response = await axiosInstance.get(`/Sensor/${params.id}`);
        setEditableSensor({
          ...response.data,
          type: response.data.sensorType,
        });
      } catch (error) {
        console.error("Error fetching sensor:", error);
        toast({
          title: "Error",
          description: "Failed to fetch sensor data.",
          status: "error",
          duration: 5000,
        });
      }
    };

    fetchSensor();
  }, [params.id, toast]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setEditableSensor({ ...editableSensor, [name]: value });
  };

  const handleSaveSensor = async () => {
    try {
      await axiosInstance.put(`/Sensor/${params.id}`, {
        newbornId: editableSensor.newbornId,
        sensorType: editableSensor.type,
        sensorSettingsId: editableSensor.sensorSettingsId,
      });
      toast({
        title: "Success",
        description: "Sensor updated successfully.",
        status: "success",
        duration: 5000,
      });
      router.push("/admin");
    } catch (error) {
      console.error("Error updating sensor:", error);
      toast({
        title: "Error",
        description: "Failed to update sensor data.",
        status: "error",
        duration: 5000,
      });
    }
  };

  const handleCancelEdit = () => {
    router.push("/admin");
  };

  if (!editableSensor) {
    return <div>Loading...</div>;
  }

  return (
    <Box>
      <Input
        placeholder="Newborn Id"
        value={editableSensor.newbornId}
        onChange={handleInputChange}
        name="newbornId"
        mb={2}
      />
      <Input
        placeholder="Sensor settings ID"
        value={editableSensor.sensorSettingsId}
        onChange={handleInputChange}
        name="sensorSettingsId"
        mb={2}
      />
      <Button colorScheme="blue" onClick={handleSaveSensor}>
        Save Sensor
      </Button>
      <Button colorScheme="gray" onClick={handleCancelEdit} ml={2}>
        Cancel
      </Button>
    </Box>
  );
};

export default EditSensor;
