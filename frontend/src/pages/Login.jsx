import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    const location = useLocation();
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (window.AOS) window.AOS.init();
        window.scrollTo(0, 0); // Scroll to top on page load
        
        if (location.state && location.state.message) {
            setMessage(location.state.message);
        }
    }, [location]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setMessage('');

        // Validation
        if (!username || !password) {
            setError('Please enter both username and password.');
            return;
        }

        // Mock authentication action
        if (username === 'admin' && password === 'admin') {
            setMessage('Login successful! Redirecting...');
            setTimeout(() => {
                navigate('/admin/dashboard'); 
            }, 1000);
        } else {
            setError('Invalid username or password.');
        }
    };

    return (
        <div style={{
            backgroundColor: '#0b1120', 
            minHeight: '100vh', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            padding: '20px'
        }}>
            <div className="glass-card shadow-lg" style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '20px',
                padding: '40px',
                width: '100%',
                maxWidth: '400px'
            }}>
                <div className="text-center mb-4">
                    <h2 className="fw-bold text-white">Admin Login</h2>
                    <p className="text-white-50">SP Infotech Control Panel</p>
                </div>
                
                {error && (
                    <div className="alert alert-danger">
                        {error}
                    </div>
                )}
                {message && (
                    <div className="alert alert-success">
                        {message}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="mb-3 text-start">
                        <label className="form-label text-white">Username</label>
                        <input 
                            type="text" 
                            name="username" 
                            className="form-control" 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required 
                            autoFocus 
                        />
                    </div>
                    <div className="mb-4 text-start">
                        <label className="form-label text-white">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            className="form-control" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required 
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100 fw-bold py-2">Sign In</button>
                    <div className="text-center mt-4">
                        <button type="button" onClick={() => navigate('/')} className="btn btn-link text-white-50 text-decoration-none">Back to Website</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
