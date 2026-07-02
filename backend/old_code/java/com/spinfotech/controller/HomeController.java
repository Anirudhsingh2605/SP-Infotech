package com.spinfotech.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.ui.Model;
import com.spinfotech.service.EmailService;
import com.spinfotech.repository.JobPostRepository;
import com.spinfotech.repository.EnquiryRepository;
import com.spinfotech.model.Enquiry;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.UUID;

@Controller
public class HomeController {

    @Autowired
    private EmailService emailService;
    
    @Autowired
    private JobPostRepository jobPostRepository;
    
    @Autowired
    private EnquiryRepository enquiryRepository;
    
    private final String UPLOAD_DIR = "./uploads/resumes/";

    @GetMapping("/")
    public String index(Model model) {
        model.addAttribute("title", "Home | SP Infotech");
        return "index";
    }

    @GetMapping("/about")
    public String about(Model model) {
        model.addAttribute("title", "About Us | SP Infotech");
        return "about";
    }

    @GetMapping("/login")
    public String login(Model model) {
        model.addAttribute("title", "Admin Login | SP Infotech");
        return "login";
    }

    @GetMapping("/services")
    public String services(Model model) {
        model.addAttribute("title", "Our Services | SP Infotech");
        return "services";
    }

    @GetMapping("/portfolio")
    public String portfolio(Model model) {
        model.addAttribute("title", "Portfolio | SP Infotech");
        return "portfolio";
    }

    @GetMapping("/pricing")
    public String pricing(Model model) {
        model.addAttribute("title", "Pricing | SP Infotech");
        return "pricing";
    }

    @GetMapping("/blog")
    public String blog(Model model) {
        model.addAttribute("title", "Blog | SP Infotech");
        return "blog";
    }

    @GetMapping("/careers")
    public String careers(Model model) {
        model.addAttribute("title", "Careers | SP Infotech");
        model.addAttribute("jobs", jobPostRepository.findByIsActiveTrueOrderByPostedDateDesc());
        return "careers";
    }

    @GetMapping("/contact")
    public String contact(Model model) {
        model.addAttribute("title", "Contact Us | SP Infotech");
        return "contact";
    }

    @GetMapping("/enquiry")
    public String enquiry(@RequestParam(value = "position", required = false) String position, Model model) {
        model.addAttribute("title", "Job Enquiry | SP Infotech");
        model.addAttribute("position", position);
        return "enquiry";
    }

    @PostMapping("/enquiry")
    public String submitEnquiry(
            @RequestParam String name,
            @RequestParam String email,
            @RequestParam String phone,
            @RequestParam String position,
            @RequestParam String message,
            @RequestParam(value = "resumeFile", required = false) MultipartFile resumeFile,
            RedirectAttributes redirectAttributes) {
        
        Enquiry enquiry = new Enquiry();
        enquiry.setName(name);
        enquiry.setEmail(email);
        enquiry.setPhone(phone);
        enquiry.setPosition(position);
        enquiry.setMessage(message);
        enquiry.setType("CAREER");

        if (resumeFile != null && !resumeFile.isEmpty()) {
            try {
                Path uploadPath = Paths.get(UPLOAD_DIR);
                if (!Files.exists(uploadPath)) {
                    Files.createDirectories(uploadPath);
                }
                String filename = UUID.randomUUID().toString() + "_" + resumeFile.getOriginalFilename();
                Path filePath = uploadPath.resolve(filename);
                Files.copy(resumeFile.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);
                
                enquiry.setOriginalFileName(resumeFile.getOriginalFilename());
                enquiry.setResumeFilePath(filePath.toString());
            } catch (Exception e) {
                System.err.println("Could not save file: " + e.getMessage());
            }
        }
        
        enquiryRepository.save(enquiry);
        
        try {
            emailService.sendJobApplicationEmail(name, email, phone, position, message, resumeFile);
        } catch (Exception e) {
            System.err.println("Failed to send email: " + e.getMessage());
        }
        
        redirectAttributes.addFlashAttribute("successMessage", "Your application has been submitted successfully!");
        return "redirect:/enquiry";
    }

    @PostMapping("/contact")
    public String submitContact(
            @RequestParam String name,
            @RequestParam String email,
            @RequestParam String phone,
            @RequestParam String subject,
            @RequestParam String message,
            RedirectAttributes redirectAttributes) {
            
        Enquiry enquiry = new Enquiry();
        enquiry.setName(name);
        enquiry.setEmail(email);
        enquiry.setPhone(phone);
        enquiry.setPosition(subject); // Store subject in position field
        enquiry.setMessage(message);
        enquiry.setType("CONTACT");
        enquiryRepository.save(enquiry);
        
        try {
            emailService.sendContactEmail(name, email, phone, subject, message);
        } catch (Exception e) {
            System.err.println("Failed to send email: " + e.getMessage());
        }
        
        redirectAttributes.addFlashAttribute("successMessage", "Thank you for reaching out! We will get back to you soon.");
        return "redirect:/contact";
    }

    @PostMapping("/subscribe")
    public String subscribeNewsletter(@RequestParam String email, RedirectAttributes redirectAttributes) {
        // Mock processing newsletter subscription
        System.out.println("Newsletter subscription: " + email);
        
        redirectAttributes.addFlashAttribute("newsletterSuccess", "Successfully subscribed to our newsletter!");
        return "redirect:/"; // Redirects to home for now, could be improved with JS/AJAX
    }
}
