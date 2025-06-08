import React, { useState } from "react";
import { FaBeer } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { MenuItems } from "./menuItems";
import { NavLink, Link } from "react-router";
import SubMenu from "./SubMenu";

const Navbar = () => {
  return (
    <nav className="h-[70px] relative w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-20 bg-white text-gray-700 shadow-[0px_4px_25px_0px_#0000000D] transition-all">
      {/* Sección del Logo */}
      <div>
        <Link to="/">
          <img
            className="h-9"
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/dummyLogoColored.svg"
            alt="dummyLogoColored"
          />
        </Link>
      </div>

      {/* Sección del Menu */}
      <ul className="md:flex hidden items-center gap-5 relative">
        {MenuItems.map((item, index) => (
          <SubMenu item={item} key={index} />
        ))}
      </ul>
      <button
        type="button"
        className="bg-white text-gray-600 border border-gray-300 md:inline hidden text-sm hover:bg-gray-50 active:scale-95 transition-all w-40 h-11 rounded-full"
      >
        Get started
      </button>

      {/* Sección del Menu Mobile hamburguesa */}
      <div className="mobile-menu absolute top-[70px] left-0 w-full bg-white p-6 hidden md:hidden">
        <ul class="flex flex-col space-y-4 text-lg">
          <li>
            <a href="#" class="text-sm">
              Home
            </a>
          </li>
          <li>
            <a href="#" class="text-sm">
              Services
            </a>
          </li>
          <li>
            <a href="#" class="text-sm">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#" class="text-sm">
              Pricing
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="bg-white text-gray-600 border border-gray-300 mt-6 text-sm hover:bg-gray-50 active:scale-95 transition-all w-40 h-11 rounded-full"
        >
          Get started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
