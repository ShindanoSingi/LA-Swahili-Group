/* eslint-disable no-lone-blocks */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideLoader, showLoader } from "../../redux/loaderSlice";
import { GetUsers } from "../../apicalls/users";
import { setGrandTotal, setUsers } from "../../redux/userSlice";
import md5 from "md5";
import { Link } from "react-router-dom";

function SuperUsersDashBoard() {
      const { users, grandTotal } = useSelector((state) => state.userReducer);
      const [isRotated, setIsRotated] = useState(false);
      const [userId, setUserId] = useState('');

      const dispatch = useDispatch();

      const getUsers = async () => {
            try {
                  dispatch(showLoader());
                  const response = await GetUsers();
                  dispatch(setUsers(response.users));
                  dispatch(setGrandTotal(response.grandTotal));
                  dispatch(hideLoader());
            } catch (error) {
                  dispatch(hideLoader());
            }
      };

      const getPhoneNumberToColor = (phone) => {
            const cleanedPhoneNumber = phone.replace(/\D/g, "");
            const hash = md5(cleanedPhoneNumber);
            const colorCode = hash.substring(0, 6);
            return `#${colorCode}`;
      };

      const handleButtonClick = () => {
            setIsRotated(!isRotated);
      };

    //   Get userId from current user
       const getUserId = (id) => {
           setUserId(id)

    }


    //   Add dashes in the middle of the phone number
        const formatPhoneNumber = (phoneNumber) => {
            const cleanedPhoneNumber = phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
            console.log(cleanedPhoneNumber);
            return cleanedPhoneNumber;
        }

      useEffect(() => {
            getUsers();
            getUserId();

            if(userId){
                console.log(userId)

            }
      }, []);

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
                              <ul>
                                    {users &&
                                          users.map((user, index) =>

                                                <li className={`py-2 sm:py-2`} key={index}>
                                                      <div class=" space-y-2">
                                                            <div
                                                                  class="group flex flex-col gap-2 rounded-lg p-5 text-white"
                                                                  style={{ backgroundColor: getPhoneNumberToColor(user.phone) }}
                                                                  tabindex={index}
                                                            >
                                                                <div className="absolute bg-black py-[0.3rem] min-w-[1.6rem] rounded-full left-[1.8rem] -translate-y-4 text-xs flex justify-center items-center px-[0.4rem]">{index + 1}</div>
                                                                  <div class="flex cursor-pointer items-center justify-between">
                                                                        <div className="flex items-center">
                                                                              <div className=" border-4 border-slate-950 bg-black rounded-full">
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
                                                                                                className="w-10 h-10 fluid text-white dark:text-white rounded-full"
                                                                                                src={
                                                                                                      user.profilePicture
                                                                                                            ? user.profilePicture
                                                                                                            : `https://ui-avatars.com/api/?name=${
                                                                                                                    user.firstName
                                                                                                              }+${
                                                                                                                    user.lastName
                                                                                                              }&background=${getPhoneNumberToColor(
                                                                                                                    user.phone
                                                                                                              )}`
                                                                                                }
                                                                                                alt={
                                                                                                      user.fullName
                                                                                                }
                                                                                          />
                                                                                    )}
                                                                              </div>
                                                                              <div className="flex-1 min-w-0 ms-4 text-red-800">
                                                                                    <p className="text-lg font-medium  truncate dark:text-black">
                                                                                          {
                                                                                            user.fullName
                                                                                          }
                                                                                    </p>
                                                                                    <p className="text-md text-black truncate dark:text-black">
                                                                                          {
                                                                                            formatPhoneNumber(user.phone)
                                                                                          }
                                                                                    </p>
                                                                              </div>
                                                                        </div>
                                                                        <div className="flex flex-col items-center">
                                                                              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-black">
                                                                                    ${user.totalAmount}
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
                                                                                    className={`feather transition-all duration-500 ${
                                                                                          isRotated
                                                                                                ? "group-focus:-rotate-0"
                                                                                                : ""
                                                                                    } group-focus:-rotate-180 dark:text-black feather-chevron-down`}
                                                                                    onClick={
                                                                                          handleButtonClick
                                                                                    }
                                                                              >
                                                                                    <polyline points="6 9 12 15 18 9"></polyline>
                                                                              </svg>
                                                                        </div>
                                                                  </div>
                                                                  <div
                                                                        class={`${
                                                                              isRotated
                                                                                    ? "visible group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000"
                                                                                    : "invisible"
                                                                        } flex justify-around h-auto max-h-0 items-center opacity-0 transition-all `}
                                                                  >
                                                                    <Link to={`/addpayment/${userId}`}>
                                                                    <button
                                                                        className="flex justify-center items-center bg-green-800 rounded-full w-16 p-1 max-w-20"
                                                                        onClick={()=>{
                                                                            getUserId(index)
                                                                        }}
                                                                        >
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
                                                                    </Link>

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
                                                                  </div>
                                                            </div>
                                                      </div>
                                                </li>
                                          )}
                              </ul>
                        </div>
                  </div>
            </div>
      );
}

export default SuperUsersDashBoard;
