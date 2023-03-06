package com.medkin.bib.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import net.bytebuddy.implementation.bind.annotation.IgnoreForBinding;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.io.Serializable;

@Data @AllArgsConstructor @NoArgsConstructor
@Entity
public class MotCle implements Serializable {
    @Id
    String tagName;
}
