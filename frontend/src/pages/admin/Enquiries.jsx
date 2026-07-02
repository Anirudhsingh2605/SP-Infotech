import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminEnquiries() {
    const navigate = useNavigate();
    const [enquiries, setEnquiries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchEnquiries();
    }, []);

    const fetchEnquiries = async () => {
        try {
            const res = await fetch('http://localhost:8081/api/enquiries');
            const data = await res.json();
            if (data.success) {
                setEnquiries(data.data);
            }
        } catch (error) {
            console.error('Error fetching enquiries', error);
        } finally {
            setLoading(false);
        }
    };

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
        color: '#3b82f6',
        background: 'rgba(59, 130, 246, 0.1)',
        borderLeft: '3px solid #3b82f6'
    };

    const tableContainerStyle = {
        background: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        borderRadius: '16px',
        padding: '30px',
        overflowX: 'auto'
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
                    <a href="#/" onClick={(e) => { e.preventDefault(); navigate('/admin/enquiries'); }} style={activeLinkStyle}>
                        <i className="fas fa-envelope-open-text"></i> Enquiries
                    </a>
                    <a href="#/" onClick={(e) => { e.preventDefault(); navigate('/admin/settings'); }} style={linkStyle}>
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
                <div className="d-flex justify-content-between align-items-center mb-5">
                    <div>
                        <h2 className="fw-bold mb-2" style={{ color: '#fff', fontSize: '2.5rem' }}>View Enquiries</h2>
                        <p style={{ color: '#a8b2d1', fontSize: '1.1rem' }}>Check messages from Contact form and Job Applications.</p>
                    </div>
                </div>

                <div style={tableContainerStyle}>
                    {loading ? (
                        <div className="text-center py-5">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    ) : enquiries.length === 0 ? (
                        <div className="text-center py-5">
                            <i className="fas fa-inbox fa-3x mb-3" style={{ color: '#a8b2d1' }}></i>
                            <h4 style={{ color: '#fff' }}>No Enquiries Found</h4>
                            <p style={{ color: '#a8b2d1' }}>You don't have any contact messages or job applications yet.</p>
                        </div>
                    ) : (
                        <table className="table table-dark table-hover table-borderless" style={{ background: 'transparent' }}>
                            <thead style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                                <tr>
                                    <th style={{ color: '#a8b2d1', fontWeight: '500', padding: '15px' }}>Type</th>
                                    <th style={{ color: '#a8b2d1', fontWeight: '500', padding: '15px' }}>Date</th>
                                    <th style={{ color: '#a8b2d1', fontWeight: '500', padding: '15px' }}>Name</th>
                                    <th style={{ color: '#a8b2d1', fontWeight: '500', padding: '15px' }}>Contact Details</th>
                                    <th style={{ color: '#a8b2d1', fontWeight: '500', padding: '15px' }}>Subject</th>
                                    <th style={{ color: '#a8b2d1', fontWeight: '500', padding: '15px' }}>Message</th>
                                    <th style={{ color: '#a8b2d1', fontWeight: '500', padding: '15px' }}>Attachment</th>
                                </tr>
                            </thead>
                            <tbody>
                                {enquiries.map((enq) => (
                                    <tr key={enq.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                        <td style={{ padding: '15px' }}>
                                            {enq.type === 'CAREER' ? (
                                                <span className="badge" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', border: '1px solid rgba(16, 185, 129, 0.2)' }}>Job Application</span>
                                            ) : (
                                                <span className="badge" style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', border: '1px solid rgba(59, 130, 246, 0.2)' }}>Contact Form</span>
                                            )}
                                        </td>
                                        <td style={{ padding: '15px', color: '#fff' }}>{new Date(enq.createdAt).toLocaleDateString()}</td>
                                        <td style={{ padding: '15px', color: '#fff', fontWeight: '600' }}>{enq.name}</td>
                                        <td style={{ padding: '15px' }}>
                                            <div style={{ color: '#fff' }}><i className="fas fa-envelope text-muted me-2"></i>{enq.email}</div>
                                            <div style={{ color: '#a8b2d1', fontSize: '0.9rem', marginTop: '4px' }}><i className="fas fa-phone text-muted me-2"></i>{enq.phone}</div>
                                        </td>
                                        <td style={{ padding: '15px', color: '#fff' }}>{enq.subject}</td>
                                        <td style={{ padding: '15px', color: '#a8b2d1', maxWidth: '300px' }}>
                                            {(enq.experienceYears || enq.experienceMonths) && (
                                                <div style={{ marginBottom: '8px' }}>
                                                    <span className="badge bg-success bg-opacity-10 text-success border border-success border-opacity-25 px-2 py-1">
                                                        <i className="fas fa-star me-1"></i> 
                                                        {enq.experienceYears} Years, {enq.experienceMonths} Months Exp
                                                    </span>
                                                </div>
                                            )}
                                            <div style={{ maxHeight: '60px', overflowY: 'auto', fontSize: '0.9rem' }}>
                                                {enq.message}
                                            </div>
                                        </td>
                                        <td style={{ padding: '15px' }}>
                                            {enq.resumePath ? (
                                                <a href={`http://localhost:8081${enq.resumePath}`} target="_blank" rel="noopener noreferrer" className="btn btn-sm" style={{ background: 'rgba(212, 175, 55, 0.1)', color: '#D4AF37', border: '1px solid rgba(212, 175, 55, 0.3)' }}>
                                                    <i className="fas fa-file-download me-1"></i> View Resume
                                                </a>
                                            ) : (
                                                <span className="text-muted small">-</span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
}
