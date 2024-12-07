import React, { useEffect} from "react";
import { SetGrandTotal, SetUsers } from "../../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { showLoader, hideLoader } from "../../redux/loaderSlice";
import { GetUsers } from "../../apicalls/users";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import { formatDollar } from "../../functions/function";
const md5 = require("md5");

function UserDashBoard() {
      const {users, grandTotal} = useSelector((state) => state.userReducer);
      const isLoading = useSelector((state) => state.loader);

      const dispatch = useDispatch();

    //   const phoneNumberToColor = (phoneNumber) => {
    //         const cleanedPhoneNumber = phoneNumber.replace(/\D/g, "");
    //         const hash = md5(cleanedPhoneNumber);
    //         const colorCode = hash.substring(0, 6);
    //         return `#${colorCode}`;
    //   };

    //   console.log(phoneNumberToColor("2077133140"))

    const getUsers = async () => {
        try {
            dispatch(showLoader())
            const response = await GetUsers();
            dispatch(SetUsers(response.users));
            dispatch(SetGrandTotal(response.grandTotal));
            console.log(response.users);
            dispatch(hideLoader())

            if(response.success){
                dispatch(SetUsers(response.users));
                dispatch(SetGrandTotal(response.grandTotal));
            }
        } catch (error) {
            dispatch(hideLoader())
            return error.message
        }
    }

    useEffect(() => {
        getUsers();
    }, [])

      return (
            <div className="pt-[5rem] px-2 min-h-[100vh] flex flex-col items-center bg-[#595954] text-[#FFFFFF]">
                  {
                        users ?
                        <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow md:max-w-[90%] lg:max-w-[60%] sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex items-center justify-between mb-4">
                              <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                                    Members Contrib.
                              </h5>
                              <div className="flex gap-2">
                              <h2 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                                    Total:
                              </h2>
                              <h2 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                                    {formatDollar(grandTotal)}
                              </h2>
                              </div>
                        </div>
                        <div className="flow-root max-h-[82vh] overflow-y-scroll overflow-x-hidden">
                              <ul
                                    role="list"
                                    className="divide-y divide-gray-200 dark:divide-gray-700"
                              >
                                    {users && users.map((user, index) => (
                                        <Link to={`/users/${
                                            user._id
                                        }`} key={`${
                                            user._id

                                        }`}>
                                            <li className='py-3 sm:py-4'>
                                        <div className="flex items-center border-b pb-1 border-b-slate-500">
                                              <div className="flex-shrink-0">

                                              {
                                                    user.profilePicture ? (
                                                        <img src={require(`../../images/${user.profilePicture}`)} alt={user.firstName}
                                                        className={`h-10 w-10  fluid rounded-full`}
                                                        />
                                                    ) : <img
                                                    className="w-10 h-10 fluid rounded-full"
                                                    src={
                                                          `https://ui-avatars.com/api/?name=${user.firstName}+${user.lastName}&&color=fff`
                                                    }
                                                    alt={user.fullName}
                                              />
                                              }
                                              </div>
                                              <div className="flex-1 min-w-0 ms-4">
                                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                          {user.fullName}
                                                    </p>
                                                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">

                                                    </p>
                                              </div>
                                              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                    {formatDollar(user.totalAmount)}
                                              </div>
                                        </div>
                                  </li>
                                        </Link>

                                    ))}
                              </ul>
                        </div>
                  </div> : <Loader />
                  }
                  {
                    isLoading && <Loader />
                  }
            </div>
      );
}

export default UserDashBoard;
