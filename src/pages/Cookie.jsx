import React, { useEffect } from 'react';

export default function Cookie() {
    useEffect(() => {
        if (window.AOS) window.AOS.init();
        window.scrollTo(0, 0); // Scroll to top on page load
    }, []);

    return (
        <div dangerouslySetInnerHTML={{ __html: `
    
    <div ></div>

    <section class="page-header pb-5">
        <div class="container" data-aos="fade-up">
            <h1 class="page-title fw-bold">Cookie Policy</h1>

        </div>
    </section>

    <section class="section-padding bg-white pt-5">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-10 policy-content text-muted">
                    <h4 class="text-dark mb-4">1. What Are Cookies</h4>
                    <p>Cookies are small pieces of text sent to your web browser by a website you visit. A cookie file is stored in your web browser and allows the Service or a third-party to recognize you and make your next visit easier and the Service more useful to you.</p>
                </div>
            </div>
        </div>
    </section>

    <div ></div>
    <div ></div>

` }} />
    );
}
