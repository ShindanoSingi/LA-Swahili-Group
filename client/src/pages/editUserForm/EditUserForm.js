import React from 'react';

function EditUserForm() {
  return (
    <div className="container">
                  <div className="w-[80%]">

                              <h1 className="text-xl font-bold text-center mb-4 text-white dark:text-white">
                                    Edit User's Contribution
                              </h1>
                        <form className="max-w-sm mx-auto">
                              <div className="mb-3">
                                    <label
                                          for="name"
                                          className="block mb-2 text-sm font-medium text-white dark:text-white"
                                    >
                                          Name
                                    </label>
                                    <input
                                          type="text"
                                          id="name"
                                          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                          placeholder="Name"
                                          required
                                    />
                              </div>
                              <div className="mb-3">
                                    <label
                                          for="payment"
                                          className="block mb-2 text-sm font-medium text-white dark:text-white"
                                    >
                                          Payment
                                    </label>
                                    <input
                                          type="number"
                                          id="payment"
                                          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                          required
                                    />
                              </div>
                              <div>
                                    <button
                                          type="submit"
                                          className="text-white mt-2 w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Submit
                                    </button>

                              </div>
                        </form>
                  </div>
            </div>
  )
}

export default EditUserForm