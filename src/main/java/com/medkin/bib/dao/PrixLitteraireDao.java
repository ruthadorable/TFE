package com.medkin.bib.dao;

import com.medkin.bib.entity.PrixLitteraire;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PrixLitteraireDao extends JpaRepository<PrixLitteraire,String> {
}
