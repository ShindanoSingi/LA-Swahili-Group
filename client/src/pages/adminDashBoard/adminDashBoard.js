import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { formatDollar } from "../../functions/function";
import { formatPhoneNumber } from "../../functions/function";
import { formatDate } from "../../functions/function";
import Loader from "../../components/loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { hideLoader, showLoader } from "../../redux/loaderSlice";

function AdminDashBoard() {
      const [users, setUsers] = useState(null);
      const isLoading = useSelector((state) => state.loader);

      const dispatch = useDispatch();

      const getUsers = async () => {
            try {
                dispatch(showLoader())
                  const response = await axios.get(`/api/users/get-users`);
                  setUsers(response.data);
                dispatch(hideLoader())

            } catch (error) {
                    dispatch(hideLoader())
                  return error.message;
            }
      };

      const userPaid = async () => {
            try {
                  const response = await axios.put(`/api/users/user-paid`,{

                        headers: {
                            Authorization: `Bear ${localStorage.getItem(
                                  "token"
                            )}`
                      }

                  });
                  setUsers(response.data);
            } catch (error) {
                  return error.message;
            }

      };

      users && console.log(users);

      useEffect(() => {
            getUsers();
            userPaid();
      }, []);

      return (
            <div className="pt-[6rem] px-2 min-h-[100vh] bg-white  dark:bg-gray-800 dark:border-gray-700 text-[#FFFFFF]">
                  {users ? (
                        <div className="w-full max-w-md p-0  rounded-lg sm:p-8">
                              <div className="flex items-center justify-between mb-4">
                                    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                                          Members Contributions
                                    </h5>
                                    <div className="flex gap-1">
                                          <h2 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                                                Total:
                                          </h2>
                                          <h2 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                                                {users &&
                                                      formatDollar(
                                                            users.grandTotal
                                                      )}
                                          </h2>
                                    </div>
                              </div>
                              <div className="flow-root max-h-[82vh] overflow-y-auto">
                                    <ul className="gap-2 pb-2 flex flex-col">
                                          {users &&
                                                users.users.map(
                                                      (user, index) => (
                                                            <li key={user._id}>
                                                                  <div>
                                                                        <div
                                                                              class="group flex flex-col rounded-lg bg-black p-3 text-white"
                                                                              tabindex={
                                                                                    index
                                                                              }
                                                                        >
                                                                              <div class="flex cursor-pointer items-center justify-between">
                                                                                    <div className="flex items-center">
                                                                                          <div className="flex-shrink-0">
                                                                                                {user.profilePicture ? (
                                                                                                      <img
                                                                                                            src={require(`../../images/${user.profilePicture}`)}
                                                                                                            alt={
                                                                                                                  user.firstName
                                                                                                            }
                                                                                                            className={`h-10 w-10  fluid rounded-full`}
                                                                                                      />
                                                                                                ) : (
                                                                                                      <img
                                                                                                            className="w-10 h-10 fluid rounded-full"
                                                                                                            src={`https://ui-avatars.com/api/?name=${user.firstName}+${user.lastName}&&color=fff`}
                                                                                                            alt={
                                                                                                                  user.fullName
                                                                                                            }
                                                                                                      />
                                                                                                )}
                                                                                          </div>
                                                                                          <div className="flex-1 min-w-0 ms-4">
                                                                                                <div className="flex w-[10rem] items-center justify-between">
                                                                                                      <p className="text-lg font-medium text-gray-900 truncate dark:text-white">
                                                                                                            {user.fullName &&
                                                                                                                  user.fullName}
                                                                                                      </p>
                                                                                                      <p className="text-lg rounded-full w-7 flex justify-center items-center h-7 bg-yellow-700 text-white truncate ">
                                                                                                            {index +
                                                                                                                  1}
                                                                                                      </p>

                                                                                                </div>
                                                                                                <p className="text-md py-2 text-gray-500 truncate dark:text-gray-400">
                                                                                                            {formatPhoneNumber(
                                                                                                                  user.phone
                                                                                                            )}
                                                                                                      </p>

                                                                                                <div className="flex flex-col gap-2">
                                                                                                      <span className="text-sm text-gray-200 truncate dark:text-gray-200">
                                                                                                            Added
                                                                                                            By:{" "}
                                                                                                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                                                                                                  {user.addedBy
                                                                                                                        ? user.addedBy
                                                                                                                        : "n/a"}
                                                                                                            </span>{" "}
                                                                                                      </span>
                                                                                                      <span className="text-sm text-gray-200 truncate dark:text-gray-200">
                                                                                                            Added:{" "}
                                                                                                            <span className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                                                                                  {user
                                                                                                                        ? formatDate(
                                                                                                                                user.createdAt
                                                                                                                          )
                                                                                                                        : "n/a"}
                                                                                                            </span>{" "}
                                                                                                      </span>
                                                                                                </div>
                                                                                          </div>
                                                                                    </div>
                                                                                    <div className="flex flex-col items-center">
                                                                                          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                                                                {formatDollar(
                                                                                                      user.totalAmount
                                                                                                )}
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
                                                                              <div class="invisible flex justify-around h-auto max-h-0 pt-4 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">

                                                                                    <button className="flex justify-center items-center bg-green-600 rounded-full w-16 p-1 max-w-20">
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
                                                                                                class="feather feather-check"
                                                                                          >
                                                                                                <polyline points="20 6 9 17 4 12"></polyline>
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
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                            </li>
                                                      )
                                                )}
                                    </ul>
                              </div>
                        </div>
                  ) : (
                        <Loader />
                  )}
                  {
                        isLoading && <Loader />
                  }
            </div>
      );
}

export default AdminDashBoard;
