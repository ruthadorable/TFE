package com.medkin.bib.dao;


import com.medkin.bib.entity.Categorie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategorieDao  extends JpaRepository<Categorie,String> {

}
