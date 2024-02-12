import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
      const [showRegisterButton, setShowRegisterButton] = useState(false);

      return (
            <div className="container">
                  <div className="w-[80%]">
                        {showRegisterButton && (
                              <h1 className="text-xl font-bold text-center mb-4 text-white dark:text-white">
                                    Login Form
                              </h1>
                        )}
                        <form className="max-w-sm mx-auto">
                              <div className="mb-3">
                                    <label
                                          for="email"
                                          className="block mb-2 text-sm font-medium text-white dark:text-white"
                                    >
                                          Your phone number
                                    </label>
                                    <input
                                          type="phone"
                                          id="phone"
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
                                    <input
                                          type="password"
                                          id="password"
                                          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                          required
                                    />
                              </div>
                              <div>
                                    <button
                                          type="submit"
                                          className="text-white mt-2 w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                          Login
                                    </button>
                                    <div className="flex gap-4 justify-center mt-2">
                                          <p className="text-white text-center underline">Not registered yet?</p>
                                          <Link><p className="text-blue-500 text-center underline font-bold">Register</p></Link>

                                    </div>

                              </div>
                        </form>
                  </div>
            </div>
      );
}

export default Login;
