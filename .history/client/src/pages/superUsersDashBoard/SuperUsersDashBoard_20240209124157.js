import React from "react";

function SuperUsersDashBoard() {
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
                              <ul
                                    role="list"
                                    className="divide-y divide-gray-200 dark:divide-gray-700"
                              >
                                    <li className={`py-3 sm:py-4`}>

                                          <div class="m-2 space-y-2">
                                                <div
                                                      class="group flex flex-col gap-2 rounded-lg bg-black p-5 text-white"
                                                      tabindex="1"
                                                >
                                                      <div class="flex cursor-pointer items-center justify-between">
                                                            <span> HTML </span>
                                                            <img
                                                                  src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
                                                                  class="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
                                                            />
                                                      </div>
                                                      <div class="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
                                                            Lorem ipsum dolor
                                                            sit amet,
                                                            consectetur
                                                            adipiscing elit, sed
                                                            do eiusmod tempor
                                                            incididunt ut labore
                                                            et dolore magna
                                                            aliqua. Ut enim ad
                                                            minim veniam, quis
                                                            nostrud exercitation
                                                            ullamco laboris nisi
                                                            ut aliquip ex ea
                                                            commodo consequat.
                                                      </div>
                                                </div>

                                                <div
                                                      class="group flex flex-col gap-2 rounded-lg bg-black p-5 text-white"
                                                      tabindex="2"
                                                >
                                                      <div class="flex cursor-pointer items-center justify-between">
                                                            <span> CSS </span>
                                                            <img
                                                                  src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
                                                                  class="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
                                                            />
                                                      </div>
                                                      <div class="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
                                                            Lorem ipsum dolor
                                                            sit amet,
                                                            consectetur
                                                            adipiscing elit, sed
                                                            do eiusmod tempor
                                                            incididunt ut labore
                                                            et dolore magna
                                                            aliqua. Ut enim ad
                                                            minim veniam, quis
                                                            nostrud exercitation
                                                            ullamco laboris nisi
                                                            ut aliquip ex ea
                                                            commodo consequat.
                                                      </div>
                                                </div>

                                                <div
                                                      class="group flex flex-col gap-2 rounded-lg bg-black p-5 text-white"
                                                      tabindex="3"
                                                >
                                                      <div class="flex cursor-pointer items-center justify-between">
                                                            <span>
                                                                  {" "}
                                                                  JAVASCRIPT{" "}
                                                            </span>
                                                            <img
                                                                  src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
                                                                  class="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
                                                            />
                                                      </div>
                                                      <div class="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
                                                            Lorem ipsum dolor
                                                            sit amet,
                                                            consectetur
                                                            adipiscing elit, sed
                                                            do eiusmod tempor
                                                            incididunt ut labore
                                                            et dolore magna
                                                            aliqua. Ut enim ad
                                                            minim veniam, quis
                                                            nostrud exercitation
                                                            ullamco laboris nisi
                                                            ut aliquip ex ea
                                                            commodo consequat.
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

export default SuperUsersDashBoard;
