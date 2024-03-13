import { axiosInstance } from '.';
// import axios from 'axios';


export const LoginUser = async (user) => {
    try {
        const response = await axiosInstance.post('/api/users/login', user);
        console.log(response);
        return response.data;
    } catch (error) {
        return error.message.data;
    }
}