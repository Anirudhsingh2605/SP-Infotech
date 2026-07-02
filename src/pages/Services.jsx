import React, { useEffect } from 'react';

export default function Services() {
    useEffect(() => {
        if (window.AOS) window.AOS.init();
        window.scrollTo(0, 0); // Scroll to top on page load
    }, []);

    return (
        <div dangerouslySetInnerHTML={{ __html: `
    
    <div ></div>

    <!-- Page Header -->
    <section class="page-header">
        <div class="container" >
            <h1 class="page-title fw-bold">Our Services</h1>

        </div>
    </section>

    <!-- Modern Premium Services Section -->
    <section class="services-modern position-relative overflow-hidden py-5">
        <!-- Background Elements -->
        <div class="blob blob-1" style="top: -10%; right: -5%; opacity: 0.15; width: 500px; height: 500px;"></div>
        <div class="blob blob-2" style="bottom: -10%; left: -5%; opacity: 0.15; width: 600px; height: 600px;"></div>

        <div class="container position-relative z-1">
            <div class="text-center mb-5" >
                <div class="hero-badge mb-3 d-inline-flex align-items-center px-3 py-1 rounded-pill glass-card-modern fs-7 text-uppercase fw-bold letter-spacing-1">
                    🚀 OUR SERVICES
                </div>
                <h2 class="fw-bolder mb-3" style="font-size: 2.5rem;">
                    Complete Digital Solutions for Your <br>
                    <span class="text-gradient">Business Growth</span>
                </h2>
                <p class="mb-5 max-w-700 mx-auto" style="font-size: 1.1rem; color: rgba(255, 255, 255, 0.75);">
                    We provide end-to-end digital services that help businesses build a strong online presence, attract more customers, increase sales, and accelerate long-term growth.
                </p>
            </div>
            
            <div class="row g-4">
                <!-- Service 1 -->
                <div class="col-lg-3 col-md-6"  >
                    <div class="glass-card-modern rounded-4 p-4 h-100 service-card-hover transition-all text-start position-relative overflow-hidden">
                        <div class="bg-primary bg-opacity-25 text-primary rounded-circle d-flex align-items-center justify-content-center mb-4" style="width: 60px; height: 60px;">
                            <i class="fas fa-laptop-code fs-4"></i>
                        </div>
                        <h5 class="fw-bold mb-3">Website Development</h5>
                        <p class="fs-7 opacity-75 mb-4" style="min-height: 70px;">Professional, responsive, fast, SEO-friendly business websites, landing pages, and eCommerce websites designed to convert.</p>
                        <a href="https://wa.me/917898091357" class="text-gradient fw-bold text-decoration-none d-inline-flex align-items-center learn-more-link">
                            Inquire Now <i class="fas fa-arrow-right ms-2 transition-all"></i>
                        </a>
                    </div>
                </div>

                <!-- Service 2 -->
                <div class="col-lg-3 col-md-6"  >
                    <div class="glass-card-modern rounded-4 p-4 h-100 service-card-hover transition-all text-start position-relative overflow-hidden">
                        <div class="bg-info bg-opacity-25 text-info rounded-circle d-flex align-items-center justify-content-center mb-4" style="width: 60px; height: 60px;">
                            <i class="fas fa-mobile-alt fs-4"></i>
                        </div>
                        <h5 class="fw-bold mb-3">Mobile App Development</h5>
                        <p class="fs-7 opacity-75 mb-4" style="min-height: 70px;">Custom Android, iOS, and cross-platform mobile applications with modern UI and secure architecture.</p>
                        <a href="https://wa.me/917898091357" class="text-gradient fw-bold text-decoration-none d-inline-flex align-items-center learn-more-link">
                            Inquire Now <i class="fas fa-arrow-right ms-2 transition-all"></i>
                        </a>
                    </div>
                </div>

                <!-- Service 3 -->
                <div class="col-lg-3 col-md-6"  >
                    <div class="glass-card-modern rounded-4 p-4 h-100 service-card-hover transition-all text-start position-relative overflow-hidden">
                        <div class="bg-success bg-opacity-25 text-success rounded-circle d-flex align-items-center justify-content-center mb-4" style="width: 60px; height: 60px;">
                            <i class="fas fa-search-dollar fs-4"></i>
                        </div>
                        <h5 class="fw-bold mb-3">Search Engine Optimization</h5>
                        <p class="fs-7 opacity-75 mb-4" style="min-height: 70px;">Increase your Google rankings, improve organic traffic, and generate quality leads using advanced SEO strategies.</p>
                        <a href="https://wa.me/917898091357" class="text-gradient fw-bold text-decoration-none d-inline-flex align-items-center learn-more-link">
                            Inquire Now <i class="fas fa-arrow-right ms-2 transition-all"></i>
                        </a>
                    </div>
                </div>

                <!-- Service 4 -->
                <div class="col-lg-3 col-md-6"  >
                    <div class="glass-card-modern rounded-4 p-4 h-100 service-card-hover transition-all text-start position-relative overflow-hidden">
                        <div class="bg-warning bg-opacity-25 text-warning rounded-circle d-flex align-items-center justify-content-center mb-4" style="width: 60px; height: 60px;">
                            <i class="fas fa-bullseye fs-4"></i>
                        </div>
                        <h5 class="fw-bold mb-3">Google Ads (PPC)</h5>
                        <p class="fs-7 opacity-75 mb-4" style="min-height: 70px;">Run high-converting Google Ads campaigns that maximize ROI, increase sales, and generate instant leads.</p>
                        <a href="https://wa.me/917898091357" class="text-gradient fw-bold text-decoration-none d-inline-flex align-items-center learn-more-link">
                            Inquire Now <i class="fas fa-arrow-right ms-2 transition-all"></i>
                        </a>
                    </div>
                </div>

                <!-- Service 5 -->
                <div class="col-lg-3 col-md-6"  >
                    <div class="glass-card-modern rounded-4 p-4 h-100 service-card-hover transition-all text-start position-relative overflow-hidden">
                        <div class="bg-danger bg-opacity-25 text-danger rounded-circle d-flex align-items-center justify-content-center mb-4" style="width: 60px; height: 60px;">
                            <i class="fas fa-share-alt fs-4"></i>
                        </div>
                        <h5 class="fw-bold mb-3">Social Media Marketing</h5>
                        <p class="fs-7 opacity-75 mb-4" style="min-height: 70px;">Grow your brand on Facebook, Instagram, LinkedIn with engaging content and effective campaigns.</p>
                        <a href="https://wa.me/917898091357" class="text-gradient fw-bold text-decoration-none d-inline-flex align-items-center learn-more-link">
                            Inquire Now <i class="fas fa-arrow-right ms-2 transition-all"></i>
                        </a>
                    </div>
                </div>

                <!-- Service 6 -->
                <div class="col-lg-3 col-md-6"  >
                    <div class="glass-card-modern rounded-4 p-4 h-100 service-card-hover transition-all text-start position-relative overflow-hidden">
                        <div class="bg-primary bg-opacity-25 text-primary rounded-circle d-flex align-items-center justify-content-center mb-4" style="width: 60px; height: 60px;">
                            <i class="fab fa-meta fs-4"></i>
                        </div>
                        <h5 class="fw-bold mb-3">Meta Ads</h5>
                        <p class="fs-7 opacity-75 mb-4" style="min-height: 70px;">Generate leads and sales through highly optimized Facebook and Instagram advertising campaigns.</p>
                        <a href="https://wa.me/917898091357" class="text-gradient fw-bold text-decoration-none d-inline-flex align-items-center learn-more-link">
                            Inquire Now <i class="fas fa-arrow-right ms-2 transition-all"></i>
                        </a>
                    </div>
                </div>

                <!-- Service 7 -->
                <div class="col-lg-3 col-md-6"  >
                    <div class="glass-card-modern rounded-4 p-4 h-100 service-card-hover transition-all text-start position-relative overflow-hidden">
                        <div class="bg-info bg-opacity-25 text-info rounded-circle d-flex align-items-center justify-content-center mb-4" style="width: 60px; height: 60px;">
                            <i class="fas fa-palette fs-4"></i>
                        </div>
                        <h5 class="fw-bold mb-3">Graphic Design</h5>
                        <p class="fs-7 opacity-75 mb-4" style="min-height: 70px;">Professional logos, branding, social media creatives, brochures, banners, and marketing materials.</p>
                        <a href="https://wa.me/917898091357" class="text-gradient fw-bold text-decoration-none d-inline-flex align-items-center learn-more-link">
                            Inquire Now <i class="fas fa-arrow-right ms-2 transition-all"></i>
                        </a>
                    </div>
                </div>

                <!-- Service 8 -->
                <div class="col-lg-3 col-md-6"  >
                    <div class="glass-card-modern rounded-4 p-4 h-100 service-card-hover transition-all text-start position-relative overflow-hidden">
                        <div class="bg-warning bg-opacity-25 text-warning rounded-circle d-flex align-items-center justify-content-center mb-4" style="width: 60px; height: 60px;">
                            <i class="fas fa-video fs-4"></i>
                        </div>
                        <h5 class="fw-bold mb-3">Video Editing</h5>
                        <p class="fs-7 opacity-75 mb-4" style="min-height: 70px;">Create engaging promotional videos, reels, YouTube content, advertisements, and motion graphics.</p>
                        <a href="https://wa.me/917898091357" class="text-gradient fw-bold text-decoration-none d-inline-flex align-items-center learn-more-link">
                            Inquire Now <i class="fas fa-arrow-right ms-2 transition-all"></i>
                        </a>
                    </div>
                </div>

                <!-- Service 9 -->
                <div class="col-lg-3 col-md-6"  >
                    <div class="glass-card-modern rounded-4 p-4 h-100 service-card-hover transition-all text-start position-relative overflow-hidden">
                        <div class="bg-success bg-opacity-25 text-success rounded-circle d-flex align-items-center justify-content-center mb-4" style="width: 60px; height: 60px;">
                            <i class="fas fa-gem fs-4"></i>
                        </div>
                        <h5 class="fw-bold mb-3">Branding & Identity</h5>
                        <p class="fs-7 opacity-75 mb-4" style="min-height: 70px;">Build a memorable brand with professional logo design, identity, color strategy, and visual communication.</p>
                        <a href="https://wa.me/917898091357" class="text-gradient fw-bold text-decoration-none d-inline-flex align-items-center learn-more-link">
                            Inquire Now <i class="fas fa-arrow-right ms-2 transition-all"></i>
                        </a>
                    </div>
                </div>

                <!-- Service 10 -->
                <div class="col-lg-3 col-md-6"  >
                    <div class="glass-card-modern rounded-4 p-4 h-100 service-card-hover transition-all text-start position-relative overflow-hidden">
                        <div class="bg-primary bg-opacity-25 text-primary rounded-circle d-flex align-items-center justify-content-center mb-4" style="width: 60px; height: 60px;">
                            <i class="fas fa-file-alt fs-4"></i>
                        </div>
                        <h5 class="fw-bold mb-3">Content Marketing</h5>
                        <p class="fs-7 opacity-75 mb-4" style="min-height: 70px;">SEO-friendly blogs, website content, product descriptions, ad copy, and engaging marketing content.</p>
                        <a href="https://wa.me/917898091357" class="text-gradient fw-bold text-decoration-none d-inline-flex align-items-center learn-more-link">
                            Inquire Now <i class="fas fa-arrow-right ms-2 transition-all"></i>
                        </a>
                    </div>
                </div>

                <!-- Service 11 -->
                <div class="col-lg-3 col-md-6"  >
                    <div class="glass-card-modern rounded-4 p-4 h-100 service-card-hover transition-all text-start position-relative overflow-hidden">
                        <div class="bg-success bg-opacity-25 text-success rounded-circle d-flex align-items-center justify-content-center mb-4" style="width: 60px; height: 60px;">
                            <i class="fas fa-shopping-cart fs-4"></i>
                        </div>
                        <h5 class="fw-bold mb-3">Shopify & eCommerce</h5>
                        <p class="fs-7 opacity-75 mb-4" style="min-height: 70px;">Launch high-converting online stores with Shopify, WooCommerce, and conversion optimization.</p>
                        <a href="https://wa.me/917898091357" class="text-gradient fw-bold text-decoration-none d-inline-flex align-items-center learn-more-link">
                            Inquire Now <i class="fas fa-arrow-right ms-2 transition-all"></i>
                        </a>
                    </div>
                </div>

                <!-- Service 12 -->
                <div class="col-lg-3 col-md-6"  >
                    <div class="glass-card-modern rounded-4 p-4 h-100 service-card-hover transition-all text-start position-relative overflow-hidden">
                        <div class="bg-info bg-opacity-25 text-info rounded-circle d-flex align-items-center justify-content-center mb-4" style="width: 60px; height: 60px;">
                            <i class="fas fa-chart-pie fs-4"></i>
                        </div>
                        <h5 class="fw-bold mb-3">Marketing Strategy</h5>
                        <p class="fs-7 opacity-75 mb-4" style="min-height: 70px;">Customized marketing strategies based on business goals, competitor research, and analytics.</p>
                        <a href="https://wa.me/917898091357" class="text-gradient fw-bold text-decoration-none d-inline-flex align-items-center learn-more-link">
                            Inquire Now <i class="fas fa-arrow-right ms-2 transition-all"></i>
                        </a>
                    </div>
                </div>
            </div>

            <!-- CTA Below Services -->
            <div class="text-center mt-5 pt-5" >
                <h3 class="fw-bolder mb-3">Ready to Start Your Project?</h3>
                <p class="mb-4 max-w-700 mx-auto" style="color: rgba(255, 255, 255, 0.75);">
                    Get in touch with us to discuss your requirements and get a free proposal.
                </p>
                <div class="d-flex flex-wrap justify-content-center gap-3">
                    <a href="https://wa.me/917898091357" target="_blank" rel="noopener noreferrer" class="btn btn-primary-gradient btn-lg px-4 py-3 rounded-pill fw-bold shadow-lg">
                        Get Free Consultation <i class="fas fa-arrow-right ms-2"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <div ></div>
    <div ></div>

` }} />
    );
}
