package com.medkin.bib.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;

@Data @AllArgsConstructor @NoArgsConstructor
@Entity
public class Editeur implements Serializable {
    @Id
    String nomEditeur;

    @Column
    String Adresse;


}
