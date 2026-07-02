import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Careers() {
    const navigate = useNavigate();
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (window.AOS) window.AOS.init();
        window.scrollTo(0, 0); // Scroll to top on page load
        fetchJobs();
    }, []);

    const fetchJobs = async () => {
        try {
            const res = await fetch('http://localhost:8081/api/jobs');
            const data = await res.json();
            if (data.success) {
                setJobs(data.data);
            }
        } catch (error) {
            console.error('Error fetching jobs', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            {/* Page Header */}
            <section className="page-header">
                <div className="container" data-aos="fade-up">
                    <h1 className="page-title fw-bold">Careers</h1>
                </div>
            </section>

            {/* Current Openings */}
            <section className="section-padding position-relative pt-5 pb-5" style={{ backgroundColor: '#020c1b' }}>
                {/* Background Accents */}
                <div className="blob blob-1" style={{top: '-5%', right: '10%', opacity: '0.1', width: '400px', height: '400px', background: 'var(--secondary-color, #7C3AED)', borderRadius: '50%', filter: 'blur(100px)'}}></div>
                <div className="container position-relative z-1">
                    <div className="text-center mb-5" data-aos="fade-up">
                        <h2 className="display-5 fw-bolder mb-3 text-white">Build Your <span className="text-gradient">Career</span> with SP Infotech</h2>
                        <p className="lead text-white opacity-75 max-w-700 mx-auto">Join our growing team of professionals and work on exciting projects in web development, eCommerce, and digital marketing. We're looking for passionate individuals who are eager to learn, innovate, and grow with us.</p>
                    </div>
                    
                    <div className="row g-4">
                        {loading ? (
                            <div className="col-12 text-center py-5">
                                <div className="spinner-border text-primary" role="status"></div>
                            </div>
                        ) : jobs.length === 0 ? (
                            <div className="col-12 text-center py-5">
                                <i className="fas fa-briefcase fa-4x text-white opacity-25 mb-3"></i>
                                <h4 className="text-white">No open positions at the moment.</h4>
                                <p className="text-white opacity-75">Please check back later or send us a general inquiry.</p>
                            </div>
                        ) : (
                            jobs.map((job, index) => (
                                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={index * 100} key={job.id}>
                                    <div className="glass-card p-4 border border-light border-opacity-10 shadow-sm h-100 d-flex flex-column rounded-4 hover-lift" style={{background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)'}}>
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="bg-warning bg-opacity-25 p-3 rounded-circle text-warning me-3" style={{width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                                <i className="fas fa-briefcase fa-2x"></i>
                                            </div>
                                            <h4 className="fw-bold mb-0 text-white">{job.title}</h4>
                                        </div>
                                        <div className="d-flex flex-wrap gap-2 mb-3">
                                            <span className="badge" style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', border: '1px solid rgba(59, 130, 246, 0.2)', padding: '6px 10px', fontWeight: '500' }}>
                                                <i className="fas fa-briefcase me-1"></i> {job.jobType}
                                            </span>
                                            <span className="badge" style={{ background: 'rgba(139, 92, 246, 0.1)', color: '#8b5cf6', border: '1px solid rgba(139, 92, 246, 0.2)', padding: '6px 10px', fontWeight: '500' }}>
                                                <i className="fas fa-map-marker-alt me-1"></i> {job.location}
                                            </span>
                                            {job.experience && (
                                                <span className="badge" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', border: '1px solid rgba(16, 185, 129, 0.2)', padding: '6px 10px', fontWeight: '500' }}>
                                                    <i className="fas fa-star me-1"></i> {job.experience}
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-white opacity-75 small mb-4 flex-grow-1">{job.description.length > 150 ? job.description.substring(0, 150) + '...' : job.description}</p>
                                        <button onClick={() => navigate(`/enquiry?position=${encodeURIComponent(job.title)}`)} className="btn btn-outline-primary rounded-pill fw-bold w-100 hover-glow">
                                            Apply Now <i className="fas fa-arrow-right ms-1"></i>
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
