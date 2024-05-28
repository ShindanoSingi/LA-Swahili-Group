import axios from "axios";
import toast from "react-hot-toast";

export const LoginUser = async (user) => {
      try {
            const response = await axios.post(`/api/users/login`, user, {
                  headers: {
                        "content-type": "application/json",
                        Authorization: `Bear ${localStorage.getItem("token")}`
                  }
            });
            return response.data;
      } catch (error) {
            return error.message;
      }
};

export const RegisterUser = async (user) => {
      try {
            const response = await axios.post(`/api/users/register`, user, {
                  headers: {
                        "content-type": "application/json",
                        Authorization: `Bear ${localStorage.getItem("token")}`
                  }
            });
            console.log(response);
            return response.data;
      } catch (error) {
            return error.message;
      }
};

// Get users all users
export const GetUsers = async () => {
      try {
            const response = await axios.get(`/api/users/get-users`);
            return response.data;
      } catch (error) {
            return error.message;
      }
};

// Get user by id
export const GetUserById = async (id) => {
      try {
            const response = await axios.get(`/api/users/get-user/${id}`, {
                  headers: {
                        "content-type": "application/json",
                        Authorization: `Bear ${localStorage.getItem("token")}`
                  }
            });
            console.log(response);
            return response.data;
      } catch (error) {
            return error.message;
      }
};

// Update user by id
export const UpdateUser = async (user, id) => {
      try {
            const response = await axios.put(`/api/users/update-user/${id}`, user, {
                  headers: {
                        "content-type": "application/json",
                        Authorization: `Bear ${localStorage.getItem("token")}`
                  }
            });
            return response.data;
      } catch (error) {
            return error.message;
      }
};

// Update user position
export const UpdateUserPosition = async (id, position) => {
      try {
            const response = await axios.put(
                  `/api/users/update-position/${id}`,
                  position,
                  {
                        headers: {
                              "content-type": "application/json",
                              Authorization: `Bear ${localStorage.getItem(
                                    "token"
                              )}`
                        }
                  }
            );
            return response.data;
      } catch (error) {
            return error.message;
      }
};

// Update user picture
export const UpdateUserPictureFunc = async (id, picture) => {
      try {
            const response = await axios.put(
                  `/api/users/update-picture/${id}`,
                  picture,
                  {
                        headers: {
                              "Content-Type": "multipart/form-data",
                              Authorization: `Bear ${localStorage.getItem(
                                    "token"
                              )}`
                        }
                  }
            );
            return response.data;
      } catch (error) {
            return error.message;
      }
};

// UserPaid
export const UserPaid = async (id) => {
    const token = localStorage.getItem("token");

    if (!token) {
            toast.error("You are not authorized to perform this action");
    }

      try {

            const response = await axios.put(`/api/payments/user-paid/${id}`, {},{
                headers: {
                    "content-type": "application/json",
                    Authorization: `Bear ${token}`
              }
        });
            console.log(response);
            return response.data;
      } catch (error) {
        console.log('Error in UserPaid function:', error);
            return error.message;
      }
};

// Delete picture
export const DeleteUserPicture = async (id) => {
      try {
            const response = await axios.delete(
                  `/api/users/delete-picture/${id}`,
                  {
                        headers: {
                              Authorization: `Bear ${localStorage.getItem(
                                    "token"
                              )}`
                        }
                  }
            );
            return response.data;
      } catch (error) {
            return error.message;
      }
};

// =======================================================================

// Get user's payments
export const GetUserPayments = async (id) => {
      try {
            const response = await axios.get(
                  `/api/payments/get-user-payments/${id}`,
                  {
                        headers: {
                              Authorization: `Bear ${localStorage.getItem(
                                    "token"
                              )}`
                        }
                  }
            );
            console.log(response);
            return response.data;
      } catch (error) {
            return error.message;
      }
};

// Add payment
export const AddPayment = async (payment) => {
      try {
            const response = await axios.post(
                  `/api/payments/add-payment`,
                  payment,
                  {
                        headers: {
                              "content-type": "application/json",
                              Authorization: `Bear ${localStorage.getItem(
                                    "token"
                              )}`
                        }
                  }
            );
            return response.data;
      } catch (error) {
            return error.message;
      }
};

// =======================================================================

// Get About
export const GetAbout = async () => {
      try {
            const response = await axios.get(`/api/com/all`);
            console.log(response.data);
            return response.data;
      } catch (error) {
            return error.message;
      }
};
