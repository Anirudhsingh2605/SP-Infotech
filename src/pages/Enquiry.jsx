import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Enquiry() {
    const [searchParams] = useSearchParams();
    const positionParam = searchParams.get('position') || '';

    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', subject: positionParam, message: '', experienceYears: '0', experienceMonths: '0'
    });
    const [resumeFile, setResumeFile] = useState(null);
    const [status, setStatus] = useState({ loading: false, success: false, error: null });

    useEffect(() => {
        if (window.AOS) window.AOS.init();
        window.scrollTo(0, 0);
    }, []);

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleFileChange = (e) => {
        setResumeFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, success: false, error: null });

        const submitData = new FormData();
        submitData.append('type', 'CAREER');
        submitData.append('name', formData.name);
        submitData.append('email', formData.email);
        submitData.append('phone', formData.phone);
        submitData.append('subject', formData.subject);
        submitData.append('message', formData.message);
        submitData.append('experienceYears', formData.experienceYears);
        submitData.append('experienceMonths', formData.experienceMonths);
        if (resumeFile) {
            submitData.append('resume', resumeFile);
        }

        try {
            const response = await fetch('http://localhost:8081/api/enquiries', {
                method: 'POST',
                body: submitData
            });

            if (response.ok) {
                setStatus({ loading: false, success: true, error: null });
                setFormData({ name: '', email: '', phone: '', subject: positionParam, message: '', experienceYears: '0', experienceMonths: '0' });
                setResumeFile(null);
                e.target.reset(); // clear file input
            } else {
                setStatus({ loading: false, success: false, error: 'Failed to submit application.' });
            }
        } catch (error) {
            setStatus({ loading: false, success: false, error: 'Network error occurred.' });
        }
    };

    return (
        <div style={{ backgroundColor: '#020c1b', minHeight: '100vh', color: '#fff' }}>
            {/* Page Header */}
            <section className="page-header position-relative overflow-hidden pt-5 pb-5 mt-5">
                <div className="blob blob-1" style={{top: '10%', left: '5%', opacity: '0.15', width: '300px', height: '300px', background: 'var(--primary-color)', borderRadius: '50%', filter: 'blur(80px)'}}></div>
                <div className="container position-relative z-1" data-aos="fade-up">
                    <div className="text-center mb-4">
                        <span className="badge" style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', border: '1px solid rgba(59, 130, 246, 0.2)', padding: '8px 16px', fontWeight: 'bold', borderRadius: '50rem' }}>🚀 JOIN OUR TEAM</span>
                    </div>
                    <h1 className="page-title fw-bolder text-center display-4 mb-3">Job <span className="text-gradient">Application</span></h1>
                    <p className="lead text-center opacity-75 max-w-700 mx-auto mb-4">Take the next step in your career with SP Infotech.</p>
                </div>
            </section>

            {/* Application Form Section */}
            <section className="section-padding position-relative pt-4 pb-5">
                <div className="container">
                    {status.success && (
                        <div className="alert alert-success alert-dismissible fade show mb-5" role="alert">
                            <strong>Success!</strong> Your application has been submitted successfully. We will review it and get back to you soon.
                            <button type="button" className="btn-close" onClick={() => setStatus({...status, success: false})}></button>
                        </div>
                    )}
                    {status.error && (
                        <div className="alert alert-danger alert-dismissible fade show mb-5" role="alert">
                            <strong>Error!</strong> {status.error}
                            <button type="button" className="btn-close" onClick={() => setStatus({...status, error: null})}></button>
                        </div>
                    )}

                    <div className="row justify-content-center">
                        <div className="col-lg-8" data-aos="fade-up">
                            <div className="glass-card p-4 p-md-5 border shadow-lg rounded-4" style={{background: 'rgba(255, 255, 255, 0.03)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.05)'}}>
                                <h3 className="mb-4 fw-bold text-white">Submit Your Application</h3>
                                <form onSubmit={handleSubmit} encType="multipart/form-data">
                                    <div className="mb-4">
                                        <label className="form-label opacity-75 small fw-semibold text-white">Applying For *</label>
                                        <input type="text" className="form-control" name="subject" value={formData.subject} onChange={handleChange} required placeholder="e.g. Shopify Developer" style={{background: 'rgba(255,255,255,0.05)', color: '#fff', border: '1px solid rgba(255,255,255,0.1)'}} readOnly={!!positionParam} />
                                    </div>
                                    
                                    <div className="row">
                                        <div className="col-md-6 mb-4">
                                            <label className="form-label opacity-75 small fw-semibold text-white">Full Name *</label>
                                            <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" style={{background: 'rgba(255,255,255,0.05)', color: '#fff', border: '1px solid rgba(255,255,255,0.1)'}} />
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <label className="form-label opacity-75 small fw-semibold text-white">Email Address *</label>
                                            <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" style={{background: 'rgba(255,255,255,0.05)', color: '#fff', border: '1px solid rgba(255,255,255,0.1)'}} />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6 mb-4">
                                            <label className="form-label opacity-75 small fw-semibold text-white">Years of Experience *</label>
                                            <select className="form-select" name="experienceYears" value={formData.experienceYears} onChange={handleChange} required style={{background: 'rgba(255,255,255,0.05)', color: '#fff', border: '1px solid rgba(255,255,255,0.1)'}}>
                                                {[...Array(21)].map((_, i) => <option key={i} value={i} style={{color: '#000'}}>{i}</option>)}
                                            </select>
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <label className="form-label opacity-75 small fw-semibold text-white">Months of Experience *</label>
                                            <select className="form-select" name="experienceMonths" value={formData.experienceMonths} onChange={handleChange} required style={{background: 'rgba(255,255,255,0.05)', color: '#fff', border: '1px solid rgba(255,255,255,0.1)'}}>
                                                {[...Array(12)].map((_, i) => <option key={i} value={i} style={{color: '#000'}}>{i}</option>)}
                                            </select>
                                        </div>
                                    </div>
                                    
                                    <div className="row">
                                        <div className="col-md-6 mb-4">
                                            <label className="form-label opacity-75 small fw-semibold text-white">Phone Number *</label>
                                            <input type="tel" className="form-control" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+91 98765 43210" style={{background: 'rgba(255,255,255,0.05)', color: '#fff', border: '1px solid rgba(255,255,255,0.1)'}} />
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <label className="form-label opacity-75 small fw-semibold text-white">Upload Resume (PDF/DOCX) *</label>
                                            <input type="file" className="form-control" name="resumeFile" accept=".pdf,.doc,.docx" onChange={handleFileChange} required style={{background: 'rgba(255,255,255,0.05)', color: '#fff', border: '1px solid rgba(255,255,255,0.1)'}} />
                                        </div>
                                    </div>
                                    
                                    <div className="mb-4">
                                        <label className="form-label opacity-75 small fw-semibold text-white">Cover Letter / Message</label>
                                        <textarea className="form-control" name="message" rows="4" value={formData.message} onChange={handleChange} placeholder="Tell us why you are a great fit for this role..." style={{background: 'rgba(255,255,255,0.05)', color: '#fff', border: '1px solid rgba(255,255,255,0.1)'}}></textarea>
                                    </div>
                                    
                                    <button type="submit" className="btn btn-primary rounded-pill px-5 py-3 fw-bold w-100 hover-lift" disabled={status.loading}>
                                        {status.loading ? 'Submitting...' : 'Submit Application'} <i className="fas fa-paper-plane ms-2"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
