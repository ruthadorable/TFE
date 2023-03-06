package com.medkin.bib.dao;

import com.medkin.bib.entity.Emprunt;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmpruntDao extends JpaRepository<Emprunt,String> {
}
