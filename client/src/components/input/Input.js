import React, { useReducer, useState } from "react";
import Button from "../button/Button";
import { SetShowInput } from "../../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { UpdateUserPictureFunc, UpdateUserPosition } from "../../apicalls/users";
import { hideLoader, showLoader } from "../../redux/loaderSlice";
import toast from "react-hot-toast";

function Input({ label, placeholder, onChange }) {
      const [value, setValue] = useState("");
      const [id, setId] = useState("");
      const showInput = useSelector((state) => state.userReducer.showInput);
      const userId = useSelector((state) => state.userReducer.userId);

      const dispatch = useDispatch();

      const handleChange = (event) => {
            const newValue = event.target.value;
            setValue(newValue.trim());
      };

      const updateUserPosition = async () => {
        try {
            console.log(userId, value);
            dispatch(showLoader());
            const response = await UpdateUserPosition(userId, value);
            toast.success(response.message);
            dispatch(hideLoader());
      } catch (error) {
            dispatch(hideLoader());
            return error.message;
      }
      };

        const handleSubmit = (e) => {
            updateUserPosition();
        }



      return (
            <div className="h-[100vh]">
                  <div className="bg-gray-900 rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4">
                        <div className=" flex flex-col gap-1  items-start">
                              <label
                                    htmlFor="input"
                                    className="text-lg text-white font-bold"
                              >
                                    {label}
                              </label>
                              <input
                                    type="text"
                                    id="input"
                                    name="input"
                                    placeholder={placeholder}
                                    value={value}
                                    onChange={handleChange}
                                    className="p-2 mb-4 border rounded-lg w-[20rem] md:w-[35rem] h-10 bg-black outline-none"
                              />
                        </div>
                        <div className="flex place-items-center gap-8 justify-between">
                              <Button
                                    text="Submit"
                                    type="success"
                                    width="full"
                                    onClick={() =>{
                                            setValue("")
                                            dispatch(SetShowInput(!showInput))
                                            handleSubmit()
                                    }
                                    }
                              />
                              <Button
                                    text="Cancel"
                                    type="outline"
                                    width="full"
                                    onClick={() =>
                                          dispatch(SetShowInput(!showInput))
                                    }
                              />
                        </div>
                  </div>
            </div>
      );
}

export default Input;
