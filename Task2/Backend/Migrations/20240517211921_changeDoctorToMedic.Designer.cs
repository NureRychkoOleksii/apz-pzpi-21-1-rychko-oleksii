﻿// <auto-generated />
using System;
using Backend.Core;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace Backend.Migrations
{
    [DbContext(typeof(StarOfLifeContext))]
    [Migration("20240517211921_changeDoctorToMedic")]
    partial class changeDoctorToMedic
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.5")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("Backend.Core.Entities.Alert", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("AlertMessage")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("AlertType")
                        .HasColumnType("integer");

                    b.Property<int>("SensorId")
                        .HasColumnType("integer");

                    b.Property<DateTime>("TimeAlerted")
                        .HasColumnType("timestamp without time zone");

                    b.HasKey("Id");

                    b.HasIndex("SensorId");

                    b.ToTable("Alerts");
                });

            modelBuilder.Entity("Backend.Core.Entities.Analysis", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("DoctorResult")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("NewbornId")
                        .HasColumnType("integer");

                    b.Property<int>("PatientId")
                        .HasColumnType("integer");

                    b.Property<DateTime>("Time")
                        .HasColumnType("timestamp without time zone");

                    b.HasKey("Id");

                    b.HasIndex("NewbornId");

                    b.ToTable("Analyses");
                });

            modelBuilder.Entity("Backend.Core.Entities.MedicalData", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<int>("SensorData")
                        .HasColumnType("integer");

                    b.Property<int>("SensorId")
                        .HasColumnType("integer");

                    b.Property<DateTime>("TimeSaved")
                        .HasColumnType("timestamp without time zone");

                    b.HasKey("Id");

                    b.HasIndex("SensorId");

                    b.ToTable("MedicalDatas");
                });

            modelBuilder.Entity("Backend.Core.Entities.Newborn", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<DateTime>("DateOfBirth")
                        .HasColumnType("timestamp without time zone");

                    b.Property<int>("Gender")
                        .HasColumnType("integer");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("UserId")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("Newborns");
                });

            modelBuilder.Entity("Backend.Core.Entities.Parent", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("ContractInfo")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("UserId")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("Parents");
                });

            modelBuilder.Entity("Backend.Core.Entities.Sensor", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<int>("NewbornId")
                        .HasColumnType("integer");

                    b.Property<int>("SensorConfigurationId")
                        .HasColumnType("integer");

                    b.Property<int>("SensorSettingsId")
                        .HasColumnType("integer");

                    b.Property<int>("SensorType")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("NewbornId");

                    b.HasIndex("SensorSettingsId");

                    b.ToTable("Sensors");
                });

            modelBuilder.Entity("Backend.Core.Entities.SensorSettings", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<int>("HighCriticalThreshold")
                        .HasColumnType("integer");

                    b.Property<int>("HighEdgeThreshold")
                        .HasColumnType("integer");

                    b.Property<bool>("IsActive")
                        .HasColumnType("boolean");

                    b.Property<int>("LowCriticalThreshold")
                        .HasColumnType("integer");

                    b.Property<int>("LowEdgeThreshold")
                        .HasColumnType("integer");

                    b.Property<int>("SamplingFrequency")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.ToTable("SensorSettings");
                });

            modelBuilder.Entity("Backend.Core.Entities.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("Role")
                        .HasColumnType("integer");

                    b.Property<string>("Salt")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Username")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("Email")
                        .IsUnique();

                    b.HasIndex("Username")
                        .IsUnique();

                    b.ToTable("Users");
                });

            modelBuilder.Entity("Backend.Core.Entities.UserParent", b =>
                {
                    b.Property<int>("ParentId")
                        .HasColumnType("integer");

                    b.Property<int>("NewbornId")
                        .HasColumnType("integer");

                    b.HasKey("ParentId", "NewbornId");

                    b.HasIndex("NewbornId");

                    b.ToTable("UserParents");
                });

            modelBuilder.Entity("Backend.Core.Entities.Alert", b =>
                {
                    b.HasOne("Backend.Core.Entities.Sensor", "Sensor")
                        .WithMany()
                        .HasForeignKey("SensorId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Sensor");
                });

            modelBuilder.Entity("Backend.Core.Entities.Analysis", b =>
                {
                    b.HasOne("Backend.Core.Entities.Newborn", "Newborn")
                        .WithMany()
                        .HasForeignKey("NewbornId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Newborn");
                });

            modelBuilder.Entity("Backend.Core.Entities.MedicalData", b =>
                {
                    b.HasOne("Backend.Core.Entities.Sensor", "Sensor")
                        .WithMany()
                        .HasForeignKey("SensorId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Sensor");
                });

            modelBuilder.Entity("Backend.Core.Entities.Newborn", b =>
                {
                    b.HasOne("Backend.Core.Entities.User", "User")
                        .WithMany("Patients")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("User");
                });

            modelBuilder.Entity("Backend.Core.Entities.Parent", b =>
                {
                    b.HasOne("Backend.Core.Entities.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("User");
                });

            modelBuilder.Entity("Backend.Core.Entities.Sensor", b =>
                {
                    b.HasOne("Backend.Core.Entities.Newborn", "Newborn")
                        .WithMany()
                        .HasForeignKey("NewbornId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Backend.Core.Entities.SensorSettings", "SensorSettings")
                        .WithMany()
                        .HasForeignKey("SensorSettingsId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Newborn");

                    b.Navigation("SensorSettings");
                });

            modelBuilder.Entity("Backend.Core.Entities.UserParent", b =>
                {
                    b.HasOne("Backend.Core.Entities.Newborn", "Newborn")
                        .WithMany("UserParents")
                        .HasForeignKey("NewbornId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Backend.Core.Entities.Parent", "Parent")
                        .WithMany("UserParents")
                        .HasForeignKey("ParentId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Newborn");

                    b.Navigation("Parent");
                });

            modelBuilder.Entity("Backend.Core.Entities.Newborn", b =>
                {
                    b.Navigation("UserParents");
                });

            modelBuilder.Entity("Backend.Core.Entities.Parent", b =>
                {
                    b.Navigation("UserParents");
                });

            modelBuilder.Entity("Backend.Core.Entities.User", b =>
                {
                    b.Navigation("Patients");
                });
#pragma warning restore 612, 618
        }
    }
}
