import axios from '../api/axios';
import { setToken, removeToken } from '../utils/auth';

export const login = async (email, password) => {
    try {
        const response = await axios.post('/api/v1/auth/authenticate', { email, password });
        const { access_token} = response.data;
        setToken(access_token);
        return response.data;
    } catch (error) {
        throw new Error('Login failed');
    }
};

export const register = async (firstname, lastname, email, password, role) => {
    try {
        const response = await axios.post('/api/v1/auth/register', {
            firstname,
            lastname,
            email,
            password,
            role,
        });
        const { access_token} = response.data;

        setToken(access_token); // Adjust this based on how you handle tokens
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Registration failed');
    }
};

export const logout = () => {
    removeToken();
};
