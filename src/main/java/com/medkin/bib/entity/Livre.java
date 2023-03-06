package com.medkin.bib.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Data
@AllArgsConstructor @NoArgsConstructor
@Entity
public class Livre implements Serializable {

    @Id  //primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY)//strategy for generating auto generated number
    @Column(name= "LIVRE_ID", nullable = false)
    Long id;
    @Column
    String titre;
    @Column
    String resume;
    @ManyToMany(fetch=FetchType.LAZY,cascade=CascadeType.ALL)
    @JoinTable(name="LIVRE_IMAGE",
            joinColumns = {
                    @JoinColumn(name = "LIVRE_ID")
            },
            inverseJoinColumns = {
                    @JoinColumn(name = "IMAGE_ID")
            }
    )
    private Set<ImageModel> livreImages;

    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(name = "LIVRE_EDITION",
            joinColumns = {
                    @JoinColumn(name = "LIVRE_ID")
            },
            inverseJoinColumns = {
                    @JoinColumn(name = "EDITION_ID")
            }
    )
    private List<Edition> edition=new ArrayList<>();

    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinTable(name = "LIVRE_AUTEUR",
            joinColumns = {
                    @JoinColumn(name = "LIVRE_ID")
            },
            inverseJoinColumns = {
                    @JoinColumn(name = "AUTEUR_ID")
            }
    )
    private List<Auteur> auteurs=new ArrayList<>();

    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinTable(name = "LIVRE_MOTCLE",
            joinColumns = {
                    @JoinColumn(name = "LIVRE_ID")
            },
            inverseJoinColumns = {
                    @JoinColumn(name = "MOTCLE_ID")
            }
    )
    private MotCle motCle;

    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinTable(name = "LIVRE_PRIXLITTERAIRE",
            joinColumns = {
                    @JoinColumn(name = "LIVRE_ID")
            },
            inverseJoinColumns = {
                    @JoinColumn(name = "PRIXLITTERAIRE_ID")
            }
    )
    private List<PrixLitteraire> prixLitteraires=new ArrayList<>();


}
