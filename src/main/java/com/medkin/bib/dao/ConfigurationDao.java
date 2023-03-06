package com.medkin.bib.dao;

import com.medkin.bib.entity.Configuration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ConfigurationDao extends JpaRepository<Configuration,String> {

}
