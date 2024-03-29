import React, { useState } from "react";
import "./Header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

function Header() {
      const [show, setShow] = useState(false);

      const logout = () => {
            localStorage.removeItem("token");
      }

      return (
            <div className="header fixed top-0 w-full flex items-center justify-between p-2">
                  <Link to="/">
                  <div className="w-12 h-12 rounded-full text-[0.8rem] logo-button flex font-extrabold text-[#EBEBEB] justify-center items-center">
                        LASG
                  </div>
                  </Link>

                  <div className="hambourger h-12 w-12 flex items-center justify-center">
                        <GiHamburgerMenu
                              className="text-[#FFFFFF] text-2xl"
                              onClick={() => setShow(!show)}
                        />
                  </div>
                  {show && (
                        <ul className="flex flex-col items-center p-2 top-[4.2rem] right-2 menu text-[#FFFFFF] absolute">
                              <Link to="/" onClick={() => setShow(!show)}>
                                    <li className="menu-item">Home</li>
                              </Link>
                              <Link to="/about" onClick={() => setShow(!show)}>
                                    <li className="menu-item">About</li>
                              </Link>
                              <Link
                                    to="/contact"
                                    onClick={() => setShow(!show)}
                              >
                                    <li className="menu-item">Contact</li>
                              </Link>
                              <Link to="/login" onClick={() => setShow(!show)}>
                                    <li className="menu-item">Login</li>
                              </Link>
                              <Link to='/login' onClick={() => {
                                    logout();
                                    setShow(!show);

                              }}>
                                    <li className="menu-item">Logout</li>
                              </Link>
                        </ul>
                  )}
            </div>
      );
}

export default Header;
