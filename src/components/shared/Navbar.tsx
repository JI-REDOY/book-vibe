import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="border-b border-[#172033]/10 bg-[#F8F5EF]">
      <div className="navbar mx-auto max-w-7xl px-4 sm:px-6">

        {/* Logo */}
        <div className="navbar-start">
          <Link
            href="/"
            className="text-xl sm:text-2xl font-bold tracking-wide text-[#172033]"
          >
            BOOK <span className="text-[#C98B3C]">VIBE</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2">
            <li>
              <Link
                href="/"
                className="font-medium text-[#172033] hover:bg-transparent hover:text-[#C98B3C]"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/listedBooks"
                className="font-medium text-[#172033] hover:bg-transparent hover:text-[#C98B3C]"
              >
                Listed Books
              </Link>
            </li>

            <li>
              <Link
                href="/read"
                className="font-medium text-[#172033] hover:bg-transparent hover:text-[#C98B3C]"
              >
                Pages to Read
              </Link>
            </li>
          </ul>
        </div>

        {/* Desktop Buttons */}
        <div className="navbar-end hidden gap-2 lg:flex">
          <Link
            href="/signin"
            className="btn border-none bg-transparent text-[#172033] shadow-none hover:bg-transparent hover:text-[#C98B3C]"
          >
            Sign In
          </Link>

          <Link
            href="/signup"
            className="btn border-none bg-[#C98B3C] px-5 text-white hover:bg-[#172033]"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="navbar-end lg:hidden">
          <div className="dropdown dropdown-end">

            {/* Hamburger Button */}
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-[#172033]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>

            {/* Mobile Dropdown */}
            <ul
              tabIndex={0}
              className="menu dropdown-content z-50 mt-3 w-56 rounded-box border border-[#172033]/10 bg-[#F8F5EF] p-3 shadow-lg"
            >
              <li>
                <Link
                  href="/"
                  className="text-[#172033] hover:bg-[#172033] hover:text-white"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/books"
                  className="text-[#172033] hover:bg-[#172033] hover:text-white"
                >
                  Listed Books
                </Link>
              </li>

              <li>
                <Link
                  href="/read"
                  className="text-[#172033] hover:bg-[#172033] hover:text-white"
                >
                  Pages to Read
                </Link>
              </li>

              <div className="my-2 border-t border-[#172033]/10"></div>

              <li>
                <Link
                  href="/signin"
                  className="text-[#172033] hover:bg-transparent hover:text-[#C98B3C]"
                >
                  Sign In
                </Link>
              </li>

              <li>
                <Link
                  href="/signup"
                  className="bg-[#C98B3C] text-white hover:bg-[#172033]"
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;