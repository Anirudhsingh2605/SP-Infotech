import React from 'react';
export default function Header() {
    return <div dangerouslySetInnerHTML={{ __html: `<header th:fragment="header">
        <!-- Page Loader -->
        <div id="loader-wrapper">
            <div class="loader"></div>
        </div>

        <!-- Navbar -->
        <nav class="navbar navbar-expand-lg fixed-top">
            <div class="container">
                <a class="navbar-brand" href="/">
                    <span class="text-white">SP</span> <span>Infotech</span>
                </a>
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/about">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/services">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/portfolio">Portfolio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blog">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/contact">Contact</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/careers">Carrier</a>
                        </li>
                    </ul>
                    
                    <div class="d-flex align-items-center">
                        <button id="theme-toggle" class="theme-toggle me-3" aria-label="Toggle Dark Mode" style="display:none;">
                            <i class="fas fa-moon"></i>
                        </button>
                        <a href="/login" class="btn btn-outline-light me-2 d-none d-lg-block">
                            <i class="fas fa-lock"></i> Admin
                        </a>
                        <a href="https://wa.me/917898091357?text=Hi%2C%20I%20would%20like%20to%20get%20a%20free%20consultation%20for%20my%20business." target="_blank" rel="noopener noreferrer" class="btn btn-primary d-flex align-items-center gap-2">
                            <span style="color: #25d366;">🟢</span> Get Free Consultation
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    </header>` }} />;
}
