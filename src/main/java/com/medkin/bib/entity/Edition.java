package com.medkin.bib.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.Set;

@Data @AllArgsConstructor @NoArgsConstructor
@Entity
public class Edition implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)//strategy for generating auto generated number
    @Column(name= "EDITION_ID", nullable = false)
    Integer id;
    @Column
    String nom;
    @Column
    Integer isbn;
    @Column
    String langue;
    @Column
    LocalDate dateParution;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(name = "EDITION_EDITEUR",
            joinColumns = {
                    @JoinColumn(name = "EDITION_ID")
            },
            inverseJoinColumns = {
                    @JoinColumn(name = "EDITEURID")
            }
    )
    private Editeur editeur;
    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(name = "EDITION_EXEMPLAIRE",
            joinColumns = {
                    @JoinColumn(name = "EDITION_ID")
            },
            inverseJoinColumns = {
                    @JoinColumn(name = "EXEMPLAIRE_ID")
            }
    )
    private Set<Exemplaire> exemplaires;
}
