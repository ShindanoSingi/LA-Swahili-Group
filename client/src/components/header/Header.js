import React, { useState } from "react";
import "./Header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import Menu from "../menu/Menu";
import { SetShow } from "../../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";

function Header() {
      const {show} = useSelector(state => state.userReducer);

      const dispatch = useDispatch();

      return (
            <div>
                  <div className="header fixed top-0 z-50 w-full flex items-center justify-between p-2">
                        <Link to="/">
                              <div className="w-12 h-12 rounded-full text-[0.8rem] logo-button flex font-extrabold text-[#EBEBEB] justify-center items-center">
                                    LASG
                              </div>
                        </Link>

                        <div className="hambourger h-12 w-12 flex items-center justify-center" onClick={() => dispatch(SetShow(!show))}>
                              <GiHamburgerMenu
                                    className="text-[#FFFFFF] text-2xl"
                              />
                        </div>
                  </div>
                  {
                    show && <Menu />
                  }
            </div>
      );
}

export default Header;
