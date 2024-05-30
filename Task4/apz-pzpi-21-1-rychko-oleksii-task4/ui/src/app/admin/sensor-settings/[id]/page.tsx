"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Input,
  Select,
  useToast,
} from "@chakra-ui/react";
import axiosInstance from "@/utils/axios-instance";
import { useRouter } from "next/navigation";
import { SensorSettings } from "@/components/management/sensor-settings-management";

const EditSensorSettings = ({ params }: { params: { id: number } }) => {
  const [editableSensorSettings, setEditableSensorSettings] = useState<
    Omit<SensorSettings, "id">
  >({
    highCriticalThreshold: 0,
    lowCriticalThreshold: 0,
    highEdgeThreshold: 0,
    lowEdgeThreshold: 0,
    samplingFrequency: 0,
    isActive: false,
  });
  const router = useRouter();
  const toast = useToast();

  useEffect(() => {
    const fetchSensor = async () => {
      try {
        const response = await axiosInstance.get(
          `/SensorSettings/${params.id}`
        );
        setEditableSensorSettings({
          ...response.data,
          isActive: response.data.isActive === true,
        });
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching sensor settings:", error);
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

  const handleSaveSensorSettings = async () => {
    try {
      await axiosInstance.put(
        `/SensorSettings/${params.id}`,
        editableSensorSettings
      );
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

  if (!editableSensorSettings) {
    return <div>Loading...</div>;
  }

  console.log(editableSensorSettings.isActive);

  return (
    <Box>
      <Input
        placeholder="High critical threshold"
        value={editableSensorSettings.highCriticalThreshold}
        onChange={(e) =>
          setEditableSensorSettings({
            ...editableSensorSettings,
            highCriticalThreshold: e.target.value as any,
          })
        }
        mb={2}
      />
      <Input
        placeholder="High edge threshold"
        value={editableSensorSettings.highEdgeThreshold}
        onChange={(e) =>
          setEditableSensorSettings({
            ...editableSensorSettings,
            highEdgeThreshold: e.target.value as any,
          })
        }
        mb={2}
      />
      <Input
        placeholder="Low critical threshold"
        value={editableSensorSettings.lowCriticalThreshold}
        onChange={(e) =>
          setEditableSensorSettings({
            ...editableSensorSettings,
            lowCriticalThreshold: e.target.value as any,
          })
        }
        mb={2}
      />
      <Input
        placeholder="Low edge threshold"
        value={editableSensorSettings.lowEdgeThreshold}
        onChange={(e) =>
          setEditableSensorSettings({
            ...editableSensorSettings,
            lowEdgeThreshold: e.target.value as any,
          })
        }
        mb={2}
      />
      <Input
        placeholder="Sampling frequency"
        value={editableSensorSettings.samplingFrequency}
        onChange={(e) =>
          setEditableSensorSettings({
            ...editableSensorSettings,
            samplingFrequency: e.target.value as any,
          })
        }
        mb={2}
      />
      <Checkbox
        size="md"
        colorScheme="green"
        isChecked={editableSensorSettings.isActive}
        onChange={() =>
          setEditableSensorSettings({
            ...editableSensorSettings,
            isActive: !editableSensorSettings.isActive,
          })
        }
      >
        Is active
      </Checkbox>
      <br />
      <br />
      <Button colorScheme="blue" onClick={handleSaveSensorSettings}>
        Save Sensor Settings
      </Button>
      <Button colorScheme="gray" onClick={handleCancelEdit} ml={2}>
        Cancel
      </Button>
    </Box>
  );
};

export default EditSensorSettings;
