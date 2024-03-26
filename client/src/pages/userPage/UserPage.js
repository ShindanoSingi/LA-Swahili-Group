'use strict';

import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { GetUserById } from '../../apicalls/users';
import { useParams } from 'react-router-dom';

function UserPage() {
  const { user } = useSelector((state) => state.userReducer);

  const userId = useParams();
  console.log(userId.id);

  const getUserById = async () => {
    try {
      const response = await GetUserById(userId.id);
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getUserById(userId);
  }, [])

  return (
    <div  className="mt-[4rem] pt-2 px-2 min-h-[100vh] bg-[#595954] text-[#FFFFFF]">
        <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            {}
        </div>
    </div>
  )
}

export default UserPage