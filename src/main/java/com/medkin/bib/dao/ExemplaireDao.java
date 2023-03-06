package com.medkin.bib.dao;

import com.medkin.bib.entity.Exemplaire;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ExemplaireDao extends JpaRepository<Exemplaire,Integer> {
}
