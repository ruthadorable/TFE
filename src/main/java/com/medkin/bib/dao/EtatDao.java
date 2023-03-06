package com.medkin.bib.dao;

import com.medkin.bib.entity.Etat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EtatDao extends JpaRepository<Etat,String> {
}
