package com.spinfotech.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PolicyController {

    @GetMapping("/privacy-policy")
    public String privacyPolicy(Model model) {
        model.addAttribute("title", "Privacy Policy | SP Infotech");
        return "privacy";
    }

    @GetMapping("/terms-conditions")
    public String termsConditions(Model model) {
        model.addAttribute("title", "Terms & Conditions | SP Infotech");
        return "terms";
    }

    @GetMapping("/refund-policy")
    public String refundPolicy(Model model) {
        model.addAttribute("title", "Refund Policy | SP Infotech");
        return "refund";
    }

    @GetMapping("/cookie-policy")
    public String cookiePolicy(Model model) {
        model.addAttribute("title", "Cookie Policy | SP Infotech");
        return "cookie";
    }
}
