import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteUserPicture, GetUserById } from "../../apicalls/users";
import { Link, useParams } from "react-router-dom";
import { setUser } from "../../redux/userSlice";
import { hideLoader, showLoader } from "../../redux/loaderSlice";
import toast from "react-hot-toast";
import { Hourglass } from "react-loader-spinner";

function UserPage() {
      const { user } = useSelector((state) => state.userReducer);

      const dispatch = useDispatch();

      const userId = useParams();
      console.log(userId.id);

      const getUserById = async () => {
            try {
                  const response = await GetUserById(userId.id);
                  console.log(response);
                  showLoader();

                  dispatch(setUser(response.user));
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
                  console.log(error.message);
                  hideLoader();
                  toast.error(error.message);
            }
      };

      useEffect(() => {
            getUserById(userId);
      }, []);

      return (
            <div className="mt-[4rem] pt-2 px-2 min-h-[100vh] bg-[#595954] text-[#FFFFFF]">
                  {user ? (
                        <>
                              <div className="grid gap-2">
                                    <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                                          <div className="flex justify-between w-full mb-4">
                                                <Link
                                                      to={`/updateuserpicture/${user._id}`}
                                                >
                                                      <button className="bg-green-700 rounded-full w-24 px-3 py-1 hover:bg-green-900">
                                                            Update
                                                      </button>
                                                </Link>
                                                <button
                                                      className="bg-gray-500 w-24 hover:bg-gray-700 px-3 py-1 rounded-full"
                                                      onClick={() => {
                                                            window.history.back();
                                                      }}
                                                >
                                                      Back
                                                </button>
                                                <button
                                                      className="bg-red-700 rounded-full w-24 px-3 py-1 hover:bg-red-900 "
                                                      onClick={deletePicture}
                                                >
                                                      Delete
                                                </button>
                                          </div>
                                          <div className="flex items-center flex-col">
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
                                    </div>
                                    <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">

                                          <div className="flex flex-col items-center gap-2">

                                                <h1 className="text-2xl text-center w-full">
                                                      Michango
                                                </h1>

                                                <div className="flex flex-col items-center w-full">
                                                <h2 className="font-bold bg-green-500 rounded-tl-lg rounded-tr-lg w-full text-center px-6 py-4">Mwaka Wa 2024</h2>
                                                <div className="relative overflow-x-auto shadow-md w-full sm:rounded-lg">
                                                      <table className="w-full text-sm text-left rtl:text-right text-gray-100 dark:text-gray-100">
                                                            <thead className="text-xs text-white uppercase bg-gray-600 dark:text-white">
                                                                  <tr>
                                                                        <th
                                                                              scope="col"
                                                                              class="px-6 py-4"
                                                                        >
                                                                              Mwezi Wa
                                                                        </th>
                                                                        <th
                                                                              scope="col"
                                                                              class="px-6 py-4 text-right"
                                                                        >
                                                                              Pesa
                                                                        </th>
                                                                  </tr>
                                                            </thead>
                                                            <tbody>
                                                                  <tr className="bg-gray-500 border-b border-gray-400">
                                                                        <th
                                                                              scope="row"
                                                                              className="px-6 py-4 font-medium text-gray-50 whitespace-nowrap dark:text-gray-100"
                                                                        >
                                                                              1
                                                                        </th>
                                                                        <td class="px-6 py-4 text-right">
                                                                              $10
                                                                        </td>
                                                                  </tr>

                                                                  <tr className="bg-gray-500 border-b border-gray-400">
                                                                        <th
                                                                              scope="row"
                                                                              class="px-6 py-4 font-medium text-gray-50 whitespace-nowrap dark:text-gray-100"
                                                                        >
                                                                              2
                                                                        </th>
                                                                        <td class="px-6 py-4 text-right">
                                                                              $10
                                                                        </td>
                                                                  </tr>
                                                                  <tr className="bg-gray-500 border-b border-gray-400">
                                                                        <th
                                                                              scope="row"
                                                                              class="px-6 py-4 font-medium text-gray-50 whitespace-nowrap dark:text-gray-100"
                                                                        >
                                                                              3
                                                                        </th>
                                                                        <td class="px-6 py-4 text-right">
                                                                              $10
                                                                        </td>
                                                                  </tr>
                                                                  <tr className="bg-gray-500 border-b border-gray-400">
                                                                        <th
                                                                              scope="row"
                                                                              class="px-6 py-4 font-medium text-gray-50 whitespace-nowrap dark:text-gray-100"
                                                                        >
                                                                              4
                                                                        </th>
                                                                        <td class="px-6 py-4 text-right">
                                                                              $10
                                                                        </td>
                                                                  </tr>
                                                                  <tr className="bg-gray-500 border-b border-gray-400">
                                                                        <th
                                                                              scope="row"
                                                                              class="px-6 py-4 font-medium text-gray-50 whitespace-nowrap dark:text-gray-100"
                                                                        >
                                                                              5
                                                                        </th>
                                                                        <td class="px-6 py-4 text-right">
                                                                              $10
                                                                        </td>
                                                                  </tr>
                                                                  <tr className="bg-gray-500 border-b border-gray-400">
                                                                        <th
                                                                              scope="row"
                                                                              class="px-6 py-4 font-medium text-gray-50 whitespace-nowrap dark:text-gray-100"
                                                                        >
                                                                              6
                                                                        </th>
                                                                        <td class="px-6 py-4 text-right">
                                                                              $10
                                                                        </td>
                                                                  </tr>
                                                                  <tr className="bg-gray-500 border-b border-gray-400">
                                                                        <th
                                                                              scope="row"
                                                                              class="px-6 py-4 font-medium text-gray-50 whitespace-nowrap dark:text-gray-100"
                                                                        >
                                                                              7
                                                                        </th>
                                                                        <td class="px-6 py-4 text-right">
                                                                              $10
                                                                        </td>
                                                                  </tr>
                                                                  <tr className="bg-gray-500 border-b border-gray-400">
                                                                        <th
                                                                              scope="row"
                                                                              class="px-6 py-4 font-medium text-gray-50 whitespace-nowrap dark:text-gray-100"
                                                                        >
                                                                              8
                                                                        </th>
                                                                        <td class="px-6 py-4 text-right">
                                                                              $10
                                                                        </td>
                                                                  </tr>
                                                                  <tr className="bg-gray-500 border-b border-gray-400">
                                                                        <th
                                                                              scope="row"
                                                                              class="px-6 py-4 font-medium text-gray-50 whitespace-nowrap dark:text-gray-100"
                                                                        >
                                                                              9
                                                                        </th>
                                                                        <td class="px-6 py-4 text-right">
                                                                              $10
                                                                        </td>
                                                                  </tr>
                                                                  <tr className="bg-gray-500 border-b border-gray-400">
                                                                        <th
                                                                              scope="row"
                                                                              class="px-6 py-4 font-medium text-gray-50 whitespace-nowrap dark:text-gray-100"
                                                                        >
                                                                              10
                                                                        </th>
                                                                        <td class="px-6 py-4 text-right">
                                                                              $10
                                                                        </td>
                                                                  </tr>
                                                                  <tr className="bg-gray-500 border-b border-gray-400">
                                                                        <th
                                                                              scope="row"
                                                                              class="px-6 py-4 font-medium text-gray-50 whitespace-nowrap dark:text-gray-100"
                                                                        >
                                                                              11
                                                                        </th>
                                                                        <td class="px-6 py-4 text-right">
                                                                              $10
                                                                        </td>
                                                                  </tr>
                                                                  <div className="rounded-bl-lg rounded-br-lg">

                                                                  </div>
                                                                  <tr className="bg-gray-500 border-b border-gray-400">
                                                                        <th
                                                                              scope="row"
                                                                              class="px-6 py-4 font-medium text-gray-50 whitespace-nowrap dark:text-gray-100"
                                                                        >
                                                                              12
                                                                        </th>
                                                                        <td class="px-6 py-4 text-right">
                                                                              $10
                                                                        </td>
                                                                  </tr>
                                                            </tbody>
                                                      </table>
                                                </div>
                                                </div>

                                          </div>
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
      );
}

export default UserPage;
