package com.medkin.bib.dao;

import com.medkin.bib.entity.MotCle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MotCleDao extends JpaRepository<MotCle,String> {
}
