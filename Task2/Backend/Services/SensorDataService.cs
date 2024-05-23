using Backend.Abstraction.Services;
using Backend.Core;
using Backend.Core.Enums;
using Microsoft.EntityFrameworkCore;

namespace Backend.Services;

public class SensorDataService : ISensorDataService
{
    private readonly StarOfLifeContext _context;

    public SensorDataService(StarOfLifeContext context)
    {
        _context = context;
    }

    public async Task<Dictionary<SensorType, double>> GetAverageSensorDataAsync()
    {
        var averageData = new Dictionary<SensorType, double>();
        
        var medicalDatas = await _context.MedicalDatas
            .Include(md => md.Sensor)
            .ToListAsync();
        
        foreach (SensorType sensorType in Enum.GetValues(typeof(SensorType)))
        {
            averageData[sensorType] = 0;
        }
        var count = new Dictionary<SensorType, int>();
        foreach (var medicalData in medicalDatas)
        {
            var sensorType = medicalData.Sensor.SensorType;
            averageData[sensorType] += medicalData.SensorData;
            count[sensorType] = count.TryGetValue(sensorType, out var existingCount) ? existingCount + 1 : 1;
        }

        foreach (var sensorType in averageData.Keys.ToList())
        {
            averageData[sensorType] /= count[sensorType];
        }

        return averageData;
    }
}