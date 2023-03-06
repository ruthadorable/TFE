package com.medkin.bib.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;

@Data @AllArgsConstructor @NoArgsConstructor
@Entity
public class Exemplaire implements Serializable {
    @Id
    Integer numeroReference;

    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(name = "EXEMPLAIRE_ETAT",
            joinColumns = {
                    @JoinColumn(name = "EXEMPLAIRE_ID")
            },
            inverseJoinColumns = {
                    @JoinColumn(name = "ETAT_ID")
            }
    )
    private Etat etat;
}
