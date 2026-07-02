import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
    const navigate = useNavigate();
    const [stats, setStats] = useState({ jobs: 0, enquiries: 0, loading: true });

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchStats();
    }, []);

    const fetchStats = async () => {
        try {
            const [jobsRes, enqRes] = await Promise.all([
                fetch('http://localhost:8081/api/jobs'),
                fetch('http://localhost:8081/api/enquiries')
            ]);
            const jobsData = await jobsRes.json();
            const enqData = await enqRes.json();
            
            setStats({
                jobs: jobsData.success ? jobsData.data.length : 0,
                enquiries: enqData.success ? enqData.data.length : 0,
                loading: false
            });
        } catch (error) {
            console.error('Error fetching dashboard stats', error);
            setStats(prev => ({ ...prev, loading: false }));
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
        color: '#D4AF37',
        background: 'rgba(212, 175, 55, 0.1)',
        borderLeft: '3px solid #D4AF37'
    };

    const cardStyle = {
        background: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        borderRadius: '16px',
        padding: '30px',
        height: '100%',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'pointer'
    };

    const handleCardHover = (e, isHover) => {
        if (isHover) {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.4)';
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
        } else {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
        }
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
                    <a href="#/" onClick={(e) => { e.preventDefault(); navigate('/admin/dashboard'); }} style={activeLinkStyle}>
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
                    <a href="#/" onClick={(e) => { e.preventDefault(); navigate('/admin/credentials'); }} style={linkStyle}>
                        <i className="fas fa-shield-alt"></i> Credentials
                    </a>
                </div>
                <div style={{ padding: '25px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    <button 
                        onClick={() => navigate('/')} 
                        className="btn w-100" 
                        style={{ 
                            background: 'transparent', 
                            border: '1px solid rgba(255,255,255,0.2)', 
                            color: '#fff', 
                            borderRadius: '8px',
                            padding: '10px'
                        }}
                    >
                        <i className="fas fa-globe me-2"></i> View Website
                    </button>
                    <button 
                        onClick={() => navigate('/login', { state: { message: 'You have been logged out.' } })} 
                        className="btn w-100 mt-3" 
                        style={{ 
                            background: 'rgba(220, 53, 69, 0.1)', 
                            border: '1px solid rgba(220, 53, 69, 0.3)', 
                            color: '#ff4d4f', 
                            borderRadius: '8px',
                            padding: '10px'
                        }}
                    >
                        <i className="fas fa-sign-out-alt me-2"></i> Logout
                    </button>
                </div>
            </div>

            {/* Main Content Area */}
            <div style={{ marginLeft: '260px', padding: '40px 50px' }}>
                <div className="d-flex justify-content-between align-items-center mb-5">
                    <div>
                        <h2 className="fw-bold mb-2" style={{ color: '#fff', fontSize: '2.5rem' }}>Overview</h2>
                        <p style={{ color: '#a8b2d1', fontSize: '1.1rem' }}>Welcome back to the SP Infotech control panel.</p>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                        <div style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'linear-gradient(135deg, #D4AF37, #b5952f)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontWeight: 'bold', fontSize: '1.2rem' }}>
                            A
                        </div>
                        <div>
                            <div style={{ fontWeight: '600', color: '#fff' }}>Admin</div>
                            <div style={{ fontSize: '0.8rem', color: '#a8b2d1' }}>Super User</div>
                        </div>
                    </div>
                </div>

                {/* Dashboard Cards */}
                <div className="row g-4">
                    <div className="col-md-6 col-lg-3">
                        <div 
                            style={cardStyle} 
                            onClick={() => navigate('/admin/settings')}
                            onMouseEnter={(e) => handleCardHover(e, true)}
                            onMouseLeave={(e) => handleCardHover(e, false)}
                        >
                            <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(212, 175, 55, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D4AF37', fontSize: '1.5rem', marginBottom: '20px' }}>
                                <i className="fas fa-sliders-h"></i>
                            </div>
                            <h4 style={{ color: '#fff', fontWeight: '600', marginBottom: '10px' }}>Site Settings</h4>
                            <p style={{ color: '#a8b2d1', fontSize: '0.95rem', margin: 0, lineHeight: '1.6' }}>Update global contact details, phone, email, and social links.</p>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3">
                        <div 
                            style={cardStyle} 
                            onClick={() => navigate('/admin/jobs')}
                            onMouseEnter={(e) => handleCardHover(e, true)}
                            onMouseLeave={(e) => handleCardHover(e, false)}
                        >
                            <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981', fontSize: '1.5rem', marginBottom: '20px' }}>
                                <i className="fas fa-briefcase"></i>
                            </div>
                            <h4 style={{ color: '#fff', fontWeight: '600', marginBottom: '10px' }}>Manage Jobs</h4>
                            <p style={{ color: '#a8b2d1', fontSize: '0.95rem', margin: 0, lineHeight: '1.6' }}>Add, edit, or delete job postings shown on the Careers page.</p>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3">
                        <div 
                            style={cardStyle} 
                            onClick={() => navigate('/admin/enquiries')}
                            onMouseEnter={(e) => handleCardHover(e, true)}
                            onMouseLeave={(e) => handleCardHover(e, false)}
                        >
                            <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(59, 130, 246, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6', fontSize: '1.5rem', marginBottom: '20px' }}>
                                <i className="fas fa-envelope-open-text"></i>
                            </div>
                            <h4 style={{ color: '#fff', fontWeight: '600', marginBottom: '10px' }}>Enquiries</h4>
                            <p style={{ color: '#a8b2d1', fontSize: '0.95rem', margin: 0, lineHeight: '1.6' }}>Check messages from Contact form and Job Applications.</p>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3">
                        <div 
                            style={cardStyle} 
                            onClick={() => navigate('/admin/credentials')}
                            onMouseEnter={(e) => handleCardHover(e, true)}
                            onMouseLeave={(e) => handleCardHover(e, false)}
                        >
                            <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(139, 92, 246, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#8b5cf6', fontSize: '1.5rem', marginBottom: '20px' }}>
                                <i className="fas fa-shield-alt"></i>
                            </div>
                            <h4 style={{ color: '#fff', fontWeight: '600', marginBottom: '10px' }}>Credentials</h4>
                            <p style={{ color: '#a8b2d1', fontSize: '0.95rem', margin: 0, lineHeight: '1.6' }}>Update your admin username and password for security.</p>
                        </div>
                    </div>
                </div>

                {/* Quick Stats Section */}
                <div className="mt-5 p-4" style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h4 className="fw-bold mb-4" style={{ color: '#fff' }}>Quick Overview</h4>
                    <div className="row text-center">
                        <div className="col-md-4">
                            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#D4AF37' }}>{stats.loading ? '...' : stats.jobs}</div>
                            <div style={{ color: '#a8b2d1' }}>Active Jobs</div>
                        </div>
                        <div className="col-md-4" style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', borderRight: '1px solid rgba(255,255,255,0.1)' }}>
                            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#3b82f6' }}>{stats.loading ? '...' : stats.enquiries}</div>
                            <div style={{ color: '#a8b2d1' }}>New Enquiries</div>
                        </div>
                        <div className="col-md-4">
                            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#10b981' }}>100%</div>
                            <div style={{ color: '#a8b2d1' }}>System Health</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
