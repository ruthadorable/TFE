package com.medkin.bib.entity;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;


@Data
@AllArgsConstructor @NoArgsConstructor
@Entity
public class Categorie implements Serializable {
    @Id
    String nomCategorie;
    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(name = "CATEGORIE_LIVRE",
            joinColumns = {
                    @JoinColumn(name = "CATEGORIE_ID")
            },
            inverseJoinColumns = {
                    @JoinColumn(name = "LIVRE_ID")
            }
    )
    private Set<Livre> livres;
}
