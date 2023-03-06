package com.medkin.bib.entity;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import java.io.Serializable;
import java.time.LocalDate;

@Data
@AllArgsConstructor @NoArgsConstructor
@Entity
public class Emprunt implements Serializable {

    @Id
    Integer id;
    @Column
    LocalDate dateEmprunt;
    @Column
    LocalDate dateRetourPrevue;
    @Column
    LocalDate dateRetourEffective;
    @Column
    Double amende;
    @Column
    Integer cptProlongation;

}
