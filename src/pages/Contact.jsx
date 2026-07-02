import React, { useState, useEffect } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', subject: '', message: ''
    });
    const [status, setStatus] = useState({ loading: false, success: false, error: null });

    useEffect(() => {
        if (window.AOS) window.AOS.init();
        window.scrollTo(0, 0);
    }, []);

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, success: false, error: null });

        try {
            const response = await fetch('http://localhost:8081/api/enquiries', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ type: 'CONTACT', ...formData })
            });

            if (response.ok) {
                setStatus({ loading: false, success: true, error: null });
                setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
            } else {
                setStatus({ loading: false, success: false, error: 'Failed to send message.' });
            }
        } catch (error) {
            setStatus({ loading: false, success: false, error: 'Network error occurred.' });
        }
    };

    return (
        <div>
            {/* Page Header */}
            <section className="page-header">
                <div className="container" data-aos="fade-up">
                    <h1 className="page-title fw-bold">Contact Us</h1>
                </div>
            </section>

            {/* Contact Info & Form */}
            <section className="section-padding bg-white">
                <div className="container">
                    {status.success && (
                        <div className="alert alert-success alert-dismissible fade show mb-5" role="alert">
                            <strong>Success!</strong> Your message has been sent successfully. We will contact you soon.
                            <button type="button" className="btn-close" onClick={() => setStatus({...status, success: false})}></button>
                        </div>
                    )}
                    {status.error && (
                        <div className="alert alert-danger alert-dismissible fade show mb-5" role="alert">
                            <strong>Error!</strong> {status.error}
                            <button type="button" className="btn-close" onClick={() => setStatus({...status, error: null})}></button>
                        </div>
                    )}

                    <div className="row">
                        {/* Contact Information */}
                        <div className="col-lg-5 mb-5 mb-lg-0" data-aos="fade-right">
                            <h2 className="mb-4">Get In Touch</h2>
                            <p className="text-muted mb-5">Have a project in mind or need assistance? Reach out to us via phone, email, or by filling out the form.</p>
                            
                            <div className="d-flex align-items-center mb-4">
                                <div className="bg-light p-3 rounded-circle me-3">
                                    <i className="fas fa-map-marker-alt text-primary fa-2x"></i>
                                </div>
                                <div>
                                    <h5 className="mb-1">Our Office</h5>
                                    <p className="text-muted mb-0">123 Tech Boulevard, Innovation City, NY 10001, USA</p>
                                </div>
                            </div>
                            
                            <div className="d-flex align-items-center mb-4">
                                <div className="bg-light p-3 rounded-circle me-3">
                                    <i className="fas fa-envelope text-primary fa-2x"></i>
                                </div>
                                <div>
                                    <h5 className="mb-1">Email Us</h5>
                                    <p className="text-muted mb-0"><a href="mailto:livehitesh126@gmail.com" className="text-muted text-decoration-none hover-primary">livehitesh126@gmail.com</a></p>
                                </div>
                            </div>
                            
                            <div className="d-flex align-items-center mb-4">
                                <div className="bg-light p-3 rounded-circle me-3">
                                    <i className="fas fa-phone-alt text-primary fa-2x"></i>
                                </div>
                                <div>
                                    <h5 className="mb-1">Call Us</h5>
                                    <p className="text-muted mb-0"><a href="tel:+917898091357" className="text-muted text-decoration-none hover-primary">+91 78980 91357</a></p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Contact Form */}
                        <div className="col-lg-7" data-aos="fade-left">
                            <div className="glass-card p-5 border shadow-sm" style={{background: 'rgba(255,255,255,0.9)'}}>
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-4 mb-3">
                                            <label className="form-label text-muted small">Your Name</label>
                                            <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label className="form-label text-muted small">Your Email</label>
                                            <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label className="form-label text-muted small">Your Phone</label>
                                            <input type="tel" className="form-control" name="phone" value={formData.phone} onChange={handleChange} required />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label text-muted small">Subject</label>
                                        <input type="text" className="form-control" name="subject" value={formData.subject} onChange={handleChange} required />
                                    </div>
                                    <div className="mb-4">
                                        <label className="form-label text-muted small">Message</label>
                                        <textarea className="form-control" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary w-100" disabled={status.loading}>
                                        {status.loading ? 'Sending...' : 'Send Message'}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Google Map */}
            <section className="p-0">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1680000000000!5m2!1sen!2s" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </section>
        </div>
    );
}
