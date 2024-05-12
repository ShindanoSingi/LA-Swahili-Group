import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import "./AddPayments.css";
import { useSelector } from "react-redux";
import Button from "../../components/button/Button";
import { AddPayment } from "../../apicalls/users";
import toast from "react-hot-toast";
import MyCalendar from "../../components/calendar/MyCalendar";

const AddPayments = () => {
      const { fullName } = useSelector((state) => state.userReducer);
      const [userPayment, setUserPayment] = useState({
            amount: 0,
            day: "",
            month: "",
            year: "",
            fullName: fullName
      });

      const { myDate } = useSelector((state) => state.userReducer);

      useEffect(() => {
        //   Extract the day from myDate
        const myDay = myDate && myDate.getDate().toString();
        const myMonth = myDate && (myDate.getMonth() + 1).toString();
        const myYear = myDate && myDate.getFullYear().toString();
        const myAmount = Number(userPayment.amount) || 0;

        setUserPayment({
                ...userPayment,
                day: myDay,
                month: myMonth,
                year: myYear,
                amount: myAmount,
                fullName: fullName
        });
      },[fullName, myDate, userPayment]);

      const addPayment = async () => {
            try {
                  const response = await AddPayment(userPayment);
                  if(response.success) {
                        toast.success(response.message);
                        setTimeout(() => {
                              window.history.back();
                        }, 2000);
                  }
                  console.log(response);
            } catch (error) {
                  console.log(error.message);
            }
      };

      const handleSubmit = (e) => {
            e.preventDefault();
            const { day, month, year, fullName} = userPayment;

            if (
                  day.length >= 1 &&
                  month.length >= 1 &&
                  year.length >= 1 &&
                  fullName.length >= 1
            ) {
                  addPayment();
            } else {
                  console.log(day, month, year, fullName);
                  toast.error("Please fill all fields");
            }
      };

      return (
            <div className="pt-[5rem] px-2 min-h-[100vh] bg-[#595954] text-[#FFFFFF]">
                  <div className="form-container">
                        <h1 className="text-white font-bold text-lg text-center uppercase">
                              {fullName}
                        </h1>
                        <form className="form">
                              <div className="form-group">
                                    <p for="name"
                                    className="text-lg text-white font-bold"
                                    >Amount</p>
                                    <input
                                          type="number"
                                          id="amount"
                                          name="amount"
                                          required="Yes"
                                          placeholder="$0.00"
                                          onChange={(e) =>
                                                setUserPayment({
                                                      ...userPayment,
                                                      amount: Number(e.target.value)
                                                })
                                          }
                                    />
                              </div>

                              <MyCalendar />

                              <div className="flex justify-between">
                                    <Button
                                          text="Submit"
                                          type="success"
                                          width="36"
                                          onClick={handleSubmit}
                                    />
                                    <Button
                                          text="Cancel"
                                          type="submit"
                                          width="36"
                                          onClick={() => {
                                                window.history.back();
                                          }}
                                    />
                              </div>
                        </form>
                  </div>
            </div>
      );
};

export default AddPayments;
