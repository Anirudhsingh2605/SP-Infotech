import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Blog from './pages/Blog';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Cookie from './pages/Cookie';
import Enquiry from './pages/Enquiry';
import Home from './pages/Home';
import Login from './pages/Login';
import Portfolio from './pages/Portfolio';
import Pricing from './pages/Pricing';
import Privacy from './pages/Privacy';
import Refund from './pages/Refund';
import Services from './pages/Services';
import Terms from './pages/Terms';
import AdminDashboard from './pages/admin/Dashboard';
import AdminEnquiries from './pages/admin/Enquiries';
import AdminSettings from './pages/admin/Settings';
import AdminCredentials from './pages/admin/Credentials';
import AdminJobs from './pages/admin/Jobs';


function GlobalRouter() {
    const navigate = useNavigate();
    
    useEffect(() => {
        // Intercept all clicks on internal links to use React Router navigation
        const handleClick = (e) => {
            const a = e.target.closest('a');
            if (a && a.href && a.href.startsWith(window.location.origin) && !a.hasAttribute('target')) {
                e.preventDefault();
                const path = a.href.replace(window.location.origin, '');
                navigate(path);
            }
        };
        document.addEventListener('click', handleClick);
        
        // Hide loader
        const loader = document.getElementById('loader-wrapper');
        if (loader) loader.style.display = 'none';

        // Bind existing JS
        const script = document.createElement('script');
        script.src = '/js/main.js?v=' + Date.now();
        document.body.appendChild(script);

        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, [navigate]);

    return null;
}

function AppContent() {
    const location = useLocation();
    const isAuthRoute = location.pathname.startsWith('/login') || location.pathname.startsWith('/admin');

    return (
        <>
            <GlobalRouter />
            {!isAuthRoute && <Header />}
            <div style={{minHeight: '80vh', paddingTop: isAuthRoute ? '0' : '0'}}>
                <Routes>
                    <Route path="/about" element={<About />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/cookie" element={<Cookie />} />
                    <Route path="/enquiry" element={<Enquiry />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/refund" element={<Refund />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/admin/dashboard" element={<AdminDashboard />} />
                    <Route path="/admin/enquiries" element={<AdminEnquiries />} />
                    <Route path="/admin/settings" element={<AdminSettings />} />
                    <Route path="/admin/jobs" element={<AdminJobs />} />
                    <Route path="/admin/credentials" element={<AdminCredentials />} />
                </Routes>
            </div>
            {!isAuthRoute && <Footer />}
        </>
    );
}

export default function App() {
    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    );
}
