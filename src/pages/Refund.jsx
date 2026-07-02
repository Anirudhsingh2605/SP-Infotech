import React, { useEffect } from 'react';

export default function Refund() {
    useEffect(() => {
        if (window.AOS) window.AOS.init();
        window.scrollTo(0, 0); // Scroll to top on page load
    }, []);

    return (
        <div dangerouslySetInnerHTML={{ __html: `
    
    <div ></div>

    <section class="page-header pb-5">
        <div class="container" data-aos="fade-up">
            <h1 class="page-title fw-bold">Refund Policy</h1>

        </div>
    </section>

    <section class="section-padding bg-white pt-5">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-10 policy-content text-muted">
                    <h4 class="text-dark mb-4">1. General Policy</h4>
                    <p>Due to the nature of software development and IT consulting services, we generally do not offer refunds once work has commenced and milestones are met, unless specified in a separate contract.</p>
                </div>
            </div>
        </div>
    </section>

    <div ></div>
    <div ></div>

` }} />
    );
}
