import React, { useEffect } from "react";
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
            <div className="flex justify-center md:grid md:place-content-center items-center place-content-center px-2 h-[100vh] bg-[#595954] text-[#FFFFFF]">
                <div className="w-full">
                {user ? (
                        <>
                              <div className="grid md:text-xl gap-2">
                                    <div className="w-full md:w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                                          <div className="flex justify-between md:w-[30rem] mb-4">
                                                <Link
                                                      to={`/updateuserpicture/${user._id}`}
                                                >
                                                      <Button
                                                            text="Update"
                                                            type="success"
                                                            width="24 md:w-32"
                                                      />
                                                </Link>

                                                <Button
                                                      text="Cancel"
                                                      type="default"
                                                      width="24 md:w-32"
                                                      onClick={() => {
                                                            window.history.back();
                                                      }}
                                                />

                                                <Button
                                                      text="Delete"
                                                      type="danger"
                                                      width="24 md:w-32"
                                                      onClick={deletePicture}
                                                />
                                          </div>
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
                                                                  class="h-full w-full rounded-full overflow-hidden shadow"
                                                            />
                                                      </div>
                                                ) : (
                                                      <img
                                                            className="h-1/2 w-1/2 fluid rounded-full"
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
                                                            <p>
                                                                  {
                                                                        user?.fullName
                                                                  }
                                                            </p>
                                                            <p>{user?.phone}</p>
                                                      </div>
                                                </div>
                                          </div>
                                          <Link to={`/mic/${userId.id}`}>
                                                <Button
                                                      text="Contributions"
                                                      type="submitted"
                                                      width="full"
                                                />
                                          </Link>
                                    </div>
                              </div>
                        </>
                  ) : (
                        <div className="grid justify-center items-center h-[80vh] w-100vw">
                              <Hourglass
                                    visible={true}
                                    height="80"
                                    width="80"
                                    ariaLabel="hourglass-loading"
                                    wrapperStyle={{}}
                                    wrapperClass=""
                                    colors={["#306cce", "#72a1ed"]}
                              />
                        </div>
                  )}
                </div>
                {
                    isLoading && <Loader />
                }
            </div>
      );
}

export default UserPage;
