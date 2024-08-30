import React, { useEffect, useState } from "react";
import Button from "../../components/button/Button";
import { useParams } from "react-router-dom";
import { hideLoader, showLoader } from "../../redux/loaderSlice";
import toast from "react-hot-toast";
import { UpdateUserPictureFunc } from "../../apicalls/users";
import { useSelector } from "react-redux";
import Loader from "../../components/loader/Loader";

function UpdateUserPicture() {
      const [pictureName, setPictureName] = useState("");
      const [selectedFile, setSelectedFile] = useState(null);
      const {user} = useSelector((state) => state.userReducer);
      const isLoading = useSelector((state) => state.loader);

      const userId = useParams();

      const handleUpload = async () => {
            if (!selectedFile) {
                  toast.error("Please select a file");
                  return;
            }

            const formData = new FormData();
            formData.append("profilePicture", selectedFile);
            console.log(formData);

            try {
                  showLoader();
                  const response = await UpdateUserPictureFunc(
                        userId.id,
                        formData
                  );
                  hideLoader();

                  if (response.success) {
                        toast.success(response.message);
                        setTimeout(() => {
                              window.history.back();
                        }, 2000);
                  }
            } catch (error) {
                  hideLoader();
                  return error.message;
            }
      };

      const handleInputChange = (e) => {
        e.preventDefault();
        setSelectedFile(e.target.files[0]);
            setPictureName(e.target.files[0]?.name);
      }

      const handleDrop = (event) => {
            event.preventDefault();
            setSelectedFile(event.dataTransfer.files[0]);
            setPictureName(event.dataTransfer.files[0]?.name);
      };

      return (
        <div className=" w-full px-2 h-[100vh] flex items-center justify-center bg-[#595954] text-[#FFFFFF]">
            <div className="flex flex-col w-full md:max-w-[60%] md:text-xl lg:max-w-[40%]" >
                  <div className="col-span-full">
                    <div
                    onDrop={handleDrop}
                    onDragOver={(e) => e.preventDefault()}
                    >
                            <label
                              htmlFor="cover-photo"
                              class="block text-lg md:text-2xl font-medium leading-6 text-gray-900"
                        >
                              Cover photo
                        </label>
                        <div className="mt-2 flex justify-center rounded-lg border-2 border-dashed border-gray-900 px-6 py-10">
                              <div className="text-center flex flex-col items-center">
                                    {
                                        user ?
                                        <svg
                                          className="mx-auto h-12 w-12 text-gray-300"
                                          viewBox="0 0 24 24"
                                          fill="currentColor"
                                          aria-hidden="true"
                                    >
                                          <path
                                                fill-rule="evenodd"
                                                d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                                                clip-rule="evenodd"
                                          />
                                    </svg> : <img src={selectedFile} alt={user.firstName}
                                                        className={`h-8 w-8  fluid rounded-full`}
                                                        />
                                    }
                                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                          <label
                                                htmlFor="file-upload"
                                                className="px-2 rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-grey-600 focus-within:ring-offset-2 hover:text-grey-500"
                                          >
                                                      Upload a file
                                                <input
                                                      id="file-upload"
                                                      name="file-upload"
                                                      type="file"
                                                      className="sr-only"
                                                      onChange={handleInputChange}
                                                />
                                          </label>
                                    </div>
                                    <div className="mt-2">
                                          <i>{pictureName && pictureName}</i>
                                          <p className="pl-1 text-gray-100">
                                                or drag and drop
                                          </p>
                                          <p className="text-xs leading-5 text-gray-100">
                                                PNG, JPG, GIF up to 10MB
                                          </p>
                                    </div>
                              </div>
                        </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 mt-4">
                    <Button
                        text="Update"
                        type="light-blue"
                        width="full"
                        onClick={() => {
                              handleUpload();
                        }}
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
            {
                isLoading && <Loader />
            }
        </div>
      );
}

export default UpdateUserPicture;
