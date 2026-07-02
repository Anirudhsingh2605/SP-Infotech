import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Settings() {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const sidebarStyle = {
        width: '260px',
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #0a192f 0%, #020c1b 100%)',
        borderRight: '1px solid rgba(255,255,255,0.05)',
        position: 'fixed',
        top: 0,
        left: 0,
        display: 'flex',
        flexDirection: 'column'
    };

    const linkStyle = {
        padding: '15px 25px',
        color: '#a8b2d1',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        fontSize: '15px',
        fontWeight: '500',
        transition: 'all 0.3s ease',
        borderLeft: '3px solid transparent'
    };

    const activeLinkStyle = {
        ...linkStyle,
        color: '#10b981',
        background: 'rgba(16, 185, 129, 0.1)',
        borderLeft: '3px solid #10b981'
    };

    const cardStyle = {
        background: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        borderRadius: '16px',
        padding: '40px'
    };

    const inputStyle = {
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        color: '#fff',
        borderRadius: '8px',
        padding: '12px 15px'
    };

    return (
        <div style={{ backgroundColor: '#020c1b', minHeight: '100vh', color: '#fff' }}>
            {/* Sidebar */}
            <div style={sidebarStyle}>
                <div style={{ padding: '30px 25px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <h3 style={{ margin: 0, color: '#fff', fontWeight: 700, letterSpacing: '1px' }}>
                        <span style={{ color: '#D4AF37' }}>SP</span> Admin
                    </h3>
                </div>
                <div style={{ padding: '20px 0', flexGrow: 1 }}>
                    <a href="#/" onClick={(e) => { e.preventDefault(); navigate('/admin/dashboard'); }} style={linkStyle}>
                        <i className="fas fa-border-all"></i> Dashboard
                    </a>
                    <a href="#/" onClick={(e) => { e.preventDefault(); navigate('/admin/enquiries'); }} style={linkStyle}>
                        <i className="fas fa-envelope-open-text"></i> Enquiries
                    </a>
                    <a href="#/" onClick={(e) => { e.preventDefault(); navigate('/admin/settings'); }} style={activeLinkStyle}>
                        <i className="fas fa-sliders-h"></i> Settings
                    </a>
                    <a href="#/" onClick={(e) => { e.preventDefault(); navigate('/admin/jobs'); }} style={linkStyle}>
                        <i className="fas fa-briefcase"></i> Manage Jobs
                    </a>
                    <a href="#/" onClick={(e) => { e.preventDefault(); navigate('/admin/credentials'); }} style={linkStyle}>
                        <i className="fas fa-shield-alt"></i> Credentials
                    </a>
                </div>
                <div style={{ padding: '25px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    <button onClick={() => navigate('/')} className="btn w-100" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', borderRadius: '8px', padding: '10px' }}>
                        <i className="fas fa-globe me-2"></i> View Website
                    </button>
                    <button onClick={() => navigate('/login', { state: { message: 'You have been logged out.' } })} className="btn w-100 mt-3" style={{ background: 'rgba(220, 53, 69, 0.1)', border: '1px solid rgba(220, 53, 69, 0.3)', color: '#ff4d4f', borderRadius: '8px', padding: '10px' }}>
                        <i className="fas fa-sign-out-alt me-2"></i> Logout
                    </button>
                </div>
            </div>

            {/* Main Content Area */}
            <div style={{ marginLeft: '260px', padding: '40px 50px' }}>
                <div className="mb-5">
                    <h2 className="fw-bold mb-2" style={{ color: '#fff', fontSize: '2.5rem' }}>Site Settings</h2>
                    <p style={{ color: '#a8b2d1', fontSize: '1.1rem' }}>Manage global configuration and contact details.</p>
                </div>

                <div style={cardStyle}>
                    <form onSubmit={(e) => { e.preventDefault(); alert("Settings saved successfully!"); }}>
                        <h4 className="fw-bold mb-4 text-white border-bottom border-secondary pb-3">Contact Information</h4>
                        <div className="row g-4 mb-5">
                            <div className="col-md-6">
                                <label className="form-label text-muted small fw-semibold">Contact Email</label>
                                <input type="email" className="form-control" style={inputStyle} defaultValue="livehitesh126@gmail.com" />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label text-muted small fw-semibold">Contact Phone</label>
                                <input type="text" className="form-control" style={inputStyle} defaultValue="+91 78980 91357" />
                            </div>
                            <div className="col-12">
                                <label className="form-label text-muted small fw-semibold">Office Address</label>
                                <textarea className="form-control" rows="3" style={inputStyle} defaultValue="123 Tech Boulevard, Innovation City, NY 10001, USA"></textarea>
                            </div>
                        </div>

                        <h4 className="fw-bold mb-4 text-white border-bottom border-secondary pb-3">Social Media Links</h4>
                        <div className="row g-4 mb-5">
                            <div className="col-md-6">
                                <label className="form-label text-muted small fw-semibold"><i className="fab fa-facebook me-2 text-primary"></i>Facebook URL</label>
                                <input type="url" className="form-control" style={inputStyle} defaultValue="https://facebook.com/" />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label text-muted small fw-semibold"><i className="fab fa-twitter me-2 text-info"></i>Twitter URL</label>
                                <input type="url" className="form-control" style={inputStyle} defaultValue="https://twitter.com/" />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label text-muted small fw-semibold"><i className="fab fa-linkedin me-2 text-primary"></i>LinkedIn URL</label>
                                <input type="url" className="form-control" style={inputStyle} defaultValue="https://linkedin.com/" />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label text-muted small fw-semibold"><i className="fab fa-instagram me-2 text-danger"></i>Instagram URL</label>
                                <input type="url" className="form-control" style={inputStyle} defaultValue="https://instagram.com/" />
                            </div>
                        </div>
                        
                        <div className="d-flex justify-content-end mt-4 pt-3 border-top border-secondary">
                            <button type="submit" className="btn px-5 py-3 fw-bold" style={{ background: '#10b981', color: '#fff', borderRadius: '8px' }}>
                                <i className="fas fa-save me-2"></i> Save Changes
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
