package com.medkin.bib.entity;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.io.Serializable;

@Data @AllArgsConstructor @NoArgsConstructor
@Entity
public class Etat implements Serializable {

    @Id
    String value;
}
