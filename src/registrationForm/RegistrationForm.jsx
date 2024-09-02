import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './registration_form.css';

const RegistrationForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validateForm = () => {
        const errors = {};
        if (!email) errors.email = 'Email is required';
        if (!password) errors.password = 'Password is required';
        if (password !== confirmPassword) errors.confirmPassword = 'Passwords do not match';
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            // Handle successful form submission here
            console.log('Form submitted with:', { email, password });
        } else {
            setErrors(formErrors);
        }
    };

    const handleLoginRedirect = () => {
        navigate('/login'); // Redirect to the login page
    };

    return (
        <div className="registration-form-container">
            <h2 className="title">Register</h2>
            <form onSubmit={handleSubmit} className="registration-form">
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
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className={errors.confirmPassword ? 'error' : ''}
                    />
                    {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
                </div>
                <button type="submit">Register</button>
                <button type="button" onClick={handleLoginRedirect} className="login-button">
                    Go to Login
                </button>
            </form>
        </div>
    );
};

export default RegistrationForm;
