import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Credentials() {
    const navigate = useNavigate();
    const [status, setStatus] = useState(null);

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
        color: '#8b5cf6',
        background: 'rgba(139, 92, 246, 0.1)',
        borderLeft: '3px solid #8b5cf6'
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

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("success");
        setTimeout(() => setStatus(null), 3000);
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
                    <a href="#/" onClick={(e) => { e.preventDefault(); navigate('/admin/settings'); }} style={linkStyle}>
                        <i className="fas fa-sliders-h"></i> Settings
                    </a>
                    <a href="#/" onClick={(e) => { e.preventDefault(); navigate('/admin/jobs'); }} style={linkStyle}>
                        <i className="fas fa-briefcase"></i> Manage Jobs
                    </a>
                    <a href="#/" onClick={(e) => { e.preventDefault(); navigate('/admin/credentials'); }} style={activeLinkStyle}>
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
                    <h2 className="fw-bold mb-2" style={{ color: '#fff', fontSize: '2.5rem' }}>Security Credentials</h2>
                    <p style={{ color: '#a8b2d1', fontSize: '1.1rem' }}>Update your administrator username and password.</p>
                </div>

                <div className="row">
                    <div className="col-lg-8">
                        <div style={cardStyle}>
                            {status === "success" && (
                                <div className="alert alert-success alert-dismissible fade show mb-4" role="alert" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                                    <i className="fas fa-check-circle me-2"></i> Credentials updated successfully! You will need to use the new credentials on your next login.
                                </div>
                            )}
                            
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label className="form-label text-muted small fw-semibold">Admin Username</label>
                                    <input type="text" className="form-control" style={inputStyle} defaultValue="admin" required />
                                </div>
                                <div className="mb-4">
                                    <label className="form-label text-muted small fw-semibold">Current Password</label>
                                    <input type="password" className="form-control" style={inputStyle} placeholder="Enter your current password to verify" required />
                                </div>
                                
                                <hr style={{ borderColor: 'rgba(255,255,255,0.1)', margin: '30px 0' }} />
                                
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <label className="form-label text-muted small fw-semibold">New Password</label>
                                        <input type="password" className="form-control" style={inputStyle} placeholder="Leave blank to keep current" />
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <label className="form-label text-muted small fw-semibold">Confirm New Password</label>
                                        <input type="password" className="form-control" style={inputStyle} placeholder="Confirm new password" />
                                    </div>
                                </div>

                                <div className="alert mt-3" style={{ background: 'rgba(212, 175, 55, 0.1)', border: '1px solid rgba(212, 175, 55, 0.3)', color: '#D4AF37', fontSize: '0.9rem' }}>
                                    <i className="fas fa-exclamation-triangle me-2"></i> <strong>Warning:</strong> Changing your password will log out all currently active sessions except this one.
                                </div>

                                <div className="mt-4 pt-3 text-end">
                                    <button type="submit" className="btn px-5 py-3 fw-bold" style={{ background: '#8b5cf6', color: '#fff', borderRadius: '8px' }}>
                                        <i className="fas fa-key me-2"></i> Update Credentials
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
