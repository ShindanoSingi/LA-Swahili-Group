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
                <ul className="flex flex-col items-center p-2 top-[4.2rem] right-2 menu text-[#FFFFFF] absolute">
                              <Link to="/" onClick={() => dispatch(SetShow(!show))}>
                                    <li className="menu-item">Home</li>
                              </Link>
                              <Link to="/about" onClick={() => dispatch(SetShow(!show))}>
                                    <li className="menu-item">About</li>
                              </Link>
                              <Link
                                    to="/contact"
                                    onClick={() => dispatch(SetShow(!show))}
                              >
                                    <li className="menu-item">Contact</li>
                              </Link>
                              <Link to="/login" onClick={() => dispatch(SetShow(!show))}>
                                    <li className="menu-item">Login</li>
                              </Link>
                              <Link to='/login' onClick={() => {
                                    logout();
                                    dispatch(SetShow(!show));

                              }}>
                                    <li className="menu-item">Logout</li>
                              </Link>
                              <li className="menu-item menu-item-cancel" onClick={() => dispatch(SetShow(!show))}>Cancel</li>
                        </ul>
            )
        }
    </div>
  )
}

export default Menu