import axios from 'axios';

const BASE_URL = "http://localhost:8080";

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getUsers = async () => {
    try {
        const response = await api.get('/users');
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};

export const addUser = async (user) => {
    try {
        const response = await api.post('/users', user);
        return response.data;
    } catch (error) {
        console.error('Error adding user:', error);
        throw error;
    }
};

export const updateUser = async (userId, updatedUserData) => {
    try {
        const response = await api.put(`/users/${userId}`, updatedUserData); // Fixed syntax error here
        return response.data;
    } catch (error) {
        console.error(`Error updating user with ID ${userId}:`, error); // Fixed syntax error here
        throw error;
    }
};

export const deleteUser = async (userId) => {
    try {
        const response = await api.delete(`/users/${userId}`); // Fixed syntax error here
        return response.data;
    } catch (error) {
        console.error(`Error deleting user with ID ${userId}:`, error); // Fixed syntax error here
        throw error;
    }
};

export const logoutUser = async () => {
    try {
        // Perform logout logic here
        // For example, clearing tokens from local storage or sending a logout request to the server
        // You may also want to redirect the user to the login page after logout
    } catch (error) {
        console.error('Error logging out user:', error);
        throw error;
    }
};

export const loginUser = async (credentials) => {
    try {
        const response = await api.post('/login', credentials); // Assuming the login endpoint is different from the user creation endpoint
        return response.data;
    } catch (error) {
        console.error('Error logging in user:', error);
        throw error;
    }
};
