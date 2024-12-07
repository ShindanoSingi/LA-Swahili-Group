/* eslint-disable no-lone-blocks */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideLoader, showLoader } from "../../redux/loaderSlice";
import { GetUsers } from "../../apicalls/users";
import { SetGrandTotal, SetUsers } from "../../redux/userSlice";
import md5 from "md5";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import { FaPencil, FaPlus, FaTrash } from "react-icons/fa6";

function SuperUsersDashBoard() {
      const { users, grandTotal } = useSelector((state) => state.userReducer);
      const [isRotated, setIsRotated] = useState(false);
      const [userId, setUserId] = useState('');

      const dispatch = useDispatch();

      const getUsers = async () => {
            try {
                  dispatch(showLoader());
                  const response = await GetUsers();
                  dispatch(SetUsers(response.users));
                  dispatch(SetGrandTotal(response.grandTotal));
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
            <div className="mt-[4rem] pt-2 px-2 flex justify-center min-h-[100vh] bg-[#595954] text-[#FFFFFF]">
                  <div className="w-full max-w-5xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
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
                                                                  <div class="flex cursor-pointer items-center justify-between">
                                                                        <div className="flex items-center">
                                                                              <div className=" border-4 md:text-xl border-slate-950 text-white bg-black rounded-full">
                                                                                    {user.profilePicture ? (
                                                                                          <img
                                                                                                src={require(`../../images/${user.profilePicture}`)}
                                                                                                alt={
                                                                                                      user.firstName
                                                                                                }
                                                                                                className={`h-10 md:text-xl w-10 md:h-14 md:w-14 text-white  fluid rounded-full`}
                                                                                          />
                                                                                    ) : (
                                                                                          <img
                                                                                                className="w-10 h-10 md:text-xl md:h-14 md:w-14 fluid text-white dark:text-white rounded-full"
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
                                                                                    <p className="text-xl font-medium md:text-2xl  truncate dark:text-black">
                                                                                          {
                                                                                            user.fullName
                                                                                          }
                                                                                    </p>
                                                                                    <p className="text-md text-black md:text-xl truncate dark:text-black">
                                                                                          {
                                                                                            formatPhoneNumber(user.phone)
                                                                                          }
                                                                                    </p>
                                                                              </div>
                                                                        </div>
                                                                        <div className="bg-black py-[0.3rem] min-w-[1.6rem] rounded-full md:text-lg lg:text-xl h-[1.8rem] w-[1.8rem] -translate-y-4 text-xs flex justify-center items-center px-[0.4rem]">
                                                                              {index +
                                                                                    1}
                                                                        </div>
                                                                        <div className="flex flex-col md:text-xl items-center">
                                                                              <div className="inline-flex items-center text-base md:text-xl font-semibold text-gray-900 dark:text-black">
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
                                                                                    className={`feather transition-all md:text-xl duration-500 ${
                                                                                          isRotated
                                                                                                ? "group-focus:-rotate-0"
                                                                                                : "roup-focus:-rotate-180"
                                                                                    } group-focus:-rotate-180 dark:text-black md:text-xl feather-chevron-down`}
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
                                                                        } flex justify-around h-auto max-h-0 md:text-xl items-center opacity-0 transition-all `}
                                                                  >
                                                                    <Link to={`/addpayment/${userId}`}>
                                                                    <Button
                                                                        text="Add Payment"
                                                                        type="success"
                                                                        width="w-1/3"
                                                                        onClick={()=>{
                                                                            getUserId(index)
                                                                        }}
                                                                        icon={
                                                                            <FaPlus
                                                                                  size={
                                                                                        20
                                                                                  }
                                                                            />
                                                                      }
                                                                     />
                                                                    </Link>
                                                                    <Link to={`/edituser`}>
                                                                    <Button
                                                                        text="Edit"
                                                                        type="default"
                                                                        width="48"
                                                                        icon={
                                                                            <FaPencil
                                                                                  size={
                                                                                        20
                                                                                  }
                                                                            />
                                                                        }
                                                                     />
                                                                    </Link>

                                                                    <Button
                                                                        text="Delete"
                                                                        type="danger"
                                                                        width="w-1/3"
                                                                        icon={
                                                                            <FaTrash
                                                                                  size={
                                                                                        20
                                                                                  }
                                                                            />
                                                                        }
                                                                     />
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
