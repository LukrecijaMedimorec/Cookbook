// src/pages/login/LoginForm.js
import React, { useState } from 'react';
import './login_form.css';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/authService'; // Import the login function

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validateForm = () => {
        const errors = {};
        if (!email) errors.email = 'Email is required';
        if (!password) errors.password = 'Password is required';
        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            try {
                await login(email, password); // Call the login function
                navigate('/recipes'); // Redirect to a protected route after successful login
            } catch (error) {
                console.error('Login error:', error);
                setErrors({ apiError: error.message || 'Login failed' });
            }
        } else {
            setErrors(formErrors);
        }
    };

    const handleRegisterRedirect = () => {
        navigate('/register'); // Redirect to the registration page
    };

    return (
        <div className="login-form-container">
            <h2 className="title">Login</h2>
            <form onSubmit={handleSubmit} className="login-form">
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={errors.email ? 'error' : ''}
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={errors.password ? 'error' : ''}
                    />
                    {errors.password && <span className="error-message">{errors.password}</span>}
                </div>
                <button type="submit">Login</button>
                {errors.apiError && <span className="error-message">{errors.apiError}</span>}
                <button type="button" onClick={handleRegisterRedirect} className="register-button">
                    Go to Registration
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
