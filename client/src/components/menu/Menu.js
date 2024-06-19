import React, { useReducer, useState } from 'react';
import { Link } from "react-router-dom";
import "../header/Header.css";
import { SetShow } from '../../redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';

function Menu() {
    const {show} = useSelector(state => state.userReducer);
    const dispatch = useDispatch()

    const logout = () => {
        localStorage.removeItem("token");
  };

  return (
    <div>
        {
            show && (
                <ul className="flex flex-col items-center p-2 top-[4.2rem] right-2 menu z-10 text-[#FFFFFF] absolute">
                              <Link to="/" onClick={() => dispatch(SetShow(!show))}>
                                    <li className="menu-item md:text-xl ">Home</li>
                              </Link>
                              <Link to="/about" onClick={() => dispatch(SetShow(!show))}>
                                    <li className="menu-item md:text-xl ">About</li>
                              </Link>
                              <Link
                                    to="/contact"
                                    onClick={() => dispatch(SetShow(!show))}
                              >
                                    <li className="menu-item md:text-xl">Contact</li>
                              </Link>
                              {
                                    localStorage.getItem("token") && (
                                          <Link to="/users" onClick={() => dispatch(SetShow(!show))}>
                                                <li className="menu-item md:text-xl">Users</li>
                                          </Link>
                                    )
                              }
                              {
                                    localStorage.getItem("token") && (
                                          <Link to="/mcontrib" onClick={() => dispatch(SetShow(!show))}>
                                                <li className="menu-item md:text-xl">My Contributions</li>
                                          </Link>
                                    )
                              }
                              {
                                    localStorage.getItem("token") && (
                                          <Link to="/addpayment" onClick={() => dispatch(SetShow(!show))}>
                                                <li className="menu-item md:text-xl">Add Payment</li>
                                          </Link>
                                    )
                              }
                              {
                                    localStorage.getItem("token") && (
                                          <Link to="/super" onClick={() => dispatch(SetShow(!show))}>
                                                <li className="menu-item md:text-xl">Super Users</li>
                                          </Link>
                                    )
                              }
                              {
                                    localStorage.getItem("token") && (
                                          <Link to="/admin" onClick={() => dispatch(SetShow(!show))}>
                                                <li className="menu-item md:text-xl">Admin</li>
                                          </Link>
                                    )
                              }
                              <Link to="/login" onClick={() => dispatch(SetShow(!show))}>
                                    <li className="menu-item md:text-xl">Login</li>
                              </Link>
                              <Link to='/login'>
                                    <li className="menu-item md:text-xl"
                                    onClick={() => {
                                        logout();
                                        dispatch(SetShow(!show));

                                  }}
                                    >Logout</li>
                              </Link>
                              <Link >
                              <li className="menu-item menu-item-cancel md:text-xl" onClick={() => dispatch(SetShow(!show))}>Cancel</li>
                              </Link>
                        </ul>
            )
        }
    </div>
  )
}

export default Menu