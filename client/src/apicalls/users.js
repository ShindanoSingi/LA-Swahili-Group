const axios = require('axios');

export const loginUser = async (user) => {
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

export const registerUser = async (user) => {
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

// Get users
export const getUsers = async () => {
    try {
        const response = await axios.get(`/api/users/get-users`, {
            headers:{
                "content-type": "application/json",
                Authorization: `Bear ${localStorage.getItem('token')}`
            }
        });
        console.log(response)
        return response;
    } catch (error) {
        return error.message;
    }
}