"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  VStack,
  Input,
  Select,
} from "@chakra-ui/react";
import axiosInstance from "@/utils/axios-instance";
import { useRouter } from "next/navigation";

export interface Sensor {
  id: number;
  newbornId: number;
  sensorSettingsId: number;
}

export enum SensorType {
  ElectroCardiogram = 0,
  OxygenSaturation = 1,
  BodyTemperature = 2,
  BodyMovementActivity = 3,
}

const SensorManagement: React.FC = () => {
  const [sensors, setSensors] = useState<Sensor[]>([]);
  const [newSensor, setNewSensor] = useState<{
    newbornId: number;
    sensorType: string;
    sensorSettingsId: number;
  }>({ newbornId: 0, sensorType: "", sensorSettingsId: 0 });

  useEffect(() => {
    const fetchSensors = async () => {
      try {
        const response = await axiosInstance.get("/Sensor");
        setSensors(response.data);
      } catch (error) {
        console.error("Error fetching sensors:", error);
      }
    };

    fetchSensors();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await axiosInstance.delete(`/Sensor/${id}`);
      setSensors(sensors.filter((sensor) => sensor.id !== id));
    } catch (error) {
      console.error("Error deleting sensor:", error);
    }
  };

  const handleAddSensor = async () => {
    try {
      await axiosInstance.post("/Sensor", newSensor);
      setNewSensor({
        newbornId: 0,
        sensorType: SensorType.ElectroCardiogram.toString(),
        sensorSettingsId: 0,
      });
    } catch (error) {
      console.error("Error adding sensor:", error);
    }
  };

  const router = useRouter();

  return (
    <VStack spacing={4} align="stretch">
      <Box>
        <Input
          placeholder="Newborn Id"
          value={newSensor.newbornId}
          onChange={(e) =>
            setNewSensor({ ...newSensor, newbornId: e.target.value as any })
          }
          mb={2}
        />
        <Input
          placeholder="Sensor settings ID"
          value={newSensor.sensorSettingsId}
          onChange={(e) =>
            setNewSensor({
              ...newSensor,
              sensorSettingsId: e.target.value as any,
            })
          }
          mb={2}
        />
        <Select
          placeholder="Select Type"
          value={newSensor.sensorType}
          onChange={(e) => {
            setNewSensor({
              ...newSensor,
              sensorType: SensorType[e.target.value as any],
            });
          }}
          mb={2}
        >
          {Object.keys(SensorType)
            .filter((key: string) => !isNaN(+key))
            .map((key: string) => (
              <option key={key} value={SensorType[+key]}>
                {SensorType[+key]}
              </option>
            ))}
        </Select>
        <Button colorScheme="blue" onClick={handleAddSensor} mb={4}>
          Add New Sensor
        </Button>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Newborn ID</Th>
              <Th>Settings Id</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {sensors.map((sensor) => (
              <Tr key={sensor.id}>
                <Td>{sensor.id}</Td>
                <Td>{sensor.newbornId}</Td>
                <Td>{sensor.sensorSettingsId}</Td>
                <Td>
                  <Button
                    colorScheme="green"
                    onClick={() => router.push(`/admin/sensors/${sensor.id}`)}
                  >
                    Edit Sensor
                  </Button>
                  <Button
                    colorScheme="red"
                    onClick={() => handleDelete(sensor.id)}
                  >
                    Delete
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </VStack>
  );
};

export default SensorManagement;
