import {jwtDecode} from 'jwt-decode';

export const setToken = (token) => {
    localStorage.setItem('accessToken', token);
};

export const getToken = () => {
    return localStorage.getItem('accessToken');
};

export const removeToken = () => {
    localStorage.removeItem('accessToken');
};

export const getUserRole = () => {
    const token = getToken();
    if (token) {
        return jwtDecode(token).role;
    }
    return null;
};

export const isAuthenticated = () => {
    return !!getToken();
};

export const isAuthenticatedAsAdmin = () => {
    console.log(getUserRole());
    return !!getToken() && getUserRole() === "ADMIN";
};
