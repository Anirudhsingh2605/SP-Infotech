import React from 'react';
export default function Footer() {
    return <div dangerouslySetInnerHTML={{ __html: `<footer th:fragment="footer" class="footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                    <a href="/" class="footer-logo d-block mb-3">
                        SP <span>Infotech</span>
                    </a>
                    <p class="mb-4 text-muted">Empowering your digital journey with premium software development, Shopify solutions, QA testing, and UI/UX design.</p>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
                
                <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
                    <h5>Company</h5>
                    <ul class="footer-links">
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/careers">Careers</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                
                <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
                    <h5>Services</h5>
                    <ul class="footer-links">
                        <li><a href="/services#shopify">Shopify Development</a></li>
                        <li><a href="/services#webdev">Custom Web Dev</a></li>
                        <li><a href="/services#qa">QA & Automation</a></li>
                        <li><a href="/services#digital">SEO & Marketing</a></li>
                    </ul>
                </div>
                
                <div class="col-lg-3 col-md-6">
                    <h5>Newsletter</h5>
                    <p class="text-muted mb-3">Subscribe to our newsletter for latest updates.</p>
                    <form th:action="@{/subscribe}" method="post" class="d-flex">
                        <input type="email" name="email" class="form-control me-2 rounded-pill" placeholder="Email Address" required>
                        <button type="submit" class="btn btn-primary rounded-circle px-3"><i class="fas fa-paper-plane"></i></button>
                    </form>
                </div>
            </div>
            
            <div class="footer-bottom mt-5">
                <div class="row align-items-center">
                    <div class="col-md-6 text-md-start mb-3 mb-md-0">
                        &copy; <span th:text="\${#dates.format(#dates.createNow(), 'yyyy')}"></span> SP Infotech. All Rights Reserved.
                    </div>
                    <div class="col-md-6 text-md-end">
                        <a href="/privacy-policy" class="text-muted me-3 text-decoration-none hover-primary">Privacy Policy</a>
                        <a href="/terms-conditions" class="text-muted me-3 text-decoration-none hover-primary">Terms & Conditions</a>
                        <a href="/refund-policy" class="text-muted me-3 text-decoration-none hover-primary">Refund Policy</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- WhatsApp Floating Button -->
        <a href="https://wa.me/917898091357" class="whatsapp-float" target="_blank" aria-label="Chat on WhatsApp">
            <i class="fab fa-whatsapp"></i>
        </a>

        <!-- Back to Top -->
        <div id="back-to-top" class="back-to-top">
            <i class="fas fa-chevron-up"></i>
        </div>
    </footer>` }} />;
}
