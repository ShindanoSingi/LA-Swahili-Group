import React, { useEffect, useState } from 'react'
import Button from '../../components/button/Button'
import { useParams } from 'react-router-dom';
import { hideLoader, showLoader } from '../../redux/loaderSlice';
import toast from 'react-hot-toast';
import { UpdateUserPictureFunc } from '../../apicalls/users';

function UpdateUserPicture() {
    const [pictureName, setPictureName] = useState('');
    const[ selectedFile, setSelectedFile] = useState(null);


    const userId = useParams();
    console.log(userId.id);

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    }

    const handleUpload = async () => {
        if (!selectedFile) {
            toast.error("Please select a file");
            return;
        }

        const formData = new FormData();
        formData.append('profilePicture', selectedFile);
        console.log(formData);

        try {
            showLoader();
            const response = await UpdateUserPictureFunc(userId.id, formData);
            console.log(response);
            hideLoader();

            if(response.success){
                toast.success(response.message);
            }

        } catch (error) {
            hideLoader();
            toast.error(error.message);
        }
    }

  return (
    <div className='mt-[64px] pt-2 px-2 min-h-[100vh] bg-[#595954] text-[#FFFFFF]'>
        <div className="col-span-full">
          <label htmlFor="cover-photo" class="block text-sm font-medium leading-6 text-gray-900">Cover photo</label>
          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900 px-6 py-10">
            <div className="text-center flex flex-col items-center">
              <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
              </svg>
              <div className="mt-4 flex text-sm leading-6 text-gray-600">
                <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-grey-600 focus-within:ring-offset-2 hover:text-grey-500">
                  <span className='px-2'>Upload a file</span>
                  <input
                  onChange={(e) => {
                    setPictureName(e.target.files[0].name);
                    handleFileChange(e);
                  }}
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"/>
                </label>
              </div>
              <div className='mt-2'>
                <i>{pictureName}</i>
                <p className="pl-1 text-gray-100">or drag and drop</p>
                <p className="text-xs leading-5 text-gray-100">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>
        </div>
        <div>
        <button
        className="bg-blue-400 hover:bg-blue-700 mt-2 text-white w-full font-bold px-2 py-1 rounded-full" type='submit'
                        onClick={() => {
                            handleUpload();
                            console.log('update')
                        }}
                  >
                        Update
                  </button>
                  <button
                        className="bg-gray-400 hover:bg-gray-700 mt-2 text-white w-full font-bold px-2 py-1 rounded-full"
                        onClick={() => {
                              window.history.back();
                        }}
                  >
                        Cancel
                  </button>
        </div>

    </div>
  )
}

export default UpdateUserPicture