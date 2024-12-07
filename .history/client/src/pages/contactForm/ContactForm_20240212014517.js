import React, { useState } from "react";
import { Link } from "react-router-dom";

function ContactForm() {
      return (
            <div className="mt-[4rem] pt-8 min-h-[100vh] container">
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

                              <div
        class="rounded-l-lg p-4 bg-gray-200 flex flex-col justify-center items-center border-0 border-r border-gray-300 ">
        <label class="cursor-pointer hover:opacity-80 inline-flex items-center shadow-md my-2 px-2 py-2 bg-gray-900 text-gray-50 border border-transparent
        rounded-md font-semibold text-xs uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none 
       focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150" for="restaurantImage">
           
    Select image
            <input id="restaurantImage" class="text-sm cursor-pointer w-36 hidden" type="file">
        </label>
       <button
    class = 'inline-flex items-center shadow-md my-2 px-2 py-2 bg-gray-900 text-gray-50 border border-transparent
        rounded-md font-semibold text-xs uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none 
       focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150'>
    remove image
</button>
    </div>
    <div 
        class="relative order-first md:order-last h-28 md:h-auto flex justify-center items-center border border-dashed border-gray-400 col-span-2 m-2 rounded-lg bg-no-repeat bg-center bg-origin-padding bg-cover">
            <span class="text-gray-400 opacity-75">
                <svg class="w-14 h-14"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.7" stroke="currentColor">
             <path stroke-linecap="round" stroke-linejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            </span>
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
