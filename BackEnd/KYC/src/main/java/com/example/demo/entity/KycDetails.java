package com.example.demo.entity;

import java.util.Arrays;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
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
public class KycDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer kycId; // Changed variable name to follow Java naming conventions
    private String currentAddress; // Changed variable name to follow Java naming conventions
    private String documentType; // Changed variable name to follow Java naming conventions
    @Lob
    @Column(name = "path", columnDefinition = "bytea")
    private byte[] path;
    private Integer userId; // Changed variable name to follow Java naming conventions
    private String extension; // Changed variable name to follow Java naming conventions

    @Override
    public String toString() {
        return "KycDetails [kycId=" + kycId + ", currentAddress=" + currentAddress + ", documentType="
                + documentType + ", path=" + Arrays.toString(path) + ", userId=" + userId + ", extension="
                + extension + "]";
    }

}