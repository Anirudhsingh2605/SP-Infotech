import React, { useEffect } from 'react';

export default function Blog() {
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
            <h1 class="page-title fw-bold">Our Blog</h1>

        </div>
    </section>

    <!-- Blog Section -->
    <section class="section-padding bg-white">
        <div class="container">
            <div class="row">
                <!-- Main Content -->
                <div class="col-lg-8">
                    <!-- Blog Post 1 -->
                    <article class="mb-5 border-bottom pb-4" data-aos="fade-up">
                        <img src="/images/web_dev.png" alt="Blog Post" class="img-fluid rounded mb-4">
                        <div class="d-flex text-muted small mb-3">
                            <span class="me-3"><i class="fas fa-calendar-alt me-2"></i> July 1, 2026</span>
                            <span class="me-3"><i class="fas fa-folder me-2"></i> Web Development</span>
                            <span><i class="fas fa-comments me-2"></i> 12 Comments</span>
                        </div>
                        <h3 class="mb-3"><a href="#" class="text-dark text-decoration-none hover-primary">The Future of Java Spring Boot in Microservices</a></h3>
                        <p class="text-muted mb-4">Explore how Spring Boot 3.x is revolutionizing the way we build and deploy microservices in cloud-native environments.</p>
                        <a href="#" class="btn btn-outline-primary btn-sm">Read More</a>
                    </article>
                    
                    <!-- Blog Post 2 -->
                    <article class="mb-5 border-bottom pb-4" data-aos="fade-up">
                        <img src="/images/hero_tech.png" alt="Blog Post" class="img-fluid rounded mb-4">
                        <div class="d-flex text-muted small mb-3">
                            <span class="me-3"><i class="fas fa-calendar-alt me-2"></i> June 25, 2026</span>
                            <span class="me-3"><i class="fas fa-folder me-2"></i> E-Commerce</span>
                            <span><i class="fas fa-comments me-2"></i> 8 Comments</span>
                        </div>
                        <h3 class="mb-3"><a href="#" class="text-dark text-decoration-none hover-primary">10 Tips for Optimizing Your Shopify Store Speed</a></h3>
                        <p class="text-muted mb-4">Slow load times kill conversions. Learn our top ten actionable tips to reduce page load time on your Shopify store.</p>
                        <a href="#" class="btn btn-outline-primary btn-sm">Read More</a>
                    </article>

                    <!-- Pagination -->
                    <nav aria-label="Blog pagination" class="mt-5">
                        <ul class="pagination justify-content-center">
                            <li class="page-item disabled"><a class="page-link" href="#" tabindex="-1">Previous</a></li>
                            <li class="page-item active"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item"><a class="page-link" href="#">Next</a></li>
                        </ul>
                    </nav>
                </div>
                
                <!-- Sidebar -->
                <div class="col-lg-4 mt-5 mt-lg-0">
                    <!-- Search Widget -->
                    <div class="card border-0 shadow-sm mb-4" data-aos="fade-left">
                        <div class="card-body p-4">
                            <h5 class="card-title mb-3">Search</h5>
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Search blog...">
                                <button class="btn btn-primary" type="button"><i class="fas fa-search"></i></button>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Categories Widget -->
                    <div class="card border-0 shadow-sm mb-4" data-aos="fade-left" data-aos-delay="100">
                        <div class="card-body p-4">
                            <h5 class="card-title mb-3">Categories</h5>
                            <ul class="list-unstyled mb-0">
                                <li class="mb-2"><a href="#" class="text-muted text-decoration-none hover-primary d-flex justify-content-between"><span>Web Development</span> <span>(15)</span></a></li>
                                <li class="mb-2"><a href="#" class="text-muted text-decoration-none hover-primary d-flex justify-content-between"><span>Shopify</span> <span>(8)</span></a></li>
                                <li class="mb-2"><a href="#" class="text-muted text-decoration-none hover-primary d-flex justify-content-between"><span>QA Testing</span> <span>(12)</span></a></li>
                                <li class="mb-2"><a href="#" class="text-muted text-decoration-none hover-primary d-flex justify-content-between"><span>SEO & Marketing</span> <span>(5)</span></a></li>
                            </ul>
                        </div>
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
