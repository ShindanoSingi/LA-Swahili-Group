import React, { useEffect, useState } from "react";
import Button from "../../components/button/Button";
import { useParams } from "react-router-dom";
import { hideLoader, showLoader } from "../../redux/loaderSlice";
import toast from "react-hot-toast";
import { UpdateUser } from "../../apicalls/users";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/loader/Loader";

function EditUser() {
      const { user } = useSelector((state) => state.userReducer);
      const isLoading = useSelector((state) => state.loader);
      const [myUser, setMyUser] = useState({
            firstName: user.firstName,
            lastName: user.lastName,
            phone: user.phone,
      });
      const [errors, setErrors] = useState({});

      const dispatch = useDispatch()

      const userId = useParams();

      const validate = () => {
            let errors = {};
            let isValid = true;

            if (!myUser.firstName) {
                  isValid = false;
                  errors["firstName"] = "Please enter your first name";
            }

            if (!myUser.lastName) {
                  isValid = false;
                  errors["lastName"] = "Please enter your last name";
            }

            const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
            if (!phonePattern.test(myUser.phone)) {
                  isValid = false;
                  errors["phone"] = "Please enter a valid phone number";
            }

            setErrors(errors);
            return errors;
      };

      const updateUser = async (user, userId) => {
        try {
            dispatch(showLoader());
            const response = await UpdateUser(user, userId);
            dispatch(hideLoader());
            if (response.success) {
                toast.success(response.message);
                setTimeout(() => {
                    window.history.back();
                }, 2000);
            }
        } catch (error) {
            dispatch(hideLoader());
            return error.message;
        }
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        console.log(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            console.log(myUser, userId.id)
            updateUser(myUser, userId.id);
        }
  }

      return (
            <div className=" w-full px-2 h-[100vh] flex items-center justify-center bg-[#595954] text-[#FFFFFF]">
                  <div className="flex flex-col w-full md:text-2xl md:w-[60%] lg:w-[50%]">
                        <div className="col-span-full">
                              <form className="max-w-4xl md:text-xl mx-auto">
                                    <div className="mb-3 md:text-xl w-full">
                                          <label
                                                for="firstname"
                                                className="block md:text-xl mb-2 text-sm font-medium text-white dark:text-white"
                                          >
                                                First name
                                          </label>
                                          <input
                                                type="text"
                                                name="firstName"
                                                id="firstName"
                                                value={myUser.firstName}
                                                onChange={(e) => {
                                                      setMyUser({
                                                            ...myUser,
                                                            firstName:
                                                                  e.target.value
                                                      });
                                                }}
                                                className="shadow-sm md:text-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                                placeholder="First Name"
                                                inputMode="text"
                                                required
                                                autoComplete="off"
                                          />
                                          {errors.name && (
                                                <p className="error">
                                                      {errors.name}
                                                </p>
                                          )}
                                    </div>
                                    <div className="mb-3">
                                          <label
                                                for="lastname"
                                                className="block md:text-xl mb-2 text-sm font-medium text-white dark:text-white"
                                          >
                                                Last name
                                          </label>
                                          <input
                                                type="text"
                                                name="lastName"
                                                id="lastName"
                                                value={myUser.lastName}
                                                onChange={(e) =>
                                                      setMyUser({
                                                            ...myUser,
                                                            lastName: e.target
                                                                  .value
                                                      })
                                                }
                                                className="shadow-sm md:text-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                                placeholder="Last Name"
                                                inputMode="text"
                                                required
                                          />
                                          {errors.name && (
                                                <p className="error">
                                                      {errors.name}
                                                </p>
                                          )}
                                    </div>
                                    <div className="mb-3">
                                          <label
                                                for="phonenumber"
                                                className="block md:text-xl mb-2 text-sm font-medium text-white dark:text-white"
                                          >
                                                Phone number
                                          </label>
                                          <input
                                                type="text"
                                                name="phone"
                                                inputMode="tel"
                                                id="phone"
                                                value={myUser.phone}
                                                onChange={(e) =>
                                                      setMyUser({
                                                            ...myUser,
                                                            phone: e.target
                                                                  .value
                                                      })
                                                }
                                                className="shadow-sm md:text-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                                placeholder="222-222-2222"
                                                required
                                          />
                                          {errors.name && (
                                                <p className="error">
                                                      {errors.name}
                                                </p>
                                          )}
                                    </div>
                              </form>

                        </div>
                        <div className="flex flex-col gap-4 mt-4">
                              <Button
                                    text="Update"
                                    type="light-blue"
                                    width="full"
                                    onClick={handleSubmit}
                              />
                              <Button
                                    text="Cancel"
                                    type="default"
                                    width="full"
                                    onClick={() => {
                                          window.history.back();
                                    }}
                              />
                        </div>
                  </div>
                  {isLoading && <Loader />}
            </div>
      );
}

export default EditUser;
