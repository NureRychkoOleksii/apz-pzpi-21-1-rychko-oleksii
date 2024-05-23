using System;
using System.Threading.Tasks;
using StarOfLifeIoT.Types;

namespace StarOfLifeIoT
{
    internal class Program
    {
        public static async Task Main(string[] args)
        {
            var sensor = new Sensor();

            var loginDto = new LoginDto
            {
                Password = "test",
                Username = "test"
            };
            
            var ventricularRepolarization = 160;
            

            await sensor.Login(loginDto);
            while (true)
            {
                var randNum = 10 - new Random().Next(0, 20);
                ventricularRepolarization += randNum;

                var medicalDataDto = new MedicalDataDto
                {
                    SensorData = ventricularRepolarization,
                    SensorId = 1,
                    TimeSaved = DateTime.UtcNow
                };

                var config = await sensor.GetSensorSettings(1);

                await sensor.SaveData(medicalDataDto, 1);

                await Task.Delay(config?.SamplingFrequency ?? 1000);
            }
        }
    }
}