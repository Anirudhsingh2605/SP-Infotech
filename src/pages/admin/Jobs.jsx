import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Jobs() {
    const navigate = useNavigate();
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    
    // Modal state
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({ title: '', location: '', jobType: 'Full-Time', experience: 'Fresher', description: '' });
    const [submitLoading, setSubmitLoading] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
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

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this job posting?")) return;
        
        try {
            const res = await fetch(`http://localhost:8081/api/jobs/${id}`, { method: 'DELETE' });
            if (res.ok) {
                setJobs(jobs.filter(job => job.id !== id));
            }
        } catch (error) {
            console.error('Error deleting job', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitLoading(true);
        try {
            const res = await fetch('http://localhost:8081/api/jobs', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            const data = await res.json();
            if (data.success) {
                setJobs([data.data, ...jobs]);
                setShowModal(false);
                setFormData({ title: '', location: '', jobType: 'Full-Time', experience: 'Fresher', description: '' });
            }
        } catch (error) {
            console.error('Error creating job', error);
        } finally {
            setSubmitLoading(false);
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
        flexDirection: 'column',
        zIndex: 1000
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
        color: '#f59e0b',
        background: 'rgba(245, 158, 11, 0.1)',
        borderLeft: '3px solid #f59e0b'
    };

    const modalOverlayStyle = {
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        backdropFilter: 'blur(5px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2000
    };

    const modalContentStyle = {
        background: '#020c1b',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '16px',
        padding: '30px',
        width: '100%',
        maxWidth: '600px',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
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
                    <a href="#/" onClick={(e) => { e.preventDefault(); navigate('/admin/settings'); }} style={linkStyle}>
                        <i className="fas fa-sliders-h"></i> Settings
                    </a>
                    <a href="#/" onClick={(e) => { e.preventDefault(); navigate('/admin/jobs'); }} style={activeLinkStyle}>
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
                <div className="mb-5 d-flex justify-content-between align-items-center">
                    <div>
                        <h2 className="fw-bold mb-2" style={{ color: '#fff', fontSize: '2.5rem' }}>Manage Jobs</h2>
                        <p style={{ color: '#a8b2d1', fontSize: '1.1rem' }}>Add, edit, or delete job postings shown on the Careers page.</p>
                    </div>
                    <button onClick={() => setShowModal(true)} className="btn px-4 py-2 fw-bold" style={{ background: '#f59e0b', color: '#fff', borderRadius: '8px' }}>
                        <i className="fas fa-plus me-2"></i> Create New Job
                    </button>
                </div>

                <div className="row g-4">
                    {loading ? (
                        <div className="text-center py-5 w-100">
                            <div className="spinner-border text-warning" role="status"></div>
                        </div>
                    ) : jobs.length === 0 ? (
                        <div className="text-center py-5 w-100" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <i className="fas fa-briefcase fa-3x mb-3" style={{ color: '#a8b2d1' }}></i>
                            <h4 style={{ color: '#fff' }}>No Jobs Posted</h4>
                            <p style={{ color: '#a8b2d1' }}>Click the "Create New Job" button to post your first career opening.</p>
                        </div>
                    ) : (
                        jobs.map(job => (
                            <div className="col-md-6 col-lg-4" key={job.id}>
                                <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', padding: '25px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                                    <div className="d-flex justify-content-between align-items-start mb-3">
                                        <div style={{ background: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b', width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                                            <i className="fas fa-briefcase"></i>
                                        </div>
                                        <button onClick={() => handleDelete(job.id)} className="btn btn-sm" style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: '6px' }}>
                                            <i className="fas fa-trash-alt"></i>
                                        </button>
                                    </div>
                                    <h4 style={{ color: '#fff', fontWeight: 'bold' }}>{job.title}</h4>
                                    <div className="d-flex flex-wrap gap-2 mb-3">
                                        <span className="badge" style={{ background: 'rgba(255,255,255,0.1)', color: '#e2e8f0', fontWeight: 'normal' }}>{job.jobType}</span>
                                        <span className="badge" style={{ background: 'rgba(255,255,255,0.1)', color: '#e2e8f0', fontWeight: 'normal' }}>{job.location}</span>
                                        {job.experience && <span className="badge" style={{ background: 'rgba(255,255,255,0.1)', color: '#e2e8f0', fontWeight: 'normal' }}>{job.experience}</span>}
                                    </div>
                                    <p style={{ color: '#a8b2d1', fontSize: '0.9rem', flexGrow: 1 }}>{job.description.length > 100 ? job.description.substring(0, 100) + '...' : job.description}</p>
                                    <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '15px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '15px' }}>
                                        Posted on: {new Date(job.createdAt).toLocaleDateString()}
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>

            {/* Create Job Modal */}
            {showModal && (
                <div style={modalOverlayStyle}>
                    <div style={modalContentStyle}>
                        <div className="d-flex justify-content-between align-items-center mb-4 pb-3 border-bottom border-secondary">
                            <h3 className="fw-bold m-0" style={{ color: '#fff' }}>Post New Job</h3>
                            <button onClick={() => setShowModal(false)} className="btn text-white" style={{ background: 'rgba(255,255,255,0.1)' }}>
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label text-muted small fw-semibold">Job Title *</label>
                                    <input type="text" className="form-control" style={inputStyle} required value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} placeholder="e.g. Frontend Developer" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label text-muted small fw-semibold">Location *</label>
                                    <input type="text" className="form-control" style={inputStyle} required value={formData.location} onChange={e => setFormData({...formData, location: e.target.value})} placeholder="e.g. Remote / New York" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label text-muted small fw-semibold">Job Type *</label>
                                    <select className="form-select" style={{...inputStyle, WebkitAppearance: 'none'}} required value={formData.jobType} onChange={e => setFormData({...formData, jobType: e.target.value})}>
                                        <option value="Full-Time" style={{color: '#000'}}>Full-Time</option>
                                        <option value="Part-Time" style={{color: '#000'}}>Part-Time</option>
                                        <option value="Contract" style={{color: '#000'}}>Contract</option>
                                        <option value="Internship" style={{color: '#000'}}>Internship</option>
                                    </select>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label text-muted small fw-semibold">Experience Needed</label>
                                    <input type="text" className="form-control" style={inputStyle} value={formData.experience} onChange={e => setFormData({...formData, experience: e.target.value})} placeholder="e.g. 2-3 Years / Fresher" />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="form-label text-muted small fw-semibold">Job Description *</label>
                                <textarea className="form-control" rows="4" style={inputStyle} required value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} placeholder="Enter detailed job description, requirements, and responsibilities..."></textarea>
                            </div>
                            <div className="d-flex justify-content-end gap-3 pt-3 border-top border-secondary">
                                <button type="button" className="btn px-4 py-2" onClick={() => setShowModal(false)} style={{ background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' }}>Cancel</button>
                                <button type="submit" className="btn px-4 py-2 fw-bold" disabled={submitLoading} style={{ background: '#f59e0b', color: '#fff' }}>
                                    {submitLoading ? 'Saving...' : 'Post Job'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
