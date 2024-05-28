import React, { useReducer, useState } from "react";
import Button from "../../components/button/Button";
import { SetShowInput } from "../../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";

function Input({ label, placeholder, onChange}) {
      const [value, setValue] = useState("");
      const showInput = useSelector((state) => state.userReducer.showInput);

      const dispatch = useDispatch();

      const handleChange = (event) => {
            const newValue = event.target.value;
            setValue(newValue);
            onChange(newValue);
      };

      return (
        <div className="grid place-content-center h-[100vh]">
            <div className="bg-gray-900 rounded-lg  max-w-xl p-4">
            <div className=" flex flex-col gap-1  items-start">
                  <label
                        htmlFor="input"
                        className="text-lg text-white font-bold"
                  >
                        {label}
                  </label>
                  <input
                        type="number"
                        id="input"
                        name="input"
                        placeholder={placeholder}
                        value={value}
                        onChange={handleChange}
                        className="p-2 mb-4 border rounded-lg h-14 bg-black outline-none"
                  />
            </div>
            <div className="flex place-items-center gap-8 justify-between">
                <Button text="Submit" type="success" width="full" />
                <Button text="Cancel" type="outline" width="full" onClick={() => dispatch(SetShowInput(!showInput))} />
            </div>
        </div>
        </div>
      );
}

export default Input;
