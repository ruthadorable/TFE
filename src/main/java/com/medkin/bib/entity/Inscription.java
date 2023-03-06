package com.medkin.bib.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.io.Serializable;
import java.time.LocalDate;

@Data @AllArgsConstructor @NoArgsConstructor
@Entity
public class Inscription implements Serializable {

    @Id
    Integer id;
    @Column
    LocalDate dateInscription;
    @Column
    LocalDate dateFinInscription;
    @Column
    boolean reduction;

}
