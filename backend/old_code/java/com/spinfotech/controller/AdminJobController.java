package com.spinfotech.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.spinfotech.model.JobPost;
import com.spinfotech.repository.JobPostRepository;

@Controller
@RequestMapping("/admin/jobs")
public class AdminJobController {

    @Autowired
    private JobPostRepository jobPostRepository;

    @GetMapping
    public String listJobs(Model model) {
        model.addAttribute("jobs", jobPostRepository.findAll());
        model.addAttribute("title", "Manage Jobs | Admin");
        return "admin/jobs/list";
    }

    @GetMapping("/new")
    public String newJobForm(Model model) {
        model.addAttribute("job", new JobPost());
        model.addAttribute("title", "Add New Job | Admin");
        return "admin/jobs/form";
    }

    @GetMapping("/edit/{id}")
    public String editJobForm(@PathVariable Long id, Model model) {
        JobPost job = jobPostRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Invalid job Id:" + id));
        model.addAttribute("job", job);
        model.addAttribute("title", "Edit Job | Admin");
        return "admin/jobs/form";
    }

    @PostMapping("/save")
    public String saveJob(@ModelAttribute JobPost job, RedirectAttributes redirectAttributes) {
        if (job.getId() == null) {
            job.setPostedDate(java.time.LocalDate.now());
        }
        jobPostRepository.save(job);
        redirectAttributes.addFlashAttribute("successMessage", "Job saved successfully!");
        return "redirect:/admin/jobs";
    }

    @GetMapping("/delete/{id}")
    public String deleteJob(@PathVariable Long id, RedirectAttributes redirectAttributes) {
        JobPost job = jobPostRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Invalid job Id:" + id));
        jobPostRepository.delete(job);
        redirectAttributes.addFlashAttribute("successMessage", "Job deleted successfully!");
        return "redirect:/admin/jobs";
    }
}
