// 'use strict';

import axios from 'axios';


export const LoginUser = async (user) => {
    try {
        const response = await axios.post(`/api/users/login`, user, {
            headers:{
                "content-type":"application/json",
                Authorization: `Bear ${localStorage.getItem('token')}`
            }
        });
        return response.data;
    } catch (error) {
        return error.message;
    }
}

export const RegisterUser = async (user) => {
    try {
        const response = await axios.post(`/api/users/register`, user, {
            headers:{
                "content-type": "application/json",
                Authorization: `Bear ${localStorage.getItem('token')}`
            }
        });
        console.log(response)
        return response.data;
    } catch (error) {
        return error.message;
    }
}

// Get users all users
export const GetUsers = async () => {
    try {
        const response = await axios.get(`/api/users/get-users`);
        return response.data;
    } catch (error) {
        return error.message;
    }
}

// Get user by id
export const GetUserById = async (id) => {
    try {
        const response = await axios.get(`/api/users/get-user/${id}`, {
            headers:{
                "content-type": "application/json",
                Authorization: `Bear ${localStorage.getItem('token')}`
            }
        });
        console.log(response)
        return response.data;
    } catch (error) {
        return error.message;
    }
}

// Update user picture
export const UpdateUserPictureFunc = async (id, picture) => {
    try {
        const response = await axios.put(`/api/users/update-picture/${id}`, picture, {
            headers:{
                'Content-Type': 'multipart/form-data',
                Authorization: `Bear ${localStorage.getItem('token')}`
            }
        });
        return response.data;
    } catch (error) {
        return error.message;
    }
}

// Delete picture
export const DeleteUserPicture = async (id) => {
    try {
        const response = await axios.delete(`/api/users/delete-picture/${id}`, {
            headers:{
                Authorization: `Bear ${localStorage.getItem('token')}`
            }
        });
        return response.data;
    } catch (error) {
        return error.message;
    }
}