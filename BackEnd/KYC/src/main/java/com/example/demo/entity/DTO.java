package com.example.demo.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class DTO {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer kycId; // Changed variable name to follow Java naming conventions
    private Integer userId; // Changed variable name to follow Java naming conventions
    private String userName; // Changed variable name to follow Java naming conventions
    private String email;
    private String extension;
    private String currentAddress; // Changed variable name to follow Java naming conventions
    private String documentType; // Changed variable name to follow Java naming conventions

    @Column(name = "path")
    private String path; // Changed type to String for path

}