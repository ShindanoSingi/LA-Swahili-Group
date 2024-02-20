import React from "react";

function AdminDashBoard() {
      return (
            <div className="mt-[4rem] pt-2 px-2 min-h-[100vh] bg-[#595954] text-[#FFFFFF]">
                  <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex items-center justify-between mb-4">
                              <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                                    Members Contributions
                              </h5>
                              <div className="flex gap-1">
                                    <h2 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                                          Total:
                                    </h2>
                                    <h2 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                                          $600
                                    </h2>
                              </div>
                        </div>
                        <div className="flow-root max-h-[82vh] overflow-y-auto">
                              <ul >
                                    <li className={`py-2 sm:py-2`}>
                                          <div class=" space-y-2">
                                                <div
                                                      class="group flex flex-col gap-2 rounded-lg bg-black p-5 text-white"
                                                      tabindex="1"
                                                >
                                                      <div class="flex cursor-pointer items-center justify-between">
                                                            <div className="flex items-center">
                                                                  <div className="flex-shrink-0">
                                                                        <img
                                                                              className="w-8 h-8 rounded-full"
                                                                              src="https://picsum.photos/200/300"
                                                                              alt="Neil imager"
                                                                        />
                                                                  </div>
                                                                  <div className="flex-1 min-w-0 ms-4">
                                                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                                              Neil
                                                                              Sims
                                                                        </p>
                                                                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                                              505-569-8562
                                                                        </p>
                                                                        <span className="text-sm text-gray-200 border p-[0.1rem] truncate dark:text-gray-200">Added By: <span className="text-sm text-gray-500 truncate dark:text-gray-400">Shindano</span> </span>
                                                                  </div>
                                                            </div>
                                                            <div className="flex flex-col items-center">
                                                                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                                        $320
                                                                  </div>
                                                                  <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width="20"
                                                                        height="20"
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        className="feather transition-all duration-500  group-focus:-rotate-180 dark:text-whitefeather-chevron-down"
                                                                  >
                                                                        <polyline points="6 9 12 15 18 9"></polyline>
                                                                  </svg>
                                                            </div>
                                                      </div>
                                                      <div class="invisible flex justify-around h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
                                                            <button className="flex justify-center items-center bg-green-800 rounded-full w-16 p-1 max-w-20">
                                                                  <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width="18"
                                                                        height="18"
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        class="feather feather-plus"
                                                                  >
                                                                        <line
                                                                              x1="12"
                                                                              y1="5"
                                                                              x2="12"
                                                                              y2="19"
                                                                        ></line>
                                                                        <line
                                                                              x1="5"
                                                                              y1="12"
                                                                              x2="19"
                                                                              y2="12"
                                                                        ></line>
                                                                  </svg>
                                                            </button>
                                                            <button className="flex justify-center items-center bg-yellow-800 rounded-full w-16 p-1 max-w-20">
                                                                  <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width="18"
                                                                        height="18"
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        class="feather feather-edit-2"
                                                                  >
                                                                        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                                                                  </svg>
                                                            </button>
                                                            <button className="flex justify-center items-center bg-red-800 rounded-full w-16 p-1 max-w-20">
                                                                  <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width="18"
                                                                        height="18"
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        class="feather feather-trash"
                                                                  >
                                                                        <polyline points="3 6 5 6 21 6"></polyline>
                                                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                                  </svg>
                                                            </button>
                                                            <button className="flex justify-center items-center bg-green-600 rounded-full w-16 p-1 max-w-20">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                                            </button>
                                                      </div>
                                                </div>
                                          </div>
                                    </li>
                                    <li className={`py-2 sm:py-2`}>
                                          <div class=" space-y-2">
                                                <div
                                                      class="group flex flex-col gap-2 rounded-lg bg-black p-5 text-white"
                                                      tabindex="1"
                                                >
                                                      <div class="flex cursor-pointer items-center justify-between">
                                                            <div className="flex items-center">
                                                                  <div className="flex-shrink-0">
                                                                        <img
                                                                              className="w-8 h-8 rounded-full"
                                                                              src="https://picsum.photos/200/300"
                                                                              alt="Neil imager"
                                                                        />
                                                                  </div>
                                                                  <div className="flex-1 min-w-0 ms-4">
                                                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                                              Neil
                                                                              Sims
                                                                        </p>
                                                                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                                              505-569-8562
                                                                        </p>
                                                                  </div>
                                                            </div>
                                                            <div className="flex flex-col items-center">
                                                                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                                        $320
                                                                  </div>
                                                                  <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width="20"
                                                                        height="20"
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        className="feather transition-all duration-500  group-focus:-rotate-180 dark:text-whitefeather-chevron-down"
                                                                  >
                                                                        <polyline points="6 9 12 15 18 9"></polyline>
                                                                  </svg>
                                                            </div>
                                                      </div>
                                                      <div class="invisible flex justify-around h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
                                                            <button className="flex justify-center items-center bg-green-800 rounded-full w-16 p-1 max-w-20">
                                                                  <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width="18"
                                                                        height="18"
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        class="feather feather-plus"
                                                                  >
                                                                        <line
                                                                              x1="12"
                                                                              y1="5"
                                                                              x2="12"
                                                                              y2="19"
                                                                        ></line>
                                                                        <line
                                                                              x1="5"
                                                                              y1="12"
                                                                              x2="19"
                                                                              y2="12"
                                                                        ></line>
                                                                  </svg>
                                                            </button>
                                                            <button className="flex justify-center items-center bg-yellow-800 rounded-full w-16 p-1 max-w-20">
                                                                  <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width="18"
                                                                        height="18"
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        class="feather feather-edit-2"
                                                                  >
                                                                        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                                                                  </svg>
                                                            </button>
                                                            <button className="flex justify-center items-center bg-red-800 rounded-full w-16 p-1 max-w-20">
                                                                  <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width="18"
                                                                        height="18"
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        class="feather feather-trash"
                                                                  >
                                                                        <polyline points="3 6 5 6 21 6"></polyline>
                                                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                                  </svg>
                                                            </button>
                                                            <button className="flex justify-center items-center bg-green-600 rounded-full w-16 p-1 max-w-20">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                                            </button>
                                                      </div>
                                                </div>
                                          </div>
                                    </li>
                                    <li className={`py-2 sm:py-2`}>
                                          <div class=" space-y-2">
                                                <div
                                                      class="group flex flex-col gap-2 rounded-lg bg-black p-5 text-white"
                                                      tabindex="1"
                                                >
                                                      <div class="flex cursor-pointer items-center justify-between">
                                                            <div className="flex items-center">
                                                                  <div className="flex-shrink-0">
                                                                        <img
                                                                              className="w-8 h-8 rounded-full"
                                                                              src="https://picsum.photos/200/300"
                                                                              alt="Neil imager"
                                                                        />
                                                                  </div>
                                                                  <div className="flex-1 min-w-0 ms-4">
                                                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                                              Neil
                                                                              Sims
                                                                        </p>
                                                                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                                              505-569-8562
                                                                        </p>
                                                                  </div>
                                                            </div>
                                                            <div className="flex flex-col items-center">
                                                                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                                        $320
                                                                  </div>
                                                                  <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width="20"
                                                                        height="20"
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        className="feather transition-all duration-500  group-focus:-rotate-180 dark:text-whitefeather-chevron-down"
                                                                  >
                                                                        <polyline points="6 9 12 15 18 9"></polyline>
                                                                  </svg>
                                                            </div>
                                                      </div>
                                                      <div class="invisible flex justify-around h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
                                                            <button className="flex justify-center items-center bg-green-800 rounded-full w-16 p-1 max-w-20">
                                                                  <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width="18"
                                                                        height="18"
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        class="feather feather-plus"
                                                                  >
                                                                        <line
                                                                              x1="12"
                                                                              y1="5"
                                                                              x2="12"
                                                                              y2="19"
                                                                        ></line>
                                                                        <line
                                                                              x1="5"
                                                                              y1="12"
                                                                              x2="19"
                                                                              y2="12"
                                                                        ></line>
                                                                  </svg>
                                                            </button>
                                                            <button className="flex justify-center items-center bg-yellow-800 rounded-full w-16 p-1 max-w-20">
                                                                  <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width="18"
                                                                        height="18"
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        class="feather feather-edit-2"
                                                                  >
                                                                        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                                                                  </svg>
                                                            </button>
                                                            <button className="flex justify-center items-center bg-red-800 rounded-full w-16 p-1 max-w-20">
                                                                  <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width="18"
                                                                        height="18"
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        stroke-width="2"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        class="feather feather-trash"
                                                                  >
                                                                        <polyline points="3 6 5 6 21 6"></polyline>
                                                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                                  </svg>
                                                            </button>
                                                            <button className="flex justify-center items-center bg-green-600 rounded-full w-16 p-1 max-w-20">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                                            </button>
                                                      </div>
                                                </div>
                                          </div>
                                    </li>
                              </ul>

                        </div>
                  </div>
            </div>
      );
}

export default AdminDashBoard;
