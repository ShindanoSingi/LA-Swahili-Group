import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
      DeleteUserPicture,
      GetUserById,
      GetUserPayments
} from "../../apicalls/users";
import { Link, useParams } from "react-router-dom";
import { SetFullName, SetUser } from "../../redux/userSlice";
import { hideLoader, showLoader } from "../../redux/loaderSlice";
import toast from "react-hot-toast";
import { Hourglass } from "react-loader-spinner";
import Loader from "../../components/loader/Loader";
import Button from "../../components/button/Button";
import { formatDollar } from "../../functions/function";
import Spinner from "../../components/spinner/Spinner";

function Contributions() {
      const [userPayments, setUserPayments] = useState([]);
      const [years, setYear] = useState([]);
        const { fullName } = useSelector((state) => state.userReducer);
        const isLoading = useSelector((state) => state.loader);

      const { id } = useParams();
      const dispatch = useDispatch();

      console.log(id);

      const getUserPayments = async () => {
            try {
                  const response = await GetUserPayments(id);
                  console.log(response);
                  showLoader();
                  setUserPayments(response.userPayments);
                  setYear(response.years);
                  dispatch(SetFullName(response.fullName));
                  hideLoader();
            } catch (error) {
                  console.log(error.message);
            }
      };

      //   Send the user to the previous page
      const goBack = () => {
            window.history.back();
      };

      useEffect(() => {
            getUserPayments();
      }, []);

      return (
            <div className=" pt-24 px-2 h-[100vh] overflow-auto border-gray-200 dark:bg-gray-800 text-[#FFFFFF]">
                  {id ? (
                        <>
                              <div className="flex justify-center md:text-xl ">
                                    <div className="w-full rounded-lg shadow lg:w-[50%] ">
                                          <div className="flex flex-col items-center gap-2">
                                                {userPayments ? (
                                                      <div className="w-full">
                                                            <div className="text-3xl bg-gray-500 rounded-lg w-full text-center py-4">
                                                                  {
                                                                    !isLoading ?<div className="grid place-content-center"><Spinner /></div>  : fullName
                                                                  }
                                                            </div>
                                                            <div className="flex items-center py-4 justify-around w-full">
                                                                  <div>
                                                                        <h1 className="text-2xl w-full">
                                                                              Michango
                                                                        </h1>
                                                                  </div>
                                                                  <Link
                                                                        to={`/addpayment/${id}`}
                                                                  >
                                                                        <Button
                                                                              text="Changia Pesa"
                                                                              type="default"
                                                                              width="full"
                                                                        />
                                                                  </Link>
                                                                  <div>
                                                                        <Button
                                                                              text="Cancel"
                                                                              type="outline"
                                                                              onClick={
                                                                                    goBack
                                                                              }
                                                                        />
                                                                  </div>
                                                            </div>
                                                      </div>
                                                ) : (
                                                      ""
                                                )}

                                                {userPayments ? (
                                                      userPayments.map(
                                                            (
                                                                  userPayment,
                                                                  index
                                                            ) => (
                                                                  <div className="font-bold bg-gray-500 rounded-lg w-full text-center pb-4 px-2">
                                                                        <div className="flex flex-col items-center w-full">
                                                                              <h2 className="font-bold md:text-2xl bg-gray-500 rounded-lg w-full text-center px-6 py-4">
                                                                                    Mwaka
                                                                                    Wa{" "}
                                                                                    {
                                                                                          years[
                                                                                                index
                                                                                          ]
                                                                                    }
                                                                              </h2>
                                                                              <div className="relative shadow-md w-full sm:rounded-lg">
                                                                                    <table className="w-full text-sm rtl:text-right text-gray-100 dark:text-gray-100">
                                                                                          <thead className="text-xs md:text-xl text-white uppercase bg-gray-600 dark:text-white">
                                                                                                <tr>
                                                                                                      <th
                                                                                                            scope="col"
                                                                                                            class="px-6 text-left py-4"
                                                                                                      >
                                                                                                            Month
                                                                                                      </th>
                                                                                                      <th
                                                                                                            scope="col"
                                                                                                            class="px-6 py-4"
                                                                                                      >
                                                                                                            Paid
                                                                                                            ?
                                                                                                      </th>
                                                                                                      <th
                                                                                                            scope="col"
                                                                                                            class="px-6 py-4"
                                                                                                      >
                                                                                                            Recvd
                                                                                                            By
                                                                                                      </th>
                                                                                                      <th
                                                                                                            scope="col"
                                                                                                            class="px-6 py-4 text-right"
                                                                                                      >
                                                                                                            Amount
                                                                                                      </th>
                                                                                                </tr>
                                                                                          </thead>
                                                                                          {userPayment.payments ? (
                                                                                                userPayment.payments.map(
                                                                                                      (
                                                                                                            payment,
                                                                                                            index
                                                                                                      ) => (
                                                                                                            <tbody>
                                                                                                                  <tr className="bg-gray-500 md:text-xl border-b border-gray-400">
                                                                                                                        <td className="px-6 py-4 font-medium text-left text-gray-50 whitespace-nowrap dark:text-gray-100">
                                                                                                                              {payment
                                                                                                                                    .month
                                                                                                                                    .length >
                                                                                                                              1
                                                                                                                                    ? payment.month
                                                                                                                                    : `0${payment.month}`}
                                                                                                                        </td>
                                                                                                                        <td className="px-6 py-4 font-medium text-center text-gray-50 whitespace-nowrap dark:text-gray-100">
                                                                                                                              {payment.receivdBy
                                                                                                                                    ? payment.receivdBy
                                                                                                                                    : `N/A`}
                                                                                                                        </td>
                                                                                                                        <td className="px-6 py-4 font-medium text-center text-gray-50 whitespace-nowrap dark:text-gray-100">
                                                                                                                              {payment.paid
                                                                                                                                    ? "Yes"
                                                                                                                                    : `No`}
                                                                                                                        </td>
                                                                                                                        <td class="px-6 py-4 text-right">
                                                                                                                              {formatDollar(
                                                                                                                                    payment.amount
                                                                                                                              )}
                                                                                                                        </td>
                                                                                                                  </tr>
                                                                                                            </tbody>
                                                                                                      )
                                                                                                )
                                                                                          ) : (
                                                                                                <Loader />
                                                                                          )}
                                                                                    </table>
                                                                                    <h1 className="bg-gray-900 md:text-2xl px-6 py-4 ">
                                                                                          Total
                                                                                          Amount
                                                                                          in{" "}
                                                                                          {
                                                                                                years[
                                                                                                      index
                                                                                                ]
                                                                                          }{" "}
                                                                                          :{" "}
                                                                                          {formatDollar(
                                                                                                userPayment.totalAmount
                                                                                          )}
                                                                                    </h1>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                            )
                                                      )
                                                ) : (
                                                      <Loader />
                                                )}
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

export default Contributions;
