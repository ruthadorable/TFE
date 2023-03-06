package com.medkin.bib.dao;

import com.medkin.bib.entity.Inscription;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InscriptionDao extends JpaRepository<Inscription,Integer> {
}
