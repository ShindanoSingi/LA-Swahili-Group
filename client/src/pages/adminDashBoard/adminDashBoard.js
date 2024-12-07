import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { formatDollar } from "../../functions/function";
import { formatPhoneNumber } from "../../functions/function";
import { formatDate } from "../../functions/function";
import Loader from "../../components/loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { hideLoader, showLoader } from "../../redux/loaderSlice";
import { FaCheck, FaTrash } from "react-icons/fa6";
import Button from "../../components/button/Button";
import Spinner from "../../components/spinner/Spinner";
import { IoIosArrowDown } from "react-icons/io";
import { GetUsers } from "../../apicalls/users";
import { FaUser } from "react-icons/fa";
import Input from "../../components/input/Input";
import { SetShowInput, SetUserId } from "../../redux/userSlice";


function AdminDashBoard() {
      const [users, setUsers] = useState(null);
      const isLoading = useSelector((state) => state.loader);
      const [id, setId] = useState(null);
      const showInput = useSelector((state) => state.userReducer.showInput);

      const dispatch = useDispatch();

      const getUsers = async () => {
            try {
                  dispatch(showLoader());
                  const response = await GetUsers();
                  console.log(response);
                  setUsers(response);
                  dispatch(hideLoader());
            } catch (error) {
                  dispatch(hideLoader());
                  return error.message;
            }
      };

      const getUserById = async (userId) => {
        dispatch(SetUserId(userId));
      }

      id && console.log(id);

      useEffect(() => {
            getUsers();
      }, []);

      return (
            <div className="pt-[6rem] px-2 min-h-[100vh] bg-white  dark:bg-gray-800 dark:border-gray-700 text-[#FFFFFF]">
                  {users ? (
                        <div className="w-full max-w-5xl p-0 mx-auto rounded-lg sm:p-8">
                              <div className="flex items-center justify-between mb-4">
                                    <h5 className="text-xl font-bold leading-none md:text-2xl text-gray-900 dark:text-white">
                                          Members Contributions
                                    </h5>
                                    <div className="flex gap-1">
                                          <h2 className="text-xl font-bold md:text-2xl leading-none text-gray-900 dark:text-white">
                                                Total:
                                          </h2>
                                          <h2 className="text-xl font-bold md:text-2xl leading-none text-gray-900 dark:text-white">
                                                {users &&
                                                      formatDollar(
                                                            users.grandTotal
                                                      )}
                                          </h2>
                                    </div>
                              </div>
                              <div className="flow-root max-h-[82vh] overflow-y-auto">
                                    <ul className="gap-2 pb-2 pt-2 flex flex-col">
                                          {users &&
                                                users.users.map(
                                                      (user, index) => (
                                                            <li key={user._id}>
                                                                  <div>
                                                                        <div
                                                                              class="group flex flex-col rounded-lg  h-auto  group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000 group-focus:visible transition-all bg-black p-3 md:p-4 md:text-lg text-white"
                                                                              tabindex={
                                                                                    index
                                                                              }
                                                                        >
                                                                              <div class="flex cursor-pointer items-center justify-between">
                                                                                    <div className="flex items-center">
                                                                                          <div className="flex-shrink-0">
                                                                                                {user.profilePicture ? (
                                                                                                    <div>
                                                                                                        <p className="text-lg relative left-[2rem] top-[2rem] md:left-[6rem] rounded-full w-10 md:rounded-full flex justify-center items-center h-10 bg-yellow-700 text-white truncate ">
                                                                                                            {index +
                                                                                                                  1}
                                                                                                      </p>
                                                                                                      <img
                                                                                                            src={require(`../../images/${user.profilePicture}`)}
                                                                                                            alt={
                                                                                                                  user.firstName
                                                                                                            }
                                                                                                            className={`h-10 w-10 md:w-[8rem] md:h-[8rem] fluid rounded-full`}
                                                                                                      />
                                                                                                    </div>

                                                                                                ) : (
                                                                                                    <div>
                                                                                                        <p className="text-lg relative left-[2rem] top-[2rem] md:left-[6rem] rounded-full w-10 md:rounded-full flex justify-center items-center h-10 bg-yellow-700 text-white truncate ">
                                                                                                            {index +
                                                                                                                  1}
                                                                                                      </p>
                                                                                                      <img
                                                                                                            className="h-10 w-10 md:w-[8rem] md:h-[8rem] fluid rounded-full"
                                                                                                            src={`https://ui-avatars.com/api/?name=${user.firstName}+${user.lastName}&&color=fff`}
                                                                                                            alt={
                                                                                                                  user.fullName
                                                                                                            }
                                                                                                      />
                                                                                                    </div>

                                                                                                )}
                                                                                          </div>
                                                                                          <div className="flex-1 min-w-0 ml-8 ms-4">
                                                                                                <div className="flex items-center gap-4 justify-between">
                                                                                                      <p className="text-lg font-medium md:text-xl text-gray-900 truncate md:whitespace-normal dark:text-white">
                                                                                                            {user.fullName &&
                                                                                                                  user.fullName}
                                                                                                      </p>
                                                                                                </div>
                                                                                                <p className="text-sm md:text-lg py-2 text-gray-500 truncate dark:text-gray-400">
                                                                                                      {formatPhoneNumber(
                                                                                                            user.phone
                                                                                                      )}
                                                                                                </p>

                                                                                                <div className="flex flex-col gap-2">
                                                                                                      <span className="text-sm text-gray-200 md:text-lg truncate dark:text-gray-200">
                                                                                                            Added
                                                                                                            By:{" "}
                                                                                                            <span className="text-sm md:text-lg text-gray-500 dark:text-gray-400">
                                                                                                                  {user.addedBy
                                                                                                                        ? user.addedBy
                                                                                                                        : "n/a"}
                                                                                                            </span>{" "}
                                                                                                      </span>
                                                                                                      <span className="text-sm text-gray-200 md:text-lg truncate dark:text-gray-200">
                                                                                                            Added:{" "}
                                                                                                            <span className="text-sm md:text-lg text-gray-500 truncate dark:text-gray-400">
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

                                                                                    <div>
                                                                                          {
                                                                                                user.paid
                                                                                          }
                                                                                    </div>

                                                                                    <div className="flex flex-col items-center">
                                                                                          <div className="inline-flex items-center md:text-lg text-base font-semibold text-gray-900 dark:text-white">
                                                                                                {formatDollar(
                                                                                                      user.totalAmount
                                                                                                )}
                                                                                          </div>
                                                                                          <IoIosArrowDown className="feather transition-all duration-500  group-focus:-rotate-180 dark:text-whitefeather-chevron-down" />
                                                                                    </div>
                                                                              </div>
                                                                              <div class="invisible w-full flex md:flex-row gap-4 flex-col justify-around h-auto max-h-0 pt-4 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
                                                                                    <Button
                                                                                          type="danger"
                                                                                          width="full md:w-40"
                                                                                          icon={
                                                                                                <FaTrash
                                                                                                      size={
                                                                                                            20
                                                                                                      }
                                                                                                />
                                                                                          }
                                                                                    />
                                                                                    <Button
                                                                                          type="success"
                                                                                          width="full md:w-40"
                                                                                          text="Update position"
                                                                                          onClick={() => {
                                                                                                dispatch(
                                                                                                      SetShowInput(
                                                                                                            !showInput
                                                                                                      )
                                                                                                );
                                                                                                getUserById(user._id);
                                                                                          }}
                                                                                    />

                                                                                    <Button
                                                                                          type="default"
                                                                                          width="full md:w-40"
                                                                                          text="Cancel"
                                                                                    />
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                            </li>
                                                      )
                                                )}
                                                {
                                                        showInput && (
                                                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                                            <Input
                                                            className="w-full"
                                                            label="What is the position?" />
                                                      </div>
                                                        )
                                                }


                                    </ul>
                              </div>
                        </div>
                  ) : (
                        <Loader />
                  )}
            </div>
      );
}

export default AdminDashBoard;
