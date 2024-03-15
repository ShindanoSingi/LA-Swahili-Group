import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa6";

import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { hideLoader, showLoader } from "../../redux/loaderSlice";
import { loginUser } from "../../apicalls/users";

import './Login.css'

function Login() {
      const dispatch = useDispatch();
      const navigate = useNavigate();
      const [user, setUser] = useState({
            phone: '',
            password: '',
      })
      const [hideEye, setHideEye] = useState(false)

      const handleLogin = async (e) => {
            e.preventDefault();
            try {
                  dispatch(showLoader())
                  const response = await loginUser(user);
                  console.log(response);
                  dispatch (hideLoader());

                  if(response.success){
                        toast.success(response.message);
                        localStorage.setItem("token", response.token);
                        navigate("/")
                  } else{
                        toast.error(response.message)
                  }

            } catch (error) {
                  dispatch(hideLoader)
                  return error.message;
            }
      }

      const togglePasswordVisibility = () => {
            setHideEye(!hideEye)
      }


      useEffect(() => {
            if(localStorage.getItem("token")){
                  navigate("/")
            }
      }, [navigate]);

      return (
            <div className="container">
                  <div className="w-[80%]">

                              <h1 className="text-xl font-bold text-center mb-4 text-white dark:text-white">
                                    Login Form
                              </h1>
                        <form className="max-w-sm mx-auto">
                              <div className="mb-3">
                                    <label
                                          className="block mb-2 text-sm font-medium text-white dark:text-white"
                                    >
                                          Your phone number
                                    </label>
                                    <input
                                          type="text"
                                          id="phone"
                                          value={user.phone}
                                          onChange={(e) => setUser({...user, phone: e.target.value})}
                                          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                          placeholder="222-222-2222"
                                          autoComplete="off"
                                          required
                                    />

                              </div>
                              <div className="mb-3">
                                    <label
                                          className="block mb-2 text-sm font-medium text-white dark:text-white"
                                    >
                                          Your password
                                    </label>
                                    <div className="flex items-center">
                                          <input
                                          type={
                                                hideEye ? "password" : "text"
                                          }
                                          id="password"
                                          value={user.password}
                                          onChange={(e) =>{
                                                setUser({...user, password: e.target.value})
                                          }  }
                                          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                          required
                                    />
                                    {
                                          hideEye ? (<IoEyeSharp className=" eye text-gray-200" onClick={togglePasswordVisibility} />) : (<FaEyeSlash className="eye left-[40%] text-gray-200" onClick={togglePasswordVisibility} />)
                                    }

                                    </div>

                              </div>
                              <div>
                                    <button
                                          type="submit"
                                          onClick={handleLogin}
                                          className="text-white mt-2 w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                          Login
                                    </button>
                                    <div className="flex gap-4 justify-center mt-2">
                                          <p className="text-white text-center underline">Not registered yet?</p>
                                          <Link to='/register'><p className="text-blue-500 text-center underline font-bold">Register</p></Link>

                                    </div>

                              </div>
                        </form>
                  </div>
            </div>
      );
}

export default Login;
