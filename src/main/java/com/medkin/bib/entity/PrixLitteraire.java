package com.medkin.bib.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.io.Serializable;
import java.time.LocalDate;

@Data
@AllArgsConstructor @NoArgsConstructor
@Entity
public class PrixLitteraire implements Serializable {

    @Id
    String nom;
    @Column
    LocalDate annee;
}
