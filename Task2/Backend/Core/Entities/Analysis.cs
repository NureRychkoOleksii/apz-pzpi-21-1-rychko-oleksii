﻿namespace Backend.Core.Entities;

public class Analysis : BaseEntity
{
    public int PatientId { get; set; }
    public DateTime Time { get; set; }
    public string DoctorResult { get; set; }
    
    public Newborn Newborn { get; set; }
}