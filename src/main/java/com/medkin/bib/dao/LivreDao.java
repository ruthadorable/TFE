package com.medkin.bib.dao;

import com.medkin.bib.entity.Livre;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LivreDao extends JpaRepository<Livre,Long> {
}
