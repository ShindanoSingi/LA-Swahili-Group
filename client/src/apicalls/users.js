import axios from 'axios';

// const headers = {
//     headers:{
//         "content-type":"application/json",
//         Authorization: `Bear ${localStorage.getItem('token')}`
//     }
// }

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