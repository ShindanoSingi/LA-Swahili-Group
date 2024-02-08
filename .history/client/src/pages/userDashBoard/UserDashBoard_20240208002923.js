import React, { useEffect } from "react";
const md5 = require("md5");

function UserDashBoard() {
      let color = "";

      const phoneNumberToColor = (phoneNumber) => {
            const cleanedPhoneNumber = phoneNumber.replace(/\D/g, "");
            const hash = md5(cleanedPhoneNumber);
            const colorCode = hash.substring(0, 6);
            return `#${colorCode}`;
      };

      return (
            <div className="mt-[4rem] pt-2 px-2 min-h-[100vh] bg-[#595954] text-[#FFFFFF]">
                  <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex items-center justify-between mb-4">
                              <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                                    Members Contributions
                              </h5>
                        </div>
                        <div className="flow-root">
                              <ul
                                    role="list"
                                    className="divide-y divide-gray-200 dark:divide-gray-700"
                              >
                                    <li className={`py-3 sm:py-4 bg-[${phoneNumberToColor("207-713-3345")}]`}>
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
                                                            Neil Sims
                                                      </p>
                                                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                            505-569-8562
                                                      </p>
                                                </div>
                                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                      $320
                                                </div>
                                          </div>
                                    </li>

                                    <li className={`py-3 sm:py-4 bg-[${phoneNumberToColor("208-303-8311")}]`}>
                                          <div className="flex items-center ">
                                                <div className="flex-shrink-0">
                                                      <img
                                                            className="w-8 h-8 rounded-full"
                                                            src="https://picsum.photos/200/300"
                                                            alt="Bonnie imagee"
                                                      />
                                                </div>
                                                <div className="flex-1 min-w-0 ms-4">
                                                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                            Bonnie Green
                                                      </p>
                                                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                            505-569-8562
                                                      </p>
                                                </div>
                                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                      $3467
                                                </div>
                                          </div>
                                    </li>
                                    <li className="py-3 sm:py-4">
                                          <div className="flex items-center">
                                                <div className="flex-shrink-0">
                                                      <img
                                                            className="w-8 h-8 rounded-full"
                                                            src="https://picsum.photos/200/300"
                                                            alt="Michael image"
                                                      />
                                                </div>
                                                <div className="flex-1 min-w-0 ms-4">
                                                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                            Michael Gough
                                                      </p>
                                                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                            505-569-8562
                                                      </p>
                                                </div>
                                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                      $67
                                                </div>
                                          </div>
                                    </li>
                                    <li className="py-3 sm:py-4">
                                          <div className="flex items-center ">
                                                <div className="flex-shrink-0">
                                                      <img
                                                            className="w-8 h-8 rounded-full"
                                                            src="https://picsum.photos/200/300"
                                                            alt="Lana image"
                                                      />
                                                </div>
                                                <div className="flex-1 min-w-0 ms-4">
                                                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                            Lana Byrd
                                                      </p>
                                                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                            505-569-8562
                                                      </p>
                                                </div>
                                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                      $367
                                                </div>
                                          </div>
                                    </li>
                                    <li className="py-3 sm:py-4">
                                          <div className="flex items-center ">
                                                <div className="flex-shrink-0">
                                                      <img
                                                            className="w-8 h-8 rounded-full"
                                                            src="https://picsum.photos/200/300"
                                                            alt="Thomas image"
                                                      />
                                                </div>
                                                <div className="flex-1 min-w-0 ms-4">
                                                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                            Thomes Lean
                                                      </p>
                                                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                            505-569-8562
                                                      </p>
                                                </div>
                                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                      $2367
                                                </div>
                                          </div>
                                    </li>
                                    <li className="py-3 sm:py-4">
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
                                                            Neil Sims
                                                      </p>
                                                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                            505-569-8562
                                                      </p>
                                                </div>
                                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                      $320
                                                </div>
                                          </div>
                                    </li>
                                    <li className="py-3 sm:py-4">
                                          <div className="flex items-center ">
                                                <div className="flex-shrink-0">
                                                      <img
                                                            className="w-8 h-8 rounded-full"
                                                            src="https://picsum.photos/200/300"
                                                            alt="Bonnie imagee"
                                                      />
                                                </div>
                                                <div className="flex-1 min-w-0 ms-4">
                                                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                            Bonnie Green
                                                      </p>
                                                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                            505-569-8562
                                                      </p>
                                                </div>
                                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                      $3467
                                                </div>
                                          </div>
                                    </li>
                                    <li className="py-3 sm:py-4">
                                          <div className="flex items-center">
                                                <div className="flex-shrink-0">
                                                      <img
                                                            className="w-8 h-8 rounded-full"
                                                            src="https://picsum.photos/200/300"
                                                            alt="Michael images"
                                                      />
                                                </div>
                                                <div className="flex-1 min-w-0 ms-4">
                                                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                            Michael Gough
                                                      </p>
                                                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                            505-569-8562
                                                      </p>
                                                </div>
                                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                      $67
                                                </div>
                                          </div>
                                    </li>
                                    <li className="py-3 sm:py-4">
                                          <div className="flex items-center ">
                                                <div className="flex-shrink-0">
                                                      <img
                                                            className="w-8 h-8 rounded-full"
                                                            src="https://picsum.photos/200/300"
                                                            alt="Lana imaged"
                                                      />
                                                </div>
                                                <div className="flex-1 min-w-0 ms-4">
                                                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                            Lana Byrd
                                                      </p>
                                                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                            505-569-8562
                                                      </p>
                                                </div>
                                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                      $367
                                                </div>
                                          </div>
                                    </li>
                                    <li className="py-3 sm:py-4">
                                          <div className="flex items-center ">
                                                <div className="flex-shrink-0">
                                                      <img
                                                            className="w-8 h-8 rounded-full"
                                                            src="https://picsum.photos/200/300"
                                                            alt="Thomas imagef"
                                                      />
                                                </div>
                                                <div className="flex-1 min-w-0 ms-4">
                                                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                            Thomes Lean
                                                      </p>
                                                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                            505-569-8562
                                                      </p>
                                                </div>
                                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                      $2367
                                                </div>
                                          </div>
                                    </li>
                                    <li className="py-3 sm:py-4">
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
                                                            Neil Sims
                                                      </p>
                                                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                            505-569-8562
                                                      </p>
                                                </div>
                                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                      $320
                                                </div>
                                          </div>
                                    </li>
                                    <li className="py-3 sm:py-4">
                                          <div className="flex items-center ">
                                                <div className="flex-shrink-0">
                                                      <img
                                                            className="w-8 h-8 rounded-full"
                                                            src="https://picsum.photos/200/300"
                                                            alt="Bonnie imagee"
                                                      />
                                                </div>
                                                <div className="flex-1 min-w-0 ms-4">
                                                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                            Bonnie Green
                                                      </p>
                                                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                            505-569-8562
                                                      </p>
                                                </div>
                                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                      $3467
                                                </div>
                                          </div>
                                    </li>
                                    <li className="py-3 sm:py-4">
                                          <div className="flex items-center">
                                                <div className="flex-shrink-0">
                                                      <img
                                                            className="w-8 h-8 rounded-full"
                                                            src="https://picsum.photos/200/300"
                                                            alt="Michael imagea"
                                                      />
                                                </div>
                                                <div className="flex-1 min-w-0 ms-4">
                                                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                            Michael Gough
                                                      </p>
                                                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                            505-569-8562
                                                      </p>
                                                </div>
                                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                      $67
                                                </div>
                                          </div>
                                    </li>
                                    <li className="py-3 sm:py-4">
                                          <div className="flex items-center ">
                                                <div className="flex-shrink-0">
                                                      <img
                                                            className="w-8 h-8 rounded-full"
                                                            src="https://picsum.photos/200/300"
                                                            alt="Lana imagez"
                                                      />
                                                </div>
                                                <div className="flex-1 min-w-0 ms-4">
                                                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                            Lana Byrd
                                                      </p>
                                                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                            505-569-8562
                                                      </p>
                                                </div>
                                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                      $367
                                                </div>
                                          </div>
                                    </li>
                                    <li className="py-3 sm:py-4">
                                          <div className="flex items-center ">
                                                <div className="flex-shrink-0">
                                                      <img
                                                            className="w-8 h-8 rounded-full"
                                                            src="https://picsum.photos/200/300"
                                                            alt="Thomas images"
                                                      />
                                                </div>
                                                <div className="flex-1 min-w-0 ms-4">
                                                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                            Thomes Lean
                                                      </p>
                                                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                            505-569-8562
                                                      </p>
                                                </div>
                                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                      $2367
                                                </div>
                                          </div>
                                    </li>
                                    <li className="py-3 sm:py-4">
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
                                                            Neil Sims
                                                      </p>
                                                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                            505-569-8562
                                                      </p>
                                                </div>
                                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                      $320
                                                </div>
                                          </div>
                                    </li>
                                    <li className="py-3 sm:py-4">
                                          <div className="flex items-center ">
                                                <div className="flex-shrink-0">
                                                      <img
                                                            className="w-8 h-8 rounded-full"
                                                            src="https://picsum.photos/200/300"
                                                            alt="Bonnie imagee"
                                                      />
                                                </div>
                                                <div className="flex-1 min-w-0 ms-4">
                                                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                            Bonnie Green
                                                      </p>
                                                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                            505-569-8562
                                                      </p>
                                                </div>
                                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                      $3467
                                                </div>
                                          </div>
                                    </li>
                                    <li className="py-3 sm:py-4">
                                          <div className="flex items-center">
                                                <div className="flex-shrink-0">
                                                      <img
                                                            className="w-8 h-8 rounded-full"
                                                            src="https://picsum.photos/200/300"
                                                            alt="Michael imagef"
                                                      />
                                                </div>
                                                <div className="flex-1 min-w-0 ms-4">
                                                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                            Michael Gough
                                                      </p>
                                                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                            505-569-8562
                                                      </p>
                                                </div>
                                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                      $67
                                                </div>
                                          </div>
                                    </li>
                                    <li className="py-3 sm:py-4">
                                          <div className="flex items-center ">
                                                <div className="flex-shrink-0">
                                                      <img
                                                            className="w-8 h-8 rounded-full"
                                                            src="https://picsum.photos/200/300"
                                                            alt="Lana imagew"
                                                      />
                                                </div>
                                                <div className="flex-1 min-w-0 ms-4">
                                                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                            Lana Byrd
                                                      </p>
                                                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                            505-569-8562
                                                      </p>
                                                </div>
                                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                      $367
                                                </div>
                                          </div>
                                    </li>
                                    <li className="py-3 sm:py-4">
                                          <div className="flex items-center ">
                                                <div className="flex-shrink-0">
                                                      <img
                                                            className="w-8 h-8 rounded-full"
                                                            src="https://picsum.photos/200/300"
                                                            alt="Thomas imaged"
                                                      />
                                                </div>
                                                <div className="flex-1 min-w-0 ms-4">
                                                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                            Thomes Lean
                                                      </p>
                                                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                            505-569-8562
                                                      </p>
                                                </div>
                                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                      $2367
                                                </div>
                                          </div>
                                    </li>

                                    <li className="py-3 sm:py-4">
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
                                                            Neil Sims
                                                      </p>
                                                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                            505-569-8562
                                                      </p>
                                                </div>
                                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                      $320
                                                </div>
                                          </div>
                                    </li>
                                    <li className="py-3 sm:py-4">
                                          <div className="flex items-center ">
                                                <div className="flex-shrink-0">
                                                      <img
                                                            className="w-8 h-8 rounded-full"
                                                            src="https://picsum.photos/200/300"
                                                            alt="Bonnie imagee"
                                                      />
                                                </div>
                                                <div className="flex-1 min-w-0 ms-4">
                                                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                            Bonnie Green
                                                      </p>
                                                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                            505-569-8562
                                                      </p>
                                                </div>
                                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                      $3467
                                                </div>
                                          </div>
                                    </li>
                                    <li className="py-3 sm:py-4">
                                          <div className="flex items-center">
                                                <div className="flex-shrink-0">
                                                      <img
                                                            className="w-8 h-8 rounded-full"
                                                            src="https://picsum.photos/200/300"
                                                            alt="Michael imagev"
                                                      />
                                                </div>
                                                <div className="flex-1 min-w-0 ms-4">
                                                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                            Michael Gough
                                                      </p>
                                                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                            505-569-8562
                                                      </p>
                                                </div>
                                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                      $67
                                                </div>
                                          </div>
                                    </li>
                                    <li className="py-3 sm:py-4">
                                          <div className="flex items-center ">
                                                <div className="flex-shrink-0">
                                                      <img
                                                            className="w-8 h-8 rounded-full"
                                                            src="https://picsum.photos/200/300"
                                                            alt="Lana imagee"
                                                      />
                                                </div>
                                                <div className="flex-1 min-w-0 ms-4">
                                                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                            Lana Byrd
                                                      </p>
                                                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                            505-569-8562
                                                      </p>
                                                </div>
                                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                      $367
                                                </div>
                                          </div>
                                    </li>
                                    <li className="py-3 sm:py-4">
                                          <div className="flex items-center ">
                                                <div className="flex-shrink-0">
                                                      <img
                                                            className="w-8 h-8 rounded-full"
                                                            src="https://picsum.photos/200/300"
                                                            alt="Thomas imagee"
                                                      />
                                                </div>
                                                <div className="flex-1 min-w-0 ms-4">
                                                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                            Thomes Lean
                                                      </p>
                                                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                            505-569-8562
                                                      </p>
                                                </div>
                                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                      $2367
                                                </div>
                                          </div>
                                    </li>
                                    <li className="py-3 sm:py-4">
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
                                                            Neil Sims
                                                      </p>
                                                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                            505-569-8562
                                                      </p>
                                                </div>
                                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                      $320
                                                </div>
                                          </div>
                                    </li>
                                    <li className="py-3 sm:py-4">
                                          <div className="flex items-center ">
                                                <div className="flex-shrink-0">
                                                      <img
                                                            className="w-8 h-8 rounded-full"
                                                            src="https://picsum.photos/200/300"
                                                            alt="Bonnie imagee"
                                                      />
                                                </div>
                                                <div className="flex-1 min-w-0 ms-4">
                                                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                            Bonnie Green
                                                      </p>
                                                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                            505-569-8562
                                                      </p>
                                                </div>
                                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                      $3467
                                                </div>
                                          </div>
                                    </li>
                                    <li className="py-3 sm:py-4">
                                          <div className="flex items-center">
                                                <div className="flex-shrink-0">
                                                      <img
                                                            className="w-8 h-8 rounded-full"
                                                            src="https://picsum.photos/200/300"
                                                            alt="Michael imaget"
                                                      />
                                                </div>
                                                <div className="flex-1 min-w-0 ms-4">
                                                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                            Michael Gough
                                                      </p>
                                                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                            505-569-8562
                                                      </p>
                                                </div>
                                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                      $67
                                                </div>
                                          </div>
                                    </li>
                                    <li className="py-3 sm:py-4">
                                          <div className="flex items-center ">
                                                <div className="flex-shrink-0">
                                                      <img
                                                            className="w-8 h-8 rounded-full"
                                                            src="https://picsum.photos/200/300"
                                                            alt="Lana imageo"
                                                      />
                                                </div>
                                                <div className="flex-1 min-w-0 ms-4">
                                                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                            Lana Byrd
                                                      </p>
                                                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                            505-569-8562
                                                      </p>
                                                </div>
                                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                      $367
                                                </div>
                                          </div>
                                    </li>
                                    <li className="py-3 sm:py-4">
                                          <div className="flex items-center ">
                                                <div className="flex-shrink-0">
                                                      <img
                                                            className="w-8 h-8 rounded-full"
                                                            src="https://picsum.photos/200/300"
                                                            alt="Thomas imageh"
                                                      />
                                                </div>
                                                <div className="flex-1 min-w-0 ms-4">
                                                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                            Thomes Lean
                                                      </p>
                                                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                            505-569-8562
                                                      </p>
                                                </div>
                                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                      $2367
                                                </div>
                                          </div>
                                    </li>
                                    <li className="py-3 sm:py-4">
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
                                                            Neil Sims
                                                      </p>
                                                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                            505-569-8562
                                                      </p>
                                                </div>
                                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                      $320
                                                </div>
                                          </div>
                                    </li>
                                    <li className="py-3 sm:py-4">
                                          <div className="flex items-center ">
                                                <div className="flex-shrink-0">
                                                      <img
                                                            className="w-8 h-8 rounded-full"
                                                            src="https://picsum.photos/200/300"
                                                            alt="Bonnie imagee"
                                                      />
                                                </div>
                                                <div className="flex-1 min-w-0 ms-4">
                                                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                            Bonnie Green
                                                      </p>
                                                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                            505-569-8562
                                                      </p>
                                                </div>
                                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                      $3467
                                                </div>
                                          </div>
                                    </li>
                                    <li className="py-3 sm:py-4">
                                          <div className="flex items-center">
                                                <div className="flex-shrink-0">
                                                      <img
                                                            className="w-8 h-8 rounded-full"
                                                            src="https://picsum.photos/200/300"
                                                            alt="Michael imagev"
                                                      />
                                                </div>
                                                <div className="flex-1 min-w-0 ms-4">
                                                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                            Michael Gough
                                                      </p>
                                                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                            505-569-8562
                                                      </p>
                                                </div>
                                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                      $67
                                                </div>
                                          </div>
                                    </li>
                                    <li className="py-3 sm:py-4">
                                          <div className="flex items-center ">
                                                <div className="flex-shrink-0">
                                                      <img
                                                            className="w-8 h-8 rounded-full"
                                                            src="https://picsum.photos/200/300"
                                                            alt="Lana imagek"
                                                      />
                                                </div>
                                                <div className="flex-1 min-w-0 ms-4">
                                                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                            Lana Byrd
                                                      </p>
                                                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                            505-569-8562
                                                      </p>
                                                </div>
                                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                      $367
                                                </div>
                                          </div>
                                    </li>
                                    <li className="py-3 sm:py-4">
                                          <div className="flex items-center ">
                                                <div className="flex-shrink-0">
                                                      <img
                                                            className="w-8 h-8 rounded-full"
                                                            src="https://picsum.photos/200/300"
                                                            alt="Thomas imageb"
                                                      />
                                                </div>
                                                <div className="flex-1 min-w-0 ms-4">
                                                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                            Thomes Lean
                                                      </p>
                                                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                            505-569-8562
                                                      </p>
                                                </div>
                                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                      $2367
                                                </div>
                                          </div>
                                    </li>
                                    <li className="py-3 sm:py-4">
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
                                                            Neil Sims
                                                      </p>
                                                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                            505-569-8562
                                                      </p>
                                                </div>
                                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                      $320
                                                </div>
                                          </div>
                                    </li>
                                    <li className="py-3 sm:py-4">
                                          <div className="flex items-center ">
                                                <div className="flex-shrink-0">
                                                      <img
                                                            className="w-8 h-8 rounded-full"
                                                            src="https://picsum.photos/200/300"
                                                            alt="Bonnie imagee"
                                                      />
                                                </div>
                                                <div className="flex-1 min-w-0 ms-4">
                                                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                            Bonnie Green
                                                      </p>
                                                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                            505-569-8562
                                                      </p>
                                                </div>
                                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                      $3467
                                                </div>
                                          </div>
                                    </li>
                                    <li className="py-3 sm:py-4">
                                          <div className="flex items-center">
                                                <div className="flex-shrink-0">
                                                      <img
                                                            className="w-8 h-8 rounded-full"
                                                            src="https://picsum.photos/200/300"
                                                            alt="Michael imagel"
                                                      />
                                                </div>
                                                <div className="flex-1 min-w-0 ms-4">
                                                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                            Michael Gough
                                                      </p>
                                                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                            505-569-8562
                                                      </p>
                                                </div>
                                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                      $67
                                                </div>
                                          </div>
                                    </li>
                                    <li className="py-3 sm:py-4">
                                          <div className="flex items-center ">
                                                <div className="flex-shrink-0">
                                                      <img
                                                            className="w-8 h-8 rounded-full"
                                                            src="https://picsum.photos/200/300"
                                                            alt="Lana imagec"
                                                      />
                                                </div>
                                                <div className="flex-1 min-w-0 ms-4">
                                                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                            Lana Byrd
                                                      </p>
                                                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                            505-569-8562
                                                      </p>
                                                </div>
                                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                      $367
                                                </div>
                                          </div>
                                    </li>
                                    <li className="py-3 sm:py-4">
                                          <div className="flex items-center ">
                                                <div className="flex-shrink-0">
                                                      <img
                                                            className="w-8 h-8 rounded-full"
                                                            src="https://picsum.photos/200/300"
                                                            alt="Thomas imagek"
                                                      />
                                                </div>
                                                <div className="flex-1 min-w-0 ms-4">
                                                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                            Thomes Lean
                                                      </p>
                                                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                            505-569-8562
                                                      </p>
                                                </div>
                                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                      $2367
                                                </div>
                                          </div>
                                    </li>
                                    <li className="py-3 sm:py-4">
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
                                                            Neil Sims
                                                      </p>
                                                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                            505-569-8562
                                                      </p>
                                                </div>
                                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                      $320
                                                </div>
                                          </div>
                                    </li>
                                    <li className="py-3 sm:py-4">
                                          <div className="flex items-center ">
                                                <div className="flex-shrink-0">
                                                      <img
                                                            className="w-8 h-8 rounded-full"
                                                            src="https://picsum.photos/200/300"
                                                            alt="Bonnie imagee"
                                                      />
                                                </div>
                                                <div className="flex-1 min-w-0 ms-4">
                                                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                            Bonnie Green
                                                      </p>
                                                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                            505-569-8562
                                                      </p>
                                                </div>
                                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                      $3467
                                                </div>
                                          </div>
                                    </li>
                                    <li className="py-3 sm:py-4">
                                          <div className="flex items-center">
                                                <div className="flex-shrink-0">
                                                      <img
                                                            className="w-8 h-8 rounded-full"
                                                            src="https://picsum.photos/200/300"
                                                            alt="Michael imaged"
                                                      />
                                                </div>
                                                <div className="flex-1 min-w-0 ms-4">
                                                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                            Michael Gough
                                                      </p>
                                                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                            505-569-8562
                                                      </p>
                                                </div>
                                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                      $67
                                                </div>
                                          </div>
                                    </li>
                                    <li className="py-3 sm:py-4">
                                          <div className="flex items-center ">
                                                <div className="flex-shrink-0">
                                                      <img
                                                            className="w-8 h-8 rounded-full"
                                                            src="https://picsum.photos/200/300"
                                                            alt="Lana imaged"
                                                      />
                                                </div>
                                                <div className="flex-1 min-w-0 ms-4">
                                                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                            Lana Byrd
                                                      </p>
                                                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                            505-569-8562
                                                      </p>
                                                </div>
                                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                      $367
                                                </div>
                                          </div>
                                    </li>
                                    <li className="pt-3 pb-0 sm:pt-4">
                                          <div className="flex items-center ">
                                                <div className="flex-shrink-0">
                                                      <img
                                                            className="w-8 h-8 rounded-full"
                                                            src="https://picsum.photos/200/300"
                                                            alt="Thomas images"
                                                      />
                                                </div>
                                                <div className="flex-1 min-w-0 ms-4">
                                                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                            Thomes Lean
                                                      </p>
                                                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                            505-569-8562
                                                      </p>
                                                </div>
                                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                      $2367
                                                </div>
                                          </div>
                                    </li>
                              </ul>
                        </div>
                  </div>
            </div>
      );
}

export default UserDashBoard;
