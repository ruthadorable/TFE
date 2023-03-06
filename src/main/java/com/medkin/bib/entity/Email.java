package com.medkin.bib.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import java.io.Serializable;
import java.time.LocalDate;

@Entity
@Data @AllArgsConstructor @NoArgsConstructor
public class Email implements Serializable {
    @Id
    String sujet;
    @Column
    String contenu;
    @OneToOne
    User expediteur;
    @OneToOne
    User owner;
    @Column
    LocalDate date;
}
