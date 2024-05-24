import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa6";

import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { hideLoader, showLoader } from "../../redux/loaderSlice";
import { LoginUser } from "../../apicalls/users";
import { SetUserRole } from "../../redux/userSlice";
import Loader from "../../components/loader/Loader";

function Login() {
      const dispatch = useDispatch();
      const navigate = useNavigate();
      const [user, setUser] = useState({
            phone: "",
            password: ""
      });
      const [hideEye, setHideEye] = useState(false);
      const { userRole } = useSelector((state) => state.userReducer);
      const isLoading = useSelector((state) => state.loader);

      const handleLogin = async (e) => {
            e.preventDefault();
            try {
                  dispatch(showLoader());
                  const response = await LoginUser(user);
                  toast.success(response.message);
                        localStorage.setItem("token", response.token);
                        dispatch(SetUserRole(response.role));
                  dispatch(hideLoader());
            } catch (error) {
                  dispatch(hideLoader);
                  return error.message;
            }
      };

      const togglePasswordVisibility = () => {
            setHideEye(!hideEye);
      };

      useEffect(() => {
                  if (localStorage.getItem("token") && userRole === 'Admin'){
                        navigate("/admin");
                  } else if (localStorage.getItem("token") && userRole === "Superuser") {
                        navigate("/super");
                  } else if (localStorage.getItem("token") && userRole === "User") {
                        navigate("/user");
                  }
             else {
                  navigate("/login");
            }
      }, [userRole]);

      return (
            <div className="container md:w-full">
                  <div className="w-[80%]">
                        <h1 className="text-xl font-bold text-center mb-4 text-white dark:text-white">
                              Login Form
                        </h1>
                        <form className="max-w-sm mx-auto">
                              <div className="mb-3">
                                    <label className="block mb-2 text-sm md:text-lg font-medium text-white">
                                          Your phone number
                                    </label>
                                    <input
                                          type="text"
                                          id="phone"
                                          value={user.phone}
                                          onChange={(e) =>
                                                setUser({
                                                      ...user,
                                                      phone: e.target.value
                                                })
                                          }
                                          className="shadow-sm md:text-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                          placeholder="222-222-2222"
                                          autoComplete="off"
                                          required
                                    />
                              </div>
                              <div className="mb-3">
                                    <label className="block md:text-lg mb-2 text-sm font-medium text-white dark:text-white">
                                          Your password
                                    </label>
                                    <div className="flex items-center relative">
                                          <input
                                                type={
                                                      hideEye
                                                            ? "password"
                                                            : "text"
                                                }
                                                id="password"
                                                value={user.password}
                                                placeholder="Password"
                                                onChange={(e) => {
                                                      setUser({
                                                            ...user,
                                                            password: e.target
                                                                  .value
                                                      });
                                                }}
                                                className="shadow-sm md:text-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                                required
                                          />
                                          {hideEye ? (
                                                <IoEyeSharp
                                                      className=" eye absolute  text-gray-200"
                                                      onClick={
                                                            togglePasswordVisibility
                                                      }
                                                />
                                          ) : (
                                                <FaEyeSlash
                                                      className="eye absolute right-3 md:right-4 lg:right-5 text-gray-200"
                                                      onClick={
                                                            togglePasswordVisibility
                                                      }
                                                />
                                          )}
                                    </div>
                              </div>
                              <div>
                                    <button
                                          type="submit"
                                          onClick={handleLogin}
                                          className="text-white mt-2 w-full bg-blue-700 md:text-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                          Login
                                    </button>
                                    <div className="flex gap-4 justify-center mt-2">
                                          <p className="text-white md:text-lg text-center underline">
                                                Not registered yet?
                                          </p>
                                          <Link to="/register">
                                                <p className="text-blue-500 md:text-lg text-center underline font-bold">
                                                      Register
                                                </p>
                                          </Link>
                                    </div>
                              </div>
                        </form>
                  </div>
                  {isLoading && (

                              <Loader />

                  )}
            </div>
      );
}

export default Login;
