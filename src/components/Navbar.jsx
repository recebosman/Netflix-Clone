import React, { useEffect, useState } from "react";
import { BsSearch, BsFillBellFill } from "react-icons/bs";
import { AiFillCaretDown } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/Auth";

const Navbar = () => {
  const { logout } = useAuth();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  const navigation = useNavigate();

  const bby = () => {
    logout();
    navigation("/signin");
  };
  const scrollHandler = () => {
    if (window.scrollY >= 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <div
      className={`${
        !scroll ? "bg-black" : ""
      } mx-auto px-12 sticky top-0 h-[80px] w-full z-[999]`}
    >
      <div className="flex items-center justify-between py-5">
        <div className="flex items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix Logo"
            className="w-32 cursor-pointer "
          />
          <div>
            <ul className="flex items-center justify-between">
              <li className="text-white text-xl ml-5 font-semibold cursor-pointer ">
                Home
              </li>
              <li className="text-white text-xl ml-5 font-semibold cursor-pointer">
                TV Shows
              </li>
              <li className="text-white text-xl ml-5 font-semibold cursor-pointer">
                Movies
              </li>
              <li className="text-white text-xl ml-5 font-semibold cursor-pointer">
                New & Popular
              </li>
              <li className="text-white text-xl ml-5 font-semibold cursor-pointer">
                My List
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center">
          <BsSearch className="text-white text-xl mr-3 cursor-pointer" />
          <h1 className="text-white text-lg font-semibold mr-3 cursor-pointer">
            KIDS
          </h1>
          <BsFillBellFill className="text-white  cursor-pointer text-xl mr-3" />
          <img
            src="https://s3.amazonaws.com/arc-authors/washpost/50eda441-600e-4fa5-9f0d-6cb1714ac367.png"
            alt="Profile"
            className="w-12 h-12 rounded-full cursor-pointer"
          />
          <div className="flex items-center relative ml-2 cursor-pointer ">
            <AiFillCaretDown
              className="text-2xl text-white cursor-pointer"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            />
            {isDropdownOpen ? (
              <div className="absolute top-10 right-0 bg-black">
                <div className="flex flex-col w-[120px] h-[65px] rounded-md m-2 bg-black">
                  <span className="text-white text-xl font-thin cursor-pointer border-b-2 border-opacity-20 border-black">
                    Settings
                  </span>
                  <span
                    className="text-white text-xl font-thin cursor-pointer"
                    onClick={bby}
                  >
                    Sign Out
                  </span>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
