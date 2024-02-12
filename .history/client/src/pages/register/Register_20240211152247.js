import React, { useState } from "react";

function Register() {
      return (
            <div className="container">
                  <div className="w-[80%]">
                        <h1 className="text-xl font-bold text-center mb-4 text-white dark:text-white">
                              Registration Form
                        </h1>
                        <form className="max-w-sm mx-auto">
                              <div className="mb-3">
                                    <label
                                          for="email"
                                          className="block mb-2 text-sm font-medium text-white dark:text-white"
                                    >
                                          Your first name
                                    </label>
                                    <input
                                          type="name"
                                          id="phone"
                                          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                          placeholder="222-222-2222"
                                          required
                                    />
                              </div>
                              <div className="mb-3">
                                    <label
                                          for="email"
                                          className="block mb-2 text-sm font-medium text-white dark:text-white"
                                    >
                                          Your last name
                                    </label>
                                    <input
                                          type="name"
                                          id="phone"
                                          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                          placeholder="222-222-2222"
                                          required
                                    />
                              </div>
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

                              <div className="mb-3">
                                    <label
                                          for="repeat-password"
                                          className="block mb-2 text-sm font-medium text-white dark:text-white"
                                    >
                                          Repeat password
                                    </label>
                                    <input
                                          type="password"
                                          id="repeat-password"
                                          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                          required
                                    />
                              </div>
                              <div>
                                    <button
                                          type="submit"
                                          className="text-white mt-2 w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                          Register
                                    </button>
                                    <div>
                                          <p className="text-white text-center underline">
                                                Already Registered?
                                          </p>
                                          <p className="text-white text-center underline">
                                                Already Registered?
                                          </p>
                                    </div>
                              </div>
                        </form>
                  </div>
            </div>
      );
}

export default Register;
