package com.spinfotech.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    @Value("${spring.mail.username}")
    private String toEmail; // Emails will be sent to this configured email

    public void sendContactEmail(String name, String email, String phone, String subject, String messageText) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(toEmail);
        message.setSubject("New Contact Us Inquiry: " + subject);
        
        String body = "You have received a new inquiry from the Contact Us page.\n\n"
                    + "Name: " + name + "\n"
                    + "Email: " + email + "\n"
                    + "Phone: " + phone + "\n"
                    + "Subject: " + subject + "\n\n"
                    + "Message:\n" + messageText;
        
        message.setText(body);
        message.setReplyTo(email);
        
        mailSender.send(message);
    }

    public void sendJobApplicationEmail(String name, String email, String phone, String position, String messageText, MultipartFile resumeFile) throws MessagingException {
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true); // true indicates multipart

        helper.setTo(toEmail);
        helper.setSubject("New Job Application: " + position + " - " + name);
        
        String body = "You have received a new job application.\n\n"
                    + "Applicant Details:\n"
                    + "Name: " + name + "\n"
                    + "Email: " + email + "\n"
                    + "Phone: " + phone + "\n"
                    + "Applying For: " + position + "\n\n"
                    + "Cover Letter/Message:\n" + messageText + "\n\n"
                    + "Please find the resume attached.";
        
        helper.setText(body);
        helper.setReplyTo(email);
        
        if (resumeFile != null && !resumeFile.isEmpty()) {
            helper.addAttachment(resumeFile.getOriginalFilename(), resumeFile);
        }

        mailSender.send(message);
    }
}
