import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "Projects",
    },
    {
      id: 4,
      link: "Skills",
    },
    {
      id: 5,
      link: "Contact",
    },
  ];

  return (
    <>
      <div className="fixed z-10 w-full h-20 flex justify-between items-center px-4 bg-black text-white ">
        <div>
          <h1 className="text-5xl cursor-pointer font-signature ml-2">
            Swapnil
          </h1>
        </div>

        {/* menu */}
        <div>
          <ul className="hidden md:flex">
            {links.map((item) => (
              <li
                key={item.id}
                className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 "
              >
                <Link to={item.link} smooth duration={500}>
                  {item.link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Hamburger */}
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer hover:text-white duration-200 md:hidden pr-4 z-10 text-gray-500 "
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {/* Mobile Menu */}
        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800  text-gray-500">
            {links.map((item) => (
              <li
                key={item.id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-white duration-200 "
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={item.link}
                  smooth
                  duration={500}
                >
                  {item.link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Navbar;
