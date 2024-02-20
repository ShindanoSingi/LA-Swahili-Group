import React, { useState } from "react";
import { Link } from "react-router-dom";

function ContactForm() {
      return (
            <div className="mt-[4rem] pt-8 container">
                  <div className="w-[80%]">
                        <h1 className="text-xl font-bold text-center mb-4 text-white dark:text-white">
                              Contact Form
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
                                          type="name"
                                          id="firstname"
                                          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                          placeholder="First Name"
                                          required
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
                                          type="name"
                                          id="lastname"
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
                                          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                          placeholder="222-222-2222"
                                          required
                                    />
                              </div>
                              <div className="mb-3">
                                    <label
                                          for="phonenumber"
                                          className="block mb-2 text-sm font-medium text-white dark:text-white"
                                    >
                                          Title
                                    </label>
                                    <input
                                          type="name"
                                          id="title"
                                          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                          placeholder="Your Title"
                                          required
                                    />
                              </div>
                              <div className="mb-3">
                                    <label
                                          for="description"
                                          className="block mb-2 text-sm font-medium text-white dark:text-white"
                                    >
                                          Description
                                    </label>

                                    <textarea name="name" id="description" placeholder="Description" cols="30" rows="10"
                                                                              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"

                            />
                              </div>


                              <div>
                                    <button
                                          type="submit"
                                            className="text-white mb-4 mt-2 w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                          Submit
                                    </button>
                              </div>
                        </form>
                  </div>
            </div>
      );
}

export default ContactForm;
