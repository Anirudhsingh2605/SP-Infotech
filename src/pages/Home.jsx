import React, { useEffect } from 'react';

export default function Home() {
    useEffect(() => {
        if (window.AOS) window.AOS.init();
        window.scrollTo(0, 0); // Scroll to top on page load
    }, []);

    return (
        <div dangerouslySetInnerHTML={{ __html: `
    
    <div ></div>

    <!-- Modern Premium Hero Section -->
    <section class="hero-modern position-relative overflow-hidden">
        <!-- Glowing Blobs -->
        <div class="blob blob-1"></div>
        <div class="blob blob-2"></div>
        <div class="blob blob-3"></div>

        <div class="container position-relative z-1">
            <div class="row align-items-center min-vh-100 pt-5 pt-lg-0">
                
                <!-- Left Side Content -->
                <div class="col-lg-6 hero-content-modern" data-aos="fade-right" data-aos-duration="1000">
                    <div class="hero-badge mb-4 d-inline-flex align-items-center px-3 py-2 rounded-pill glass-card-modern">
                        <span class="me-2">🚀</span> Trusted Digital Marketing Agency
                    </div>
                    
                    <h1 class="hero-title-modern fw-bolder mb-4">
                        Grow Your Business with Expert <br>
                        <span class="text-gradient">Digital Marketing Solutions</span>
                    </h1>
                    
                    <p class="hero-subtitle-modern mb-5">
                        We help businesses grow online with SEO, Google Ads, Social Media Marketing, Website Development, Branding, and Lead Generation. Our data-driven strategies help increase traffic, generate qualified leads, and boost revenue.
                    </p>
                    
                    <div class="d-flex flex-wrap gap-3 mb-5">
                        <a href="https://wa.me/917898091357?text=Hi%2C%20I%20would%20like%20to%20get%20a%20free%20consultation%20for%20my%20business." target="_blank" rel="noopener noreferrer" class="btn btn-primary-gradient btn-lg px-4 py-3 rounded-pill fw-bold shadow-lg d-flex align-items-center">
                            Get Free Consultation <i class="fas fa-arrow-right ms-2"></i>
                        </a>
                        <a href="/contact" class="btn btn-outline-light btn-lg px-4 py-3 rounded-pill fw-bold">
                            Contact Us
                        </a>
                    </div>
                    
                    <div class="hero-trust d-flex align-items-center gap-4">
                        <div>
                            <div class="stars text-warning fs-5 mb-1">
                                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                            </div>
                            <span class="fs-6 opacity-75">Trusted by Businesses</span>
                        </div>
                        <div class="border-start border-light border-opacity-25 ps-4">
                            <h5 class="fw-bold mb-0">500+</h5>
                            <span class="fs-6 opacity-75">Successful Projects</span>
                        </div>
                        <div class="border-start border-light border-opacity-25 ps-4">
                            <h5 class="fw-bold mb-0">200+</h5>
                            <span class="fs-6 opacity-75">Happy Clients</span>
                        </div>
                    </div>

                    <div class="d-flex gap-3 mt-5 flex-wrap">
                        <span class="badge bg-white bg-opacity-10 px-3 py-2 rounded-pill fw-normal"><i class="fas fa-check text-success me-1"></i> Google Ads Certified</span>
                        <span class="badge bg-white bg-opacity-10 px-3 py-2 rounded-pill fw-normal"><i class="fas fa-check text-success me-1"></i> SEO Experts</span>
                        <span class="badge bg-white bg-opacity-10 px-3 py-2 rounded-pill fw-normal"><i class="fas fa-check text-success me-1"></i> Meta Marketing</span>
                        <span class="badge bg-white bg-opacity-10 px-3 py-2 rounded-pill fw-normal"><i class="fas fa-check text-success me-1"></i> 24/7 Support</span>
                    </div>
                </div>

                <!-- Right Side Interactive Illustration -->
                <div class="col-lg-6 position-relative mt-5 mt-lg-0" data-aos="fade-left" data-aos-duration="1200" data-aos-delay="200">
                    <div class="hero-illustration-wrapper position-relative w-100" style="height: 600px;">
                        
                        <!-- Center Graphic -->
                        <div class="center-sphere position-absolute top-50 start-50 translate-middle floating-slow">
                            <div class="pulse-ring"></div>
                            <i class="fas fa-chart-pie fa-4x text-gradient"></i>
                        </div>

                        <!-- Floating Glass Cards -->
                        <div class="glass-float-card float-card-1 floating-fast">
                            <div class="d-flex align-items-center gap-3">
                                <div class="icon-box bg-success bg-opacity-25 text-success rounded-circle p-2"><i class="fas fa-arrow-up"></i></div>
                                <div>
                                    <h6 class="mb-0 fw-bold">SEO Score</h6>
                                    <span class="text-success fw-bold">98% Excellent</span>
                                </div>
                            </div>
                        </div>

                        <div class="glass-float-card float-card-2 floating-slow delay-1">
                            <div class="d-flex align-items-center gap-3">
                                <div class="icon-box bg-primary bg-opacity-25 text-primary rounded-circle p-2"><i class="fas fa-users"></i></div>
                                <div>
                                    <h6 class="mb-0 fw-bold">+320%</h6>
                                    <span class="opacity-75 fs-7">Organic Traffic</span>
                                </div>
                            </div>
                        </div>

                        <div class="glass-float-card float-card-3 floating-medium delay-2">
                            <div class="d-flex align-items-center gap-3">
                                <div class="icon-box bg-warning bg-opacity-25 text-warning rounded-circle p-2"><i class="fas fa-bullseye"></i></div>
                                <div>
                                    <h6 class="mb-0 fw-bold">ROAS 6.8x</h6>
                                    <span class="opacity-75 fs-7">Google Ads Active</span>
                                </div>
                            </div>
                        </div>

                        <div class="glass-float-card float-card-4 floating-fast delay-3">
                            <div class="d-flex align-items-center gap-3">
                                <div class="icon-box bg-info bg-opacity-25 text-info rounded-circle p-2"><i class="fab fa-meta"></i></div>
                                <div>
                                    <h6 class="mb-0 fw-bold">+450 Leads</h6>
                                    <span class="opacity-75 fs-7">Campaign Running</span>
                                </div>
                            </div>
                        </div>

                        <!-- Floating Tech Icons -->
                        <div class="float-icon icon-1 floating-medium text-primary fs-3"><i class="fab fa-google"></i></div>
                        <div class="float-icon icon-2 floating-slow text-info fs-3"><i class="fab fa-facebook"></i></div>
                        <div class="float-icon icon-3 floating-fast text-danger fs-3"><i class="fab fa-instagram"></i></div>
                        <div class="float-icon icon-4 floating-medium text-warning fs-3"><i class="fas fa-chart-line"></i></div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Modern Premium About Section -->
    <section class="about-modern position-relative overflow-hidden py-5 mt-5">
        <!-- Background elements for depth -->
        <div class="blob blob-3" style="top: 20%; right: -10%; opacity: 0.2; width: 400px; height: 400px;"></div>
        <div class="blob blob-2" style="bottom: 10%; left: -5%; opacity: 0.2; width: 300px; height: 300px;"></div>

        <div class="container position-relative z-1">
            <div class="row align-items-center">
                
                <!-- Left Side Illustration & Floating Cards (45%) -->
                <div class="col-lg-5 mb-5 mb-lg-0 pe-lg-5" data-aos="fade-up" data-aos-duration="1000">
                    <div class="about-illustration-wrapper position-relative w-100" style="height: 550px;">
                        <!-- Base Image/Graphic -->
                        <div class="glass-card-modern position-absolute top-50 start-50 translate-middle w-100 h-100 rounded-4 overflow-hidden border border-light border-opacity-10 p-2 shadow-lg" style="background: rgba(10,25,47,0.4);">
                            <img src="/images/about_office.png" alt="Digital Marketing Team" class="img-fluid rounded-3 w-100 h-100 object-fit-cover opacity-75 mix-blend-overlay">
                        </div>

                        <!-- Floating Stat Cards -->
                        <div class="glass-float-card floating-medium delay-1" style="top: 5%; left: -10%;">
                            <div class="d-flex align-items-center gap-3">
                                <div class="icon-box bg-primary bg-opacity-25 text-primary rounded-circle p-2"><i class="fas fa-briefcase"></i></div>
                                <div>
                                    <h5 class="mb-0 fw-bolder">500+</h5>
                                    <span class="opacity-75 fs-7">Projects Delivered</span>
                                </div>
                            </div>
                        </div>

                        <div class="glass-float-card floating-slow" style="top: 40%; right: -15%;">
                            <div class="d-flex align-items-center gap-3">
                                <div class="icon-box bg-success bg-opacity-25 text-success rounded-circle p-2"><i class="fas fa-smile"></i></div>
                                <div>
                                    <h5 class="mb-0 fw-bolder">200+</h5>
                                    <span class="opacity-75 fs-7">Happy Clients</span>
                                </div>
                            </div>
                        </div>

                        <div class="glass-float-card floating-fast delay-2" style="bottom: 25%; left: -5%;">
                            <div class="d-flex align-items-center gap-3">
                                <div class="icon-box bg-warning bg-opacity-25 text-warning rounded-circle p-2"><i class="fas fa-star"></i></div>
                                <div>
                                    <h5 class="mb-0 fw-bolder">98%</h5>
                                    <span class="opacity-75 fs-7">Client Satisfaction</span>
                                </div>
                            </div>
                        </div>

                        <div class="glass-float-card floating-medium delay-3" style="bottom: 0%; right: 10%;">
                            <div class="d-flex align-items-center gap-3">
                                <div class="icon-box bg-info bg-opacity-25 text-info rounded-circle p-2"><i class="fas fa-award"></i></div>
                                <div>
                                    <h5 class="mb-0 fw-bolder">5+ Years</h5>
                                    <span class="opacity-75 fs-7">Of Experience</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right Side Content (55%) -->
                <div class="col-lg-7 ps-lg-5" data-aos="fade-left" data-aos-duration="1200" data-aos-delay="200">
                    <div class="hero-badge mb-3 d-inline-flex align-items-center px-3 py-1 rounded-pill glass-card-modern fs-7 text-uppercase fw-bold letter-spacing-1">
                        About SP InfTech Marketing
                    </div>
                    
                    <h2 class="fw-bolder mb-4" style="font-size: 3rem; line-height: 1.2;">
                        Your Trusted Digital Marketing <br>
                        <span class="text-gradient">Growth Partner</span>
                    </h2>
                    
                    <p class="mb-4" style="font-size: 1.1rem; line-height: 1.8; color: rgba(255, 255, 255, 0.85);">
                        SP InfTech Marketing is a full-service digital marketing agency dedicated to helping businesses grow in the digital world. We provide innovative, data-driven marketing solutions that increase online visibility, generate high-quality leads, improve brand awareness, and maximize business growth.
                    </p>
                    <p class="mb-5" style="font-size: 1.1rem; line-height: 1.8; color: rgba(255, 255, 255, 0.85);">
                        Our experienced team specializes in SEO, Google Ads, Social Media Marketing, Website Development, Branding, Content Marketing, and Performance Marketing. We focus on delivering measurable results, transparent communication, and long-term success for every client.
                    </p>

                    <div class="row g-4 mb-5">
                        <div class="col-md-6">
                            <div class="d-flex align-items-center p-3 rounded-4 glass-card-modern feature-card-hover transition-all">
                                <div class="bg-success bg-opacity-25 rounded-circle p-2 me-3"><i class="fas fa-check text-success"></i></div>
                                <span class="fw-semibold">Result-Driven Strategies</span>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="d-flex align-items-center p-3 rounded-4 glass-card-modern feature-card-hover transition-all">
                                <div class="bg-success bg-opacity-25 rounded-circle p-2 me-3"><i class="fas fa-check text-success"></i></div>
                                <span class="fw-semibold">Experienced Experts</span>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="d-flex align-items-center p-3 rounded-4 glass-card-modern feature-card-hover transition-all">
                                <div class="bg-success bg-opacity-25 rounded-circle p-2 me-3"><i class="fas fa-check text-success"></i></div>
                                <span class="fw-semibold">Custom Solutions</span>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="d-flex align-items-center p-3 rounded-4 glass-card-modern feature-card-hover transition-all">
                                <div class="bg-success bg-opacity-25 rounded-circle p-2 me-3"><i class="fas fa-check text-success"></i></div>
                                <span class="fw-semibold">Transparent Reporting</span>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="d-flex align-items-center p-3 rounded-4 glass-card-modern feature-card-hover transition-all">
                                <div class="bg-success bg-opacity-25 rounded-circle p-2 me-3"><i class="fas fa-check text-success"></i></div>
                                <span class="fw-semibold">ROI-Focused Campaigns</span>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="d-flex align-items-center p-3 rounded-4 glass-card-modern feature-card-hover transition-all">
                                <div class="bg-success bg-opacity-25 rounded-circle p-2 me-3"><i class="fas fa-check text-success"></i></div>
                                <span class="fw-semibold">Dedicated Support</span>
                            </div>
                        </div>
                    </div>

                    <div class="d-flex flex-wrap gap-3">
                        <a href="/about" class="btn btn-primary-gradient btn-lg px-4 py-3 rounded-pill fw-bold shadow-lg">
                            Inquire Now About Us <i class="fas fa-arrow-right ms-2"></i>
                        </a>
                        <a href="/services" class="btn btn-outline-light btn-lg px-4 py-3 rounded-pill fw-bold">
                            Our Services
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Modern Premium Services Section -->
    <section class="services-modern position-relative overflow-hidden py-5">
        <!-- Background Elements -->
        <div class="blob blob-1" style="top: -10%; right: -5%; opacity: 0.15; width: 500px; height: 500px;"></div>
        <div class="blob blob-2" style="bottom: -10%; left: -5%; opacity: 0.15; width: 600px; height: 600px;"></div>

        <div class="container position-relative z-1">
            <div class="text-center mb-5" data-aos="fade-up">
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
                <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
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
                <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="150">
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
                <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
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
                <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="250">
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

            </div>

            <!-- CTA Below Services -->
            <div class="text-center mt-5 pt-5" data-aos="zoom-in">
                <h3 class="fw-bolder mb-3">Need a Custom Digital Solution?</h3>
                <p class="mb-4 max-w-700 mx-auto" style="color: rgba(255, 255, 255, 0.75);">
                    Our team is ready to help you choose the right services for your business and create a customized digital growth strategy.
                </p>
                <div class="d-flex flex-wrap justify-content-center gap-3">
                    <a href="/services" class="btn btn-primary-gradient btn-lg px-4 py-3 rounded-pill fw-bold shadow-lg">
                        View All Services <i class="fas fa-arrow-right ms-2"></i>
                    </a>
                    <a href="https://wa.me/917898091357" target="_blank" rel="noopener noreferrer" class="btn btn-outline-light btn-lg px-4 py-3 rounded-pill fw-bold">
                        Get Free Consultation
                    </a>
                </div>
            </div>
        </div>
    </section>
    <!-- Our Portfolio Section -->
    <section class="portfolio-section position-relative py-5">
        <!-- Background Elements -->
        <div class="position-absolute top-0 start-0 w-100 h-100 overflow-hidden z-0">
            <div class="blob blob-1" style="top: -10%; left: -5%; opacity: 0.1; width: 400px; height: 400px; background: var(--primary-color); border-radius: 50%; filter: blur(100px);"></div>
            <div class="blob blob-2" style="bottom: 20%; right: -5%; opacity: 0.1; width: 500px; height: 500px; background: var(--secondary-color, #7C3AED); border-radius: 50%; filter: blur(120px);"></div>
        </div>

        <div class="container position-relative z-1">
            <div class="text-center mb-5" data-aos="fade-up">
                <div class="hero-badge mb-3 d-inline-flex align-items-center px-3 py-1 rounded-pill glass-card-modern fs-7 text-uppercase fw-bold letter-spacing-1">
                    <i class="fas fa-rocket text-primary me-2"></i> OUR PORTFOLIO
                </div>
                <h2 class="fw-bolder mb-3" style="font-size: 2.5rem;">
                    Featured Projects That <span class="text-gradient">Deliver Results</span>
                </h2>
                <p class="mb-5 max-w-800 mx-auto" style="font-size: 1.1rem; color: rgba(255, 255, 255, 0.75);">
                    Explore a selection of our best digital projects that demonstrate our expertise in website development, mobile applications, branding, and digital marketing.
                </p>
            </div>

            <div class="row g-4 mb-5">
                <!-- Project 1 -->
                <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                    <div class="glass-card-modern rounded-4 h-100 position-relative overflow-hidden service-card-hover transition-all">
                        <div class="overflow-hidden" style="height: 220px;">
                            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" class="w-100 h-100 object-fit-cover transition-all portfolio-img" alt="Corporate Business Website" style="transition: transform 0.5s ease;">
                        </div>
                        <div class="p-4">
                            <span class="badge bg-primary bg-opacity-25 text-primary mb-2">Business Website</span>
                            <h5 class="fw-bold mb-3">Corporate Business Website</h5>
                            <p class="fs-7 opacity-75 mb-4">Designed and developed a premium responsive website with modern UI, fast loading speed, SEO optimization, and lead generation features.</p>
                            <ul class="list-unstyled mb-0 fs-7 opacity-75">
                                <li class="mb-1"><i class="fas fa-check text-success me-2"></i> Responsive Design</li>
                                <li class="mb-1"><i class="fas fa-check text-success me-2"></i> SEO Optimized</li>
                                <li><i class="fas fa-check text-success me-2"></i> Fast Performance</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Project 2 -->
                <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                    <div class="glass-card-modern rounded-4 h-100 position-relative overflow-hidden service-card-hover transition-all">
                        <div class="overflow-hidden" style="height: 220px;">
                            <img src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=800&auto=format&fit=crop" class="w-100 h-100 object-fit-cover transition-all portfolio-img" alt="Fashion Store" style="transition: transform 0.5s ease;">
                        </div>
                        <div class="p-4">
                            <span class="badge" style="background: rgba(124, 58, 237, 0.25); color: #7C3AED;">E-Commerce Website</span>
                            <h5 class="fw-bold mb-3">Fashion Store</h5>
                            <p class="fs-7 opacity-75 mb-4">Created a modern online shopping website with payment gateway integration, shopping cart, product management, and mobile optimization.</p>
                            <ul class="list-unstyled mb-0 fs-7 opacity-75">
                                <li class="mb-1"><i class="fas fa-check text-success me-2"></i> Secure Checkout</li>
                                <li class="mb-1"><i class="fas fa-check text-success me-2"></i> Mobile Friendly</li>
                                <li><i class="fas fa-check text-success me-2"></i> High Conversion Design</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Project 3 -->
                <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                    <div class="glass-card-modern rounded-4 h-100 position-relative overflow-hidden service-card-hover transition-all">
                        <div class="overflow-hidden" style="height: 220px;">
                            <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop" class="w-100 h-100 object-fit-cover transition-all portfolio-img" alt="Fitness Tracker App" style="transition: transform 0.5s ease;">
                        </div>
                        <div class="p-4">
                            <span class="badge" style="background: rgba(6, 182, 212, 0.25); color: #06B6D4;">Mobile Application</span>
                            <h5 class="fw-bold mb-3">Fitness Tracker App</h5>
                            <p class="fs-7 opacity-75 mb-4">Developed a cross-platform Android & iOS mobile application with modern UI and real-time user tracking.</p>
                            <ul class="list-unstyled mb-0 fs-7 opacity-75">
                                <li class="mb-1"><i class="fas fa-check text-success me-2"></i> Android & iOS</li>
                                <li class="mb-1"><i class="fas fa-check text-success me-2"></i> Modern UI</li>
                                <li><i class="fas fa-check text-success me-2"></i> API Integration</li>
                            </ul>
                        </div>
                    </div>
                </div>

</div>
            <!-- View Full Portfolio Button -->
            <div class="text-center mb-5 pb-4" data-aos="fade-up">
                <a href="/portfolio" class="btn btn-outline-light btn-lg px-5 py-3 rounded-pill fw-bold transition-all hover-lift">
                    View Full Portfolio <i class="fas fa-arrow-right ms-2"></i>
                </a>
            </div>


        </div>
    </section>

    <!-- Client Testimonials Section -->
    <section class="testimonials-section position-relative overflow-hidden py-5">
        <!-- Background Elements -->
        <div class="blob blob-1" style="top: 10%; left: 5%; opacity: 0.15; width: 300px; height: 300px; background: var(--primary-color); border-radius: 50%; filter: blur(80px);"></div>
        <div class="blob blob-2" style="bottom: 10%; right: 5%; opacity: 0.15; width: 400px; height: 400px; background: var(--secondary-color, #7C3AED); border-radius: 50%; filter: blur(100px);"></div>

        <div class="container position-relative z-1">
            <div class="text-center mb-5" data-aos="fade-up">
                <div class="hero-badge mb-3 d-inline-flex align-items-center px-3 py-1 rounded-pill glass-card-modern fs-7 text-uppercase fw-bold letter-spacing-1">
                    <i class="fas fa-star text-warning me-2"></i> CLIENT TESTIMONIALS
                </div>
                <h2 class="fw-bolder mb-3" style="font-size: 2.5rem;">
                    What Our <span class="text-gradient">Clients Say</span> About Us
                </h2>
                <p class="mb-5 max-w-800 mx-auto" style="font-size: 1.1rem; color: rgba(255, 255, 255, 0.75);">
                    We take pride in delivering exceptional digital marketing solutions that help businesses grow, generate quality leads, increase online visibility, and achieve measurable success.
                </p>
            </div>

            <!-- Desktop Carousel (lg and up) -->
            <div id="testimonialCarouselDesktop" class="carousel slide d-none d-lg-block mb-5" data-bs-ride="carousel" data-bs-interval="5000">
                <div class="carousel-inner pb-5">
                    <!-- Slide 1 -->
                    <div class="carousel-item active">
                        <div class="row g-4">
                            <!-- Testimonial 1 -->
                            <div class="col-lg-4">
                                <div class="glass-card-modern rounded-4 p-4 h-100 position-relative service-card-hover transition-all">
                                    <i class="fas fa-quote-right position-absolute top-0 end-0 mt-4 me-4 fs-1 opacity-25 text-primary"></i>
                                    <div class="d-flex align-items-center mb-4">
                                        <img src="https://ui-avatars.com/api/?name=Rahul+Sharma&background=2563EB&color=fff&size=64" alt="Rahul Sharma" class="rounded-circle me-3" width="60" height="60">
                                        <div>
                                            <h5 class="fw-bold mb-0">Rahul Sharma</h5>
                                            
                                        </div>
                                    </div>
                                    <div class="text-warning mb-3 fs-7">
                                        <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                    </div>
                                    <p class="fs-6 opacity-75 fst-italic">"SP Infotech completely transformed our online presence. Their SEO and Google Ads strategies helped us increase website traffic and generate quality leads within just a few months. Highly recommended!"</p>
                                    <div class="d-inline-flex align-items-center mt-3 bg-success bg-opacity-25 text-success px-2 py-1 rounded fs-8 fw-bold">
                                        <i class="fas fa-check-circle me-1"></i> Verified Client
                                    </div>
                                </div>
                            </div>
                            <!-- Testimonial 2 -->
                            <div class="col-lg-4">
                                <div class="glass-card-modern rounded-4 p-4 h-100 position-relative service-card-hover transition-all">
                                    <i class="fas fa-quote-right position-absolute top-0 end-0 mt-4 me-4 fs-1 opacity-25 text-primary"></i>
                                    <div class="d-flex align-items-center mb-4">
                                        <img src="https://ui-avatars.com/api/?name=Priya+Verma&background=7C3AED&color=fff&size=64" alt="Priya Verma" class="rounded-circle me-3" width="60" height="60">
                                        <div>
                                            <h5 class="fw-bold mb-0">Priya Verma</h5>
                                            
                                        </div>
                                    </div>
                                    <div class="text-warning mb-3 fs-7">
                                        <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                    </div>
                                    <p class="fs-6 opacity-75 fst-italic">"Our new website looks amazing and performs perfectly on every device. The SP Infotech team was professional, responsive, and delivered everything on time."</p>
                                    <div class="d-inline-flex align-items-center mt-3 bg-success bg-opacity-25 text-success px-2 py-1 rounded fs-8 fw-bold">
                                        <i class="fas fa-check-circle me-1"></i> Verified Client
                                    </div>
                                </div>
                            </div>
                            <!-- Testimonial 3 -->
                            <div class="col-lg-4">
                                <div class="glass-card-modern rounded-4 p-4 h-100 position-relative service-card-hover transition-all">
                                    <i class="fas fa-quote-right position-absolute top-0 end-0 mt-4 me-4 fs-1 opacity-25 text-primary"></i>
                                    <div class="d-flex align-items-center mb-4">
                                        <img src="https://ui-avatars.com/api/?name=Amit+Gupta&background=06B6D4&color=fff&size=64" alt="Amit Gupta" class="rounded-circle me-3" width="60" height="60">
                                        <div>
                                            <h5 class="fw-bold mb-0">Amit Gupta</h5>
                                            
                                        </div>
                                    </div>
                                    <div class="text-warning mb-3 fs-7">
                                        <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                    </div>
                                    <p class="fs-6 opacity-75 fst-italic">"Their Facebook and Instagram advertising campaigns generated excellent leads for our projects. We saw a significant improvement in conversions and business growth."</p>
                                    <div class="d-inline-flex align-items-center mt-3 bg-success bg-opacity-25 text-success px-2 py-1 rounded fs-8 fw-bold">
                                        <i class="fas fa-check-circle me-1"></i> Verified Client
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Slide 2 -->
                    <div class="carousel-item">
                        <div class="row g-4">
                            <!-- Testimonial 4 -->
                            <div class="col-lg-4">
                                <div class="glass-card-modern rounded-4 p-4 h-100 position-relative service-card-hover transition-all">
                                    <i class="fas fa-quote-right position-absolute top-0 end-0 mt-4 me-4 fs-1 opacity-25 text-primary"></i>
                                    <div class="d-flex align-items-center mb-4">
                                        <img src="https://ui-avatars.com/api/?name=Neha+Kapoor&background=10B981&color=fff&size=64" alt="Neha Kapoor" class="rounded-circle me-3" width="60" height="60">
                                        <div>
                                            <h5 class="fw-bold mb-0">Neha Kapoor</h5>
                                            
                                        </div>
                                    </div>
                                    <div class="text-warning mb-3 fs-7">
                                        <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                    </div>
                                    <p class="fs-6 opacity-75 fst-italic">"Professional service, transparent communication, and outstanding results. SP Infotech exceeded our expectations with their expertise and commitment."</p>
                                    <div class="d-inline-flex align-items-center mt-3 bg-success bg-opacity-25 text-success px-2 py-1 rounded fs-8 fw-bold">
                                        <i class="fas fa-check-circle me-1"></i> Verified Client
                                    </div>
                                </div>
                            </div>
                            <!-- Testimonial 5 -->
                            <div class="col-lg-4">
                                <div class="glass-card-modern rounded-4 p-4 h-100 position-relative service-card-hover transition-all">
                                    <i class="fas fa-quote-right position-absolute top-0 end-0 mt-4 me-4 fs-1 opacity-25 text-primary"></i>
                                    <div class="d-flex align-items-center mb-4">
                                        <img src="https://ui-avatars.com/api/?name=Sandeep+Jain&background=F59E0B&color=fff&size=64" alt="Sandeep Jain" class="rounded-circle me-3" width="60" height="60">
                                        <div>
                                            <h5 class="fw-bold mb-0">Sandeep Jain</h5>
                                            
                                        </div>
                                    </div>
                                    <div class="text-warning mb-3 fs-7">
                                        <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                    </div>
                                    <p class="fs-6 opacity-75 fst-italic">"SP Infotech helped us improve our Google rankings through SEO. We now receive consistent inquiries from organic search and our online visibility has increased significantly."</p>
                                    <div class="d-inline-flex align-items-center mt-3 bg-success bg-opacity-25 text-success px-2 py-1 rounded fs-8 fw-bold">
                                        <i class="fas fa-check-circle me-1"></i> Verified Client
                                    </div>
                                </div>
                            </div>
                            <!-- Testimonial 6 -->
                            <div class="col-lg-4">
                                <div class="glass-card-modern rounded-4 p-4 h-100 position-relative service-card-hover transition-all">
                                    <i class="fas fa-quote-right position-absolute top-0 end-0 mt-4 me-4 fs-1 opacity-25 text-primary"></i>
                                    <div class="d-flex align-items-center mb-4">
                                        <img src="https://ui-avatars.com/api/?name=Anjali+Mehta&background=EC4899&color=fff&size=64" alt="Anjali Mehta" class="rounded-circle me-3" width="60" height="60">
                                        <div>
                                            <h5 class="fw-bold mb-0">Anjali Mehta</h5>
                                            
                                        </div>
                                    </div>
                                    <div class="text-warning mb-3 fs-7">
                                        <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                    </div>
                                    <p class="fs-6 opacity-75 fst-italic">"Their complete digital marketing strategy helped us build a stronger online brand, increase student inquiries, and improve our overall digital presence. Fantastic experience!"</p>
                                    <div class="d-inline-flex align-items-center mt-3 bg-success bg-opacity-25 text-success px-2 py-1 rounded fs-8 fw-bold">
                                        <i class="fas fa-check-circle me-1"></i> Verified Client
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Pagination -->
                <div class="carousel-indicators" style="bottom: -10px;">
                    <button type="button" data-bs-target="#testimonialCarouselDesktop" data-bs-slide-to="0" class="active rounded-circle" style="width: 12px; height: 12px; margin: 0 5px;" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#testimonialCarouselDesktop" data-bs-slide-to="1" class="rounded-circle" style="width: 12px; height: 12px; margin: 0 5px;" aria-label="Slide 2"></button>
                </div>
            </div>

            <!-- Mobile Carousel (below lg) -->
            <div id="testimonialCarouselMobile" class="carousel slide d-block d-lg-none mb-5" data-bs-ride="carousel" data-bs-interval="5000">
                <div class="carousel-inner pb-5">
                    <div class="carousel-item active">
                        <div class="glass-card-modern rounded-4 p-4 h-100 position-relative mx-2">
                            <i class="fas fa-quote-right position-absolute top-0 end-0 mt-4 me-4 fs-1 opacity-25 text-primary"></i>
                            <div class="d-flex align-items-center mb-4">
                                <img src="https://ui-avatars.com/api/?name=Rahul+Sharma&background=2563EB&color=fff&size=64" alt="Rahul Sharma" class="rounded-circle me-3" width="60" height="60">
                                <div>
                                    <h5 class="fw-bold mb-0">Rahul Sharma</h5>
                                    
                                </div>
                            </div>
                            <div class="text-warning mb-3 fs-7">
                                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                            </div>
                            <p class="fs-6 opacity-75 fst-italic">"SP Infotech completely transformed our online presence. Their SEO and Google Ads strategies helped us increase website traffic and generate quality leads within just a few months. Highly recommended!"</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="glass-card-modern rounded-4 p-4 h-100 position-relative mx-2">
                            <i class="fas fa-quote-right position-absolute top-0 end-0 mt-4 me-4 fs-1 opacity-25 text-primary"></i>
                            <div class="d-flex align-items-center mb-4">
                                <img src="https://ui-avatars.com/api/?name=Priya+Verma&background=7C3AED&color=fff&size=64" alt="Priya Verma" class="rounded-circle me-3" width="60" height="60">
                                <div>
                                    <h5 class="fw-bold mb-0">Priya Verma</h5>
                                    
                                </div>
                            </div>
                            <div class="text-warning mb-3 fs-7">
                                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                            </div>
                            <p class="fs-6 opacity-75 fst-italic">"Our new website looks amazing and performs perfectly on every device. The SP Infotech team was professional, responsive, and delivered everything on time."</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="glass-card-modern rounded-4 p-4 h-100 position-relative mx-2">
                            <i class="fas fa-quote-right position-absolute top-0 end-0 mt-4 me-4 fs-1 opacity-25 text-primary"></i>
                            <div class="d-flex align-items-center mb-4">
                                <img src="https://ui-avatars.com/api/?name=Amit+Gupta&background=06B6D4&color=fff&size=64" alt="Amit Gupta" class="rounded-circle me-3" width="60" height="60">
                                <div>
                                    <h5 class="fw-bold mb-0">Amit Gupta</h5>
                                    
                                </div>
                            </div>
                            <div class="text-warning mb-3 fs-7">
                                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                            </div>
                            <p class="fs-6 opacity-75 fst-italic">"Their Facebook and Instagram advertising campaigns generated excellent leads for our projects. We saw a significant improvement in conversions and business growth."</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="glass-card-modern rounded-4 p-4 h-100 position-relative mx-2">
                            <i class="fas fa-quote-right position-absolute top-0 end-0 mt-4 me-4 fs-1 opacity-25 text-primary"></i>
                            <div class="d-flex align-items-center mb-4">
                                <img src="https://ui-avatars.com/api/?name=Neha+Kapoor&background=10B981&color=fff&size=64" alt="Neha Kapoor" class="rounded-circle me-3" width="60" height="60">
                                <div>
                                    <h5 class="fw-bold mb-0">Neha Kapoor</h5>
                                    
                                </div>
                            </div>
                            <div class="text-warning mb-3 fs-7">
                                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                            </div>
                            <p class="fs-6 opacity-75 fst-italic">"Professional service, transparent communication, and outstanding results. SP Infotech exceeded our expectations with their expertise and commitment."</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="glass-card-modern rounded-4 p-4 h-100 position-relative mx-2">
                            <i class="fas fa-quote-right position-absolute top-0 end-0 mt-4 me-4 fs-1 opacity-25 text-primary"></i>
                            <div class="d-flex align-items-center mb-4">
                                <img src="https://ui-avatars.com/api/?name=Sandeep+Jain&background=F59E0B&color=fff&size=64" alt="Sandeep Jain" class="rounded-circle me-3" width="60" height="60">
                                <div>
                                    <h5 class="fw-bold mb-0">Sandeep Jain</h5>
                                    
                                </div>
                            </div>
                            <div class="text-warning mb-3 fs-7">
                                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                            </div>
                            <p class="fs-6 opacity-75 fst-italic">"SP Infotech helped us improve our Google rankings through SEO. We now receive consistent inquiries from organic search and our online visibility has increased significantly."</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="glass-card-modern rounded-4 p-4 h-100 position-relative mx-2">
                            <i class="fas fa-quote-right position-absolute top-0 end-0 mt-4 me-4 fs-1 opacity-25 text-primary"></i>
                            <div class="d-flex align-items-center mb-4">
                                <img src="https://ui-avatars.com/api/?name=Anjali+Mehta&background=EC4899&color=fff&size=64" alt="Anjali Mehta" class="rounded-circle me-3" width="60" height="60">
                                <div>
                                    <h5 class="fw-bold mb-0">Anjali Mehta</h5>
                                    
                                </div>
                            </div>
                            <div class="text-warning mb-3 fs-7">
                                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                            </div>
                            <p class="fs-6 opacity-75 fst-italic">"Their complete digital marketing strategy helped us build a stronger online brand, increase student inquiries, and improve our overall digital presence. Fantastic experience!"</p>
                        </div>
                    </div>
                </div>
                <!-- Pagination -->
                <div class="carousel-indicators" style="bottom: -10px;">
                    <button type="button" data-bs-target="#testimonialCarouselMobile" data-bs-slide-to="0" class="active rounded-circle" style="width: 10px; height: 10px; margin: 0 4px;" aria-current="true"></button>
                    <button type="button" data-bs-target="#testimonialCarouselMobile" data-bs-slide-to="1" class="rounded-circle" style="width: 10px; height: 10px; margin: 0 4px;"></button>
                    <button type="button" data-bs-target="#testimonialCarouselMobile" data-bs-slide-to="2" class="rounded-circle" style="width: 10px; height: 10px; margin: 0 4px;"></button>
                    <button type="button" data-bs-target="#testimonialCarouselMobile" data-bs-slide-to="3" class="rounded-circle" style="width: 10px; height: 10px; margin: 0 4px;"></button>
                    <button type="button" data-bs-target="#testimonialCarouselMobile" data-bs-slide-to="4" class="rounded-circle" style="width: 10px; height: 10px; margin: 0 4px;"></button>
                    <button type="button" data-bs-target="#testimonialCarouselMobile" data-bs-slide-to="5" class="rounded-circle" style="width: 10px; height: 10px; margin: 0 4px;"></button>
                </div>
            </div>

            <!-- Animated Counters -->
            <div class="stats-section row g-4 mt-2 justify-content-center border-top border-light border-opacity-10 pt-5">
                <div class="col-lg-3 col-6 text-center" data-aos="zoom-in" data-aos-delay="100">
                    <h2 class="fw-bolder text-gradient mb-2" style="font-size: 3rem;"><span class="counter" data-target="500">0</span>+</h2>
                    <p class="fs-6 opacity-75 fw-semibold mb-0">Projects Completed</p>
                </div>
                <div class="col-lg-3 col-6 text-center" data-aos="zoom-in" data-aos-delay="200">
                    <h2 class="fw-bolder text-gradient mb-2" style="font-size: 3rem;"><span class="counter" data-target="200">0</span>+</h2>
                    <p class="fs-6 opacity-75 fw-semibold mb-0">Happy Clients</p>
                </div>
                <div class="col-lg-3 col-6 text-center" data-aos="zoom-in" data-aos-delay="300">
                    <h2 class="fw-bolder text-gradient mb-2" style="font-size: 3rem;"><span class="counter" data-target="98">0</span>%</h2>
                    <p class="fs-6 opacity-75 fw-semibold mb-0">Client Satisfaction</p>
                </div>
                <div class="col-lg-3 col-6 text-center" data-aos="zoom-in" data-aos-delay="400">
                    <h2 class="fw-bolder text-gradient mb-2" style="font-size: 3rem;"><span class="counter" data-target="5">0</span>+</h2>
                    <p class="fs-6 opacity-75 fw-semibold mb-0">Years Experience</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Technologies -->
    <section class="section-padding bg-white">
        <div class="container">
            <div class="text-center mb-5" data-aos="fade-up">
                <h2 class="section-title">Technologies We Master</h2>
            </div>
            <div class="row justify-content-center text-center g-4">
                <div class="col-4 col-md-2" data-aos="fade-up" data-aos-delay="100">
                    <i class="fab fa-java fa-4x text-primary mb-2"></i>
                    <h6>Java Spring</h6>
                </div>
                <div class="col-4 col-md-2" data-aos="fade-up" data-aos-delay="200">
                    <i class="fab fa-shopify fa-4x text-primary mb-2"></i>
                    <h6>Shopify</h6>
                </div>
                <div class="col-4 col-md-2" data-aos="fade-up" data-aos-delay="300">
                    <i class="fab fa-aws fa-4x text-primary mb-2"></i>
                    <h6>AWS Cloud</h6>
                </div>
                <div class="col-4 col-md-2" data-aos="fade-up" data-aos-delay="400">
                    <i class="fab fa-react fa-4x text-primary mb-2"></i>
                    <h6>React JS</h6>
                </div>
                <div class="col-4 col-md-2" data-aos="fade-up" data-aos-delay="500">
                    <i class="fab fa-python fa-4x text-primary mb-2"></i>
                    <h6>Python</h6>
                </div>
                <div class="col-4 col-md-2" data-aos="fade-up" data-aos-delay="600">
                    <i class="fas fa-database fa-4x text-primary mb-2"></i>
                    <h6>SQL/NoSQL</h6>
                </div>
            </div>
        </div>
    </section>

    <div ></div>
    <div ></div>

` }} />
    );
}
