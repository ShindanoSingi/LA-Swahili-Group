"use strict";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetUserById } from "../../apicalls/users";
import { useParams } from "react-router-dom";
import { setUser } from "../../redux/userSlice";

function UserPage() {
      const { user } = useSelector((state) => state.userReducer);

      const dispatch = useDispatch();

      const userId = useParams();
      console.log(userId.id);

      const getUserById = async () => {
            try {
                  const response = await GetUserById(userId.id);
                  console.log(response.user);
                  dispatch(setUser(response.user));
            } catch (error) {
                  console.log(error.message);
            }
      };

      useEffect(() => {
            getUserById(userId);
      }, []);
      console.log(user);
      return (
            <div className="mt-[4rem] pt-2 px-2 min-h-[100vh] bg-[#595954] text-[#FFFFFF]">
                  <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex items-center flex-col">
                              {user.profilePicture ? (
                                    <img
                                          src={require(`../../images/${user.profilePicture}`)}
                                          alt={user.firstName}
                                          className={`h-18 w-18  fluid rounded-full`}
                                    />
                              ) : (
                                    <img
                                          className="w-8 h-8 fluid rounded-full"
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
                                          <b>Phone #:</b>
                                    </div>
                                    <div className="text-xl">
                                          <p>{user?.fullName}</p>
                                          <p>{user?.phone}</p>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <button
                  className="bg-gray-400 hover:bg-gray-700 mt-2 text-white w-full font-bold py-2 px-4 rounded-full"
                        onClick={() => {
                              window.history.back();
                        }}
                  >
                        Back
                  </button>
            </div>
      );
}

export default UserPage;
