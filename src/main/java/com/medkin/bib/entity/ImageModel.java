package com.medkin.bib.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Data @AllArgsConstructor @NoArgsConstructor
@Entity
public class ImageModel implements Serializable {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;
    @Column
    private String name;
    @Column
    private String type;
    @Lob
    @Column(columnDefinition = "LONGBLOB")
    private byte[] picByte;


}
