package com.spinfotech.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.spinfotech.model.SiteSettings;

@Repository
public interface SiteSettingsRepository extends JpaRepository<SiteSettings, Long> {
}
