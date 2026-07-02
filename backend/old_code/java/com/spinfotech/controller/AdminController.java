package com.spinfotech.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.spinfotech.model.SiteSettings;
import com.spinfotech.repository.SiteSettingsRepository;

@Controller
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    private SiteSettingsRepository siteSettingsRepository;

    @GetMapping
    public String dashboard(Model model) {
        model.addAttribute("title", "Admin Dashboard | SP Infotech");
        return "admin/dashboard";
    }

    @GetMapping("/settings")
    public String settings(Model model) {
        SiteSettings settings = siteSettingsRepository.findById(1L).orElse(new SiteSettings());
        model.addAttribute("title", "Site Settings | Admin");
        model.addAttribute("settings", settings);
        return "admin/settings";
    }

    @PostMapping("/settings")
    public String saveSettings(@ModelAttribute SiteSettings settings, RedirectAttributes redirectAttributes) {
        settings.setId(1L); // Force ID to 1
        siteSettingsRepository.save(settings);
        redirectAttributes.addFlashAttribute("successMessage", "Settings updated successfully!");
        return "redirect:/admin/settings";
    }

    @Autowired
    private com.spinfotech.repository.AdminUserRepository adminUserRepository;
    
    @Autowired
    private org.springframework.security.crypto.password.PasswordEncoder passwordEncoder;

    @GetMapping("/credentials")
    public String credentials(Model model) {
        model.addAttribute("title", "Change Credentials | Admin");
        return "admin/credentials";
    }

    @PostMapping("/credentials")
    public String saveCredentials(
            @org.springframework.web.bind.annotation.RequestParam String username,
            @org.springframework.web.bind.annotation.RequestParam String currentPassword,
            @org.springframework.web.bind.annotation.RequestParam String newPassword,
            RedirectAttributes redirectAttributes,
            java.security.Principal principal) {
        
        String loggedInUser = principal.getName();
        com.spinfotech.model.AdminUser admin = adminUserRepository.findByUsername(loggedInUser).orElse(null);
        
        if (admin != null) {
            if (passwordEncoder.matches(currentPassword, admin.getPassword())) {
                admin.setUsername(username);
                admin.setPassword(passwordEncoder.encode(newPassword));
                adminUserRepository.save(admin);
                redirectAttributes.addFlashAttribute("successMessage", "Credentials updated successfully! Please login with new credentials next time.");
            } else {
                redirectAttributes.addFlashAttribute("errorMessage", "Current password is incorrect.");
            }
        }
        return "redirect:/admin/credentials";
    }
}
