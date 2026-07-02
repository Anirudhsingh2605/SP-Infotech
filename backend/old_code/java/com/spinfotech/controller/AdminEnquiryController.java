package com.spinfotech.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;

import com.spinfotech.model.Enquiry;
import com.spinfotech.repository.EnquiryRepository;
import java.nio.file.Path;
import java.nio.file.Paths;

@Controller
@RequestMapping("/admin/enquiries")
public class AdminEnquiryController {

    @Autowired
    private EnquiryRepository enquiryRepository;

    @GetMapping
    public String listEnquiries(Model model) {
        model.addAttribute("enquiries", enquiryRepository.findAllByOrderBySubmittedAtDesc());
        model.addAttribute("title", "View Enquiries | Admin");
        return "admin/enquiries/list";
    }

    @GetMapping("/download/{id}")
    public ResponseEntity<Resource> downloadResume(@PathVariable Long id) {
        try {
            Enquiry enquiry = enquiryRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Invalid enquiry ID"));
            
            if (enquiry.getResumeFilePath() == null) {
                return ResponseEntity.notFound().build();
            }

            Path path = Paths.get(enquiry.getResumeFilePath());
            Resource resource = new UrlResource(path.toUri());

            if (resource.exists() || resource.isReadable()) {
                return ResponseEntity.ok()
                        .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + enquiry.getOriginalFileName() + "\"")
                        .body(resource);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }
}
