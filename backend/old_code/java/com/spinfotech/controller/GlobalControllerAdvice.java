package com.spinfotech.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ModelAttribute;

import com.spinfotech.model.SiteSettings;
import com.spinfotech.repository.SiteSettingsRepository;

@ControllerAdvice
public class GlobalControllerAdvice {

    @Autowired
    private SiteSettingsRepository siteSettingsRepository;

    @ModelAttribute("siteSettings")
    public SiteSettings globalSettings() {
        return siteSettingsRepository.findById(1L).orElse(new SiteSettings());
    }
}
