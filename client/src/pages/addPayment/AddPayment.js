import React, { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import "./AddPayment.css";
import { useSelector } from "react-redux";

const AddPayment = () => {
      const { fullName } = useSelector((state) => state.userReducer);
      const [userPayment, setUserPayments] = useState({
            amount: 0,
            day: "",
            month: "",
            year: "",
            fullName: fullName
      });
      const [scrollPosition, setScrollPosition] = useState(0);

      const scrollLeft = () => {
            setScrollPosition(scrollPosition + 100);
      };

      const scrollRight = () => {
            setScrollPosition(scrollPosition - 100);
      };

      const handleSubmit = (e) => {
            e.preventDefault();
            const { amount, day, month, year, fullName } = userPayment;

            console.log(amount, day, month, year, fullName);
      };

      return (
            <div className="mt-[4rem] pt-2 px-2 min-h-[100vh] bg-[#595954] text-[#FFFFFF]">
                  <div className="form-container">
                        <form className="form">
                              <div className="form-group">
                                    <label for="email">Full Name</label>
                                    <input
                                          type="text"
                                          id="fullName"
                                          name="fullName"
                                          required="Yes"
                                          placeholder="Jerome Luaba"
                                          value={fullName}
                                          onChange={(e) =>
                                                setUserPayments({
                                                      ...userPayment,
                                                      fullName: e.target.value
                                                })
                                          }
                                    />
                              </div>
                              <div className="form-group">
                                    <label for="name">Amount</label>
                                    <input
                                          type="number"
                                          id="amount"
                                          name="amount"
                                          required="Yes"
                                          placeholder="$0.00"
                                          value={userPayment.amount}
                                          onChange={(e) =>
                                                setUserPayments({
                                                      ...userPayment,
                                                      amount: e.target.value
                                                })
                                          }
                                    />
                              </div>

                              <div class="w-full max-w-lg p-6 mx-auto bg-gray-800 rounded-2xl shadow-xl flex flex-col">
                                    <div class="flex items-center justify-between mb-4">
                                          <div className="flex flex-col items-start">
                                                <h1 className="uppercase font-semibold text-lg">
                                                      Month
                                                </h1>
                                                <select
                                                      id="month"
                                                      class="uppercase text-sm font-semibold text-gray-200 bg-transparent border-none"
                                                >
                                                      <option value="01">
                                                            January
                                                      </option>
                                                      <option value="02">
                                                            February
                                                      </option>
                                                      <option value="03">
                                                            March
                                                      </option>
                                                      <option value="04">
                                                            April
                                                      </option>
                                                      <option value="05">
                                                            May
                                                      </option>
                                                      <option value="06">
                                                            June
                                                      </option>
                                                      <option value="07">
                                                            July
                                                      </option>
                                                      <option value="08">
                                                            August
                                                      </option>
                                                      <option value="09">
                                                            September
                                                      </option>
                                                      <option value="10">
                                                            October
                                                      </option>
                                                      <option value="11">
                                                            November
                                                      </option>
                                                      <option value="12">
                                                            December
                                                      </option>
                                                </select>
                                          </div>

                                          <div>
    <div className="flex flex-col items-start">
        <h1 className="uppercase font-semibold text-lg">
            Month
        </h1>
    </div>
    <select
        id="year"
        className="max-h-20 overflow-auto uppercase text-sm font-semibold text-gray-200 bg-transparent border-none"
    >
        {Array.from(
            { length: 100 },
            (_, index) => 2024 + index
        ).map(year => (
            <option
                key={year}
                value={year}
            >
                {year}
            </option>
        ))}
    </select>
</div>
                                    </div>

                                    <div class="w-full max-w-lg mx-auto flex flex-col">
                                          <div class="flex justify-between font-medium uppercase text-xs pt-4 pb-2 border-t">
                                                <div class="px-3 border rounded-sm w-8 h-5 flex items-center justify-center border-red-500 text-red-500 shadow-md">
                                                      sun
                                                </div>

                                                <span class="px-3 border rounded-sm w-8 h-5 flex items-center justify-center border-green-500 text-green-500 shadow-md">
                                                      mon
                                                </span>

                                                <span class="px-3 border rounded-sm w-8 h-5 flex items-center justify-center border-green-500 text-green-500 shadow-md">
                                                      tue
                                                </span>

                                                <span class="px-3 border rounded-sm w-8 h-5 flex items-center justify-center border-green-500 text-green-500 shadow-md">
                                                      wed
                                                </span>

                                                <span class="px-3 border rounded-sm w-8 h-5 flex items-center justify-center border-green-500 text-green-500 shadow-md">
                                                      thu
                                                </span>

                                                <span class="px-3 border rounded-sm w-8 h-5 flex items-center justify-center border-green-500 text-green-500 shadow-md">
                                                      fri
                                                </span>

                                                <span class="px-3 border rounded-sm w-8 h-5 flex items-center justify-center border-green-500 text-green-500 shadow-md">
                                                      sat
                                                </span>
                                          </div>

                                          <div class="flex justify-between font-medium text-sm pb-2">
                                                <span class="px-1 text-gray-400 w-8 flex justify-center items-center">
                                                      30
                                                </span>

                                                <span class="px-1 text-gray-400 w-8 flex justify-center items-center">
                                                      31
                                                </span>

                                                <span class="px-1 w-8 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
                                                      01
                                                </span>

                                                <span class="px-1 w-8 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
                                                      02
                                                </span>

                                                <span class="px-1 w-8 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
                                                      03
                                                </span>

                                                <span class="px-1 w-8 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
                                                      04
                                                </span>

                                                <span class="px-1 w-8 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
                                                      05
                                                </span>
                                          </div>

                                          <div class="flex justify-between font-medium text-sm pb-2">
                                                <span class="px-1 w-8 flex justify-center items-center border border-red-500 text-red-500 cursor-pointer">
                                                      06
                                                </span>

                                                <span class="px-1 w-8 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
                                                      07
                                                </span>

                                                <span class="px-1 w-8 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
                                                      08
                                                </span>

                                                <span class="px-1 w-8 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
                                                      09
                                                </span>

                                                <span class="px-1 w-8 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
                                                      10
                                                </span>

                                                <span class="px-1 w-8 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
                                                      11
                                                </span>

                                                <span class="px-1 w-8 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
                                                      12
                                                </span>
                                          </div>

                                          <div class="flex justify-between font-medium text-sm pb-2">
                                                <span class="px-1 w-8 flex justify-center items-center border border-red-500 text-red-500 cursor-pointer">
                                                      13
                                                </span>

                                                <span class="px-1 w-8 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
                                                      14
                                                </span>

                                                <span class="px-1 w-8 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
                                                      15
                                                </span>

                                                <span class="px-1 w-8 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
                                                      16
                                                </span>

                                                <span class="px-1 w-8 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
                                                      17
                                                </span>

                                                <span class="px-1 w-8 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
                                                      18
                                                </span>

                                                <span class="px-1 w-8 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
                                                      19
                                                </span>
                                          </div>

                                          <div class="flex justify-between font-medium text-sm pb-2">
                                                <span class="px-1 w-8 flex justify-center items-center border border-red-500 text-red-500 cursor-pointer">
                                                      20
                                                </span>

                                                <span class="px-1 w-8 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
                                                      21
                                                </span>

                                                <span class="px-1 w-8 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
                                                      22
                                                </span>

                                                <span class="px-1 w-8 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
                                                      23
                                                </span>

                                                <span class="px-1 w-8 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
                                                      24
                                                </span>

                                                <span class="px-1 w-8 flex justify-center items-center border border-green-500 text-white bg-green-500 rounded-2xl cursor-pointer shadow-md">
                                                      25
                                                </span>

                                                <span class="px-1 w-8 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
                                                      26
                                                </span>
                                          </div>

                                          <div class="flex justify-between font-medium text-sm pb-2">
                                                <span class="px-1 w-8 flex justify-center items-center border border-red-500 text-red-500 cursor-pointer">
                                                      27
                                                </span>

                                                <span class="px-1 w-8 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
                                                      28
                                                </span>

                                                <span class="px-1 w-8 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
                                                      29
                                                </span>

                                                <span class="px-1 w-8 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
                                                      30
                                                </span>

                                                <span class="px-1 text-gray-400 w-8 flex justify-center items-center">
                                                      01
                                                </span>

                                                <span class="px-1 text-gray-400 w-8 flex justify-center items-center">
                                                      02
                                                </span>

                                                <span class="px-1 text-gray-400 w-8 flex justify-center items-center">
                                                      03
                                                </span>
                                          </div>
                                    </div>
                              </div>

                              <button className="form-submit-btn" type="submit">
                                    Submit
                              </button>
                        </form>
                  </div>
            </div>
      );
};

export default AddPayment;
