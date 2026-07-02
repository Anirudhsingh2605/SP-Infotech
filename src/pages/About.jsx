import React, { useEffect } from 'react';

export default function About() {
    useEffect(() => {
        if (window.AOS) window.AOS.init();
        window.scrollTo(0, 0); // Scroll to top on page load
    }, []);

    return (
        <div dangerouslySetInnerHTML={{ __html: `
    
    <div ></div>

    <!-- Page Header -->
    <section class="page-header">
        <div class="container" data-aos="fade-up">
            <h1 class="page-title fw-bold">About Us</h1>

        </div>
    </section>

    <!-- Company Story -->
    <section class="section-padding bg-white text-dark">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 mb-5 mb-lg-0" data-aos="fade-right">
                    <h2 class="section-title text-start">Our Story</h2>
                    <p class="lead mt-4 text-muted">Founded on the principles of innovation and excellence, SP Infotech has grown into a globally recognized IT solutions provider.</p>
                    <p class="text-muted">We started with a small team of passionate developers and a big vision: to help businesses navigate the complexities of the digital landscape. Today, we empower startups and Fortune 500 companies alike with enterprise-grade software, highly optimized Shopify stores, and rigorous QA engineering.</p>
                    <p class="text-muted">Our approach is collaborative, transparent, and results-driven. We believe in building long-term partnerships with our clients, acting as an extension of their team to ensure continuous success.</p>
                </div>
                <div class="col-lg-6 ps-lg-5" data-aos="fade-left">
                    <img src="/images/about_office.png" alt="SP Infotech Office" class="img-fluid rounded shadow-lg" style="border: 2px solid var(--primary-color);">
                </div>
            </div>
        </div>
    </section>

    <!-- Mission & Vision -->
    <section class="section-padding bg-light">
        <div class="container">
            <div class="row g-4">
                <div class="col-md-6" data-aos="fade-up" data-aos-delay="100">
                    <div class="glass-card text-center p-5">
                        <i class="fas fa-bullseye fa-4x text-primary mb-4"></i>
                        <h3 class="mb-3">Our Mission</h3>
                        <p class="text-muted">To deliver innovative, secure, and scalable technology solutions that drive business growth, optimize operations, and create outstanding user experiences for our clients globally.</p>
                    </div>
                </div>
                <div class="col-md-6" data-aos="fade-up" data-aos-delay="200">
                    <div class="glass-card text-center p-5">
                        <i class="fas fa-eye fa-4x text-primary mb-4"></i>
                        <h3 class="mb-3">Our Vision</h3>
                        <p class="text-muted">To be the most trusted and preferred IT partner worldwide, recognized for our commitment to excellence, continuous innovation, and ability to deliver unparalleled value.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Core Values -->
    <section class="section-padding bg-white">
        <div class="container">
            <div class="text-center mb-5" data-aos="fade-up">
                <h2 class="section-title">Our Core Values</h2>
                <p class="text-muted mt-3">The principles that guide our work and shape our culture.</p>
            </div>
            
            <div class="row g-4">
                <div class="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="100">
                    <div class="text-center p-4 border rounded hover-shadow transition">
                        <i class="fas fa-star fa-3x text-primary mb-3"></i>
                        <h5>Excellence</h5>
                        <p class="text-muted small">We strive for the highest quality in everything we do.</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="200">
                    <div class="text-center p-4 border rounded hover-shadow transition">
                        <i class="fas fa-handshake fa-3x text-primary mb-3"></i>
                        <h5>Integrity</h5>
                        <p class="text-muted small">We build trust through transparency and honesty.</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="300">
                    <div class="text-center p-4 border rounded hover-shadow transition">
                        <i class="fas fa-lightbulb fa-3x text-primary mb-3"></i>
                        <h5>Innovation</h5>
                        <p class="text-muted small">We continuously seek new and better ways to solve problems.</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="400">
                    <div class="text-center p-4 border rounded hover-shadow transition">
                        <i class="fas fa-users fa-3x text-primary mb-3"></i>
                        <h5>Collaboration</h5>
                        <p class="text-muted small">We work as one team to achieve shared goals.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Why Clients Trust Us -->
    <section class="section-padding bg-dark text-white">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 mb-4 mb-lg-0" data-aos="fade-right">
                    <h2 class="section-title text-start text-white">Why Clients Trust Us</h2>
                    <p class="mt-4 text-light">We don't just write code; we build solutions that matter. Our commitment to our clients goes beyond project delivery.</p>
                    
                    <div class="d-flex mt-4">
                        <div class="me-3">
                            <i class="fas fa-shield-alt fa-2x text-primary"></i>
                        </div>
                        <div>
                            <h5 class="text-white">Uncompromising Quality</h5>
                            <p class="text-light small">Rigorous QA testing ensures bug-free and high-performance applications.</p>
                        </div>
                    </div>
                    
                    <div class="d-flex mt-3">
                        <div class="me-3">
                            <i class="fas fa-clock fa-2x text-primary"></i>
                        </div>
                        <div>
                            <h5 class="text-white">On-Time Delivery</h5>
                            <p class="text-light small">Agile methodologies keep projects on schedule and within budget.</p>
                        </div>
                    </div>
                    
                    <div class="d-flex mt-3">
                        <div class="me-3">
                            <i class="fas fa-headset fa-2x text-primary"></i>
                        </div>
                        <div>
                            <h5 class="text-white">24/7 Support</h5>
                            <p class="text-light small">Dedicated support and maintenance to ensure uninterrupted operations.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6" data-aos="fade-left">
                    <div class="ratio ratio-16x9 rounded overflow-hidden shadow-lg" style="border: 1px solid var(--primary-color);">
                        <img src="/images/hero_tech.png" alt="Team Collaboration" class="object-fit-cover">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div ></div>
    <div ></div>

` }} />
    );
}
