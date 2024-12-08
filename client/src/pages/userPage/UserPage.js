import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteUserPicture, GetUserById } from "../../apicalls/users";
import { Link, useParams } from "react-router-dom";
import { SetUser, SetUserId } from "../../redux/userSlice";
import { hideLoader, showLoader } from "../../redux/loaderSlice";
import toast from "react-hot-toast";
import { Hourglass } from "react-loader-spinner";
import Button from "../../components/button/Button";
import Loader from "../../components/loader/Loader";

function UserPage() {
      const { user } = useSelector((state) => state.userReducer);
      const {userRole} = useSelector((state) => state.userReducer);

      const dispatch = useDispatch();
      const isLoading = useSelector((state) => state.loader);

      const userId = useParams();
      console.log(userId.id);

      const getUserById = async () => {
            try {
                  const response = await GetUserById(userId.id);
                  console.log(response);
                  showLoader();

                  dispatch(SetUser(response.user));
                  hideLoader();
            } catch (error) {
                  console.log(error.message);
            }
      };

      const deletePicture = async () => {
            try {
                  showLoader();
                  const response = await DeleteUserPicture(userId.id);
                  hideLoader();
                  if (response.success) {
                        toast.success(response.message);
                  }
            } catch (error) {
                  hideLoader();
                  return error.message;
            }
      };

      useEffect(() => {
            getUserById(userId);
            dispatch(SetUserId(userId.id));
      }, []);

      return (
            <div className=" flex justify-center items-center px-2  h-screen bg-[#595954] text-[#FFFFFF]">
                {user ? (


                                    <div className="p-4 w-full md:w-[80%] lg:w-[50%] md:text-2xl bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">

                                          {
                                                                (userRole === "Admin") && <div className="flex justify-between  mb-4">
                                                                <Link
                                                                      to={`/updateuserpicture/${user._id}`}
                                                                >
                                                                      <Button
                                                                            text="Picture"
                                                                            type="success"
                                                                            width="24 md:w-36"
                                                                      />
                                                                </Link>

                                                                <Button
                                                                      text="Cancel"
                                                                      type="default"
                                                                      width="24 md:w-36"
                                                                      onClick={() => {
                                                                            window.history.back();
                                                                      }}
                                                                />

                                                                <Button
                                                                      text="Delete"
                                                                      type="danger"
                                                                      width="24 md:w-36"
                                                                      onClick={deletePicture}
                                                                />
                                                          </div>
                                                            }
                                          <div className="flex items-center mb-4 flex-col">
                                                {user.profilePicture ? (
                                                      <div
                                                            tabindex="0"
                                                            class="focus:outline-none h-60 w-60 mb-4 lg:mb-0 mr-4"
                                                      >
                                                            <img
                                                                  src={require(`../../images/${user.profilePicture}`)}
                                                                  alt={
                                                                        user.firstName
                                                                  }
                                                                  class="h-[14rem] w-[14rem] rounded-full overflow-hidden shadow"
                                                            />
                                                      </div>
                                                ) : (
                                                      <img
                                                            className="h-[14rem] w-[14rem] fluid rounded-full"
                                                            src={
                                                                  user.profilePicture
                                                                        ? user.profilePicture
                                                                        : `https://ui-avatars.com/api/?name=${user.firstName}+${user.lastName}&color=fff`
                                                            }
                                                            alt={user.fullName}
                                                      />
                                                )}
                                                <div className="flex justify-center gap-6 w-full pt-2">
                                                      <div className="flex flex-col text-xl">
                                                            <b>Name:</b>
                                                            {
                                                                (userRole === "Admin") === "Admin" && <b>Phone #:</b>
                                                            }
                                                      </div>
                                                      <div className="text-xl md:text-2xl">
                                                            <p>
                                                                  {
                                                                        user?.fullName
                                                                  }
                                                            </p>
                                                            {
                                                                (userRole === "Admin") && <p>{user?.phone}</p>
                                                            }

                                                      </div>
                                                </div>
                                          </div>
                                          <div className="flex flex-col gap-6">
                                          <Link to={`/edit/user/${userId.id}`}>
                                                <Button
                                                      text="Edit"
                                                      type="success"
                                                      width="full"
                                                />
                                          </Link>
                                          <Link to={`/mcontrib/${userId.id}`}>
                                                <Button
                                                      text="View Contributions"
                                                      type="submitted"
                                                      width="full"
                                                />
                                          </Link>
                                          <div onClick={
                                            () => {
                                                  window.history.back();
                                            }
                                          }>
                                          <Button
                                                      text="Cancel"
                                                      type="default"
                                                      width="full"
                                                />
                                          </div>

                                          </div>
                                    </div>

                  ) : <div className="absolute">
                    <Loader />
                    </div>
                  }
            </div>
      );
}

export default UserPage;
