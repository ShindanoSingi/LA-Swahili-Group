import React from 'react'
import './Header.css'
import { GiHamburger } from "react-icons/gi";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header absolute top-0 w-full flex items-center justify-between p-2'>
        <Link to='/'>
        <div className='w-12 h-12 rounded-full text-sm bg-[#AC9186] flex font-extrabold text-[#000000] justify-center items-center'>LASG</div>
        </Link>
        <div>
        <GiHamburger />
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