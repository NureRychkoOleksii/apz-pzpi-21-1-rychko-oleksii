﻿namespace Backend.Core.DTOs.Analysis;

public class CreateAnalysisDTO
{
    public int NewbornId { get; set; }
    public DateTime Time { get; set; }
    public string DoctorResult { get; set; }
}