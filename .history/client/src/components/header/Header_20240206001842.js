import React from 'react'
import './Header.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header absolute top-0 w-full flex items-center justify-between p-2'>
        {/* <div className='w-12 h-12 rounded-full text-sm bg-[#AC9186] flex font-extrabold text-[#000000] justify-center items-center'>LASG</div> */}
        <div className='w-12 h-12 rounded-full text-[0.8rem] logo-button flex font-extrabold text-[#EBEBEB] justify-center items-center'>LASG</div>
        <div>
            <Link to='/'>
                <div className='hambourger h-12 w-12 flex items-center justify-center'>
                    <GiHamburgerMenu className='text-[#FFFFFF] text-2xl' />
                </div>
            </Link>

            {/* <ul className='flex space-x-4 text-[#000000]'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul> */}
        </div>
    </div>
  )
}

export default Header