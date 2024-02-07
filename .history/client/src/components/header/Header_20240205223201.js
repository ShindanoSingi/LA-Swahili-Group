import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header absolute top-0 w-full flex items-center justify-between p-2'>
        <div className='w-12 h-12 rounded-full bg-[#AC9186] flex font-extrabold text-[#000000] justify-center items-center'>LASG</div>
        <div></div>
    </div>
  )
}

export default Header