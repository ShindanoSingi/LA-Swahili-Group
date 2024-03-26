'use strict';

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { hideLoader, showLoader } from "../../redux/loaderSlice";
import { RegisterUser } from "../../apicalls/users";
import toast from "react-hot-toast";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa6";

function Register() {

    const navigate = useNavigate();

      const dispatch = useDispatch();
      const [hideEye1, setHideEye1] = useState(false);
      const [hideEye2, setHideEye2] = useState(false);
      const [user, setUser] = useState({
            firstName: "",
            lastName: "",
            phone: "",
            password: "",
            passwordConfirm: ""
      });

      console.log(user)


      const handleRegister = async (e) => {
            e.preventDefault();
            try {
                  dispatch(showLoader());
                  const response = await RegisterUser(user);
                  console.log(response);
                  dispatch(hideLoader());

                  if (response.success) {
                        toast.success(response.message);
                        navigate('/login')
                  }

                  else{
                    toast.error(response.message);
                  }
            } catch (error) {
                  toast.error(error.message);
            }
      };

      const togglePasswordVisibility1 = () => {
            setHideEye1(!hideEye1);
      };
      const togglePasswordVisibility2 = () => {
            setHideEye2(!hideEye2);
      };

      useEffect(() => {
        console.log(user)
      }, []);

      return (
            <div className="container">
                  <div className="w-[80%]">
                        <h1 className="text-xl font-bold text-center mb-4 text-white dark:text-white">
                              Registration Form
                        </h1>
                        <form className="max-w-sm mx-auto">
                              <div className="mb-3">
                                    <label
                                          for="firstname"
                                          className="block mb-2 text-sm font-medium text-white dark:text-white"
                                    >
                                          Your first name
                                    </label>
                                    <input
                                          type="text"
                                          id="firstname"
                                          value={user.firstName}
                                          onChange={(e) =>{e.preventDefault()
                                                setUser({
                                                      ...user,
                                                      firstName: e.target.value
                                                })}

                                          }
                                          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                          placeholder="First Name"
                                          required
                                          autoComplete="off"
                                    />
                              </div>
                              <div className="mb-3">
                                    <label
                                          for="lastname"
                                          className="block mb-2 text-sm font-medium text-white dark:text-white"
                                    >
                                          Your last name
                                    </label>
                                    <input
                                          type="text"
                                          id="lastname"
                                          value={user.lastName}
                                          onChange={(e) =>
                                                setUser({
                                                      ...user,
                                                      lastName: e.target.value
                                                })
                                          }
                                          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                          placeholder="Last Name"
                                          required
                                    />
                              </div>
                              <div className="mb-3">
                                    <label
                                          for="phonenumber"
                                          className="block mb-2 text-sm font-medium text-white dark:text-white"
                                    >
                                          Your phone number
                                    </label>
                                    <input
                                          type="phone"
                                          id="phone"
                                          value={user.phone}
                                          onChange={(e) =>
                                                setUser({
                                                      ...user,
                                                      phone: e.target.value
                                                })
                                          }
                                          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                          placeholder="222-222-2222"
                                          required
                                    />
                              </div>
                              <div className="mb-3">
                                    <label
                                          for="password"
                                          className="block mb-2 text-sm font-medium text-white dark:text-white"
                                    >
                                          Your password
                                    </label>
                                    <div className="flex items-center">
                                          <input
                                                type={
                                                      hideEye1
                                                            ? "text"
                                                            : "password"
                                                }
                                                id="password"
                                                value={user.password}
                                                onChange={(e) =>
                                                      setUser({
                                                            ...user,
                                                            password: e.target
                                                                  .value
                                                      })
                                                }
                                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                                required
                                          />
                                          {hideEye1 ? (
                                                <IoEyeSharp
                                                      className=" eye text-gray-200"
                                                      onClick={
                                                            togglePasswordVisibility1
                                                      }
                                                />
                                          ) : (
                                                <FaEyeSlash
                                                      className="eye left-[40%] text-gray-200"
                                                      onClick={
                                                            togglePasswordVisibility1
                                                      }
                                                />
                                          )}
                                    </div>
                              </div>

                              <div className="mb-3">
                                    <label
                                          for="repeat-password"
                                          className="block mb-2 text-sm font-medium text-white dark:text-white"
                                    >
                                          Repeat password
                                    </label>
                                    <div className="flex items-center">
                                          <input
                                                type={hideEye2 ? "text" : "password"}
                                                id="repeat-password"
                                                value={user.passwordConfirm}
                                                onChange={(e) =>
                                                      setUser({
                                                            ...user,
                                                            passwordConfirm:
                                                                  e.target.value
                                                      })
                                                }
                                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                                required
                                          />
                                          {hideEye2 ? (
                                                <IoEyeSharp
                                                      className=" eye text-gray-200"
                                                      onClick={
                                                            togglePasswordVisibility2
                                                      }
                                                />
                                          ) : (
                                                <FaEyeSlash
                                                      className="eye left-[40%] text-gray-200"
                                                      onClick={
                                                            togglePasswordVisibility2
                                                      }
                                                />
                                          )}
                                    </div>
                              </div>
                              <div>
                                    <button
                                          type="submit"
                                          onClick={handleRegister}
                                          className="text-white mt-2 w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                          Register
                                    </button>
                                    <div className="flex gap-4 justify-center mt-2">
                                          <p className="text-white text-center underline">
                                                Already Registered?
                                          </p>
                                          <Link to="/login">
                                                <p className="text-blue-500 text-center underline font-bold">
                                                      Login
                                                </p>
                                          </Link>
                                    </div>
                              </div>
                        </form>
                  </div>
            </div>
      );
}

export default Register;
