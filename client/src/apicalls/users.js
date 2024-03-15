import axios from 'axios';

// const headers = {
//     headers:{
//         "content-type":"application/json",
//         Authorization: `Bear ${localStorage.getItem('token')}`
//     }
// }

export const LoginUser = async (user) => {
    try {
        const response = await axios.post(`http://localhost:8080/api/users/login`, user, {
            headers:{
                "content-type":"application/json",
                Authorization: `Bear ${localStorage.getItem('token')}`
            }
        });
        return response;
    } catch (error) {
        return error.message;
    }
}