package com.medkin.bib.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.medkin.bib.entity.Email;

@Repository
public interface EmailDao extends JpaRepository<Email,String> {
}
