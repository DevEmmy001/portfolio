import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GithubIcon, Twitter, Linkedin, Menu, XIcon } from "lucide-react";

const Navbar = () => {
  const navLinks = [
    { name: "Home", Link: "/" },
    { name: "About", Link: "/" },
    { name: "Tech Stack", Link: "/" },
    { name: "Projects", Link: "/" },
    { name: "Contacts", Link: "/" },
  ];

  const [open, setisOpen] = useState(false);

  return (
    <div className="font-PS shadow-md w-full fixed top-0 left-0">
      {/* Flex container for logo and navigation links */}
      <div className="flex items-center justify-between w-full md:px-10 py-4 px-7 bg-white">
        {/* site nav logo */}
        <div>
          <p className="text-lg font-bold">Emeka</p>
        </div>

        {/* mobile nav icon */}
        <div
          onClick={() => setisOpen(!open)}
          className="absolute right-8 top-4 cursor-pointer md:hidden"
        >
          {open ? <XIcon /> : <Menu />}
        </div>

        {/* site nav links */}
        <ul
          className={`pl-8 sm:justify-end text-sm md:flex md:items-center md:space-x-6 md:static absolute left-0 w-full bg-white transition-all duration-500 ease-in md:top-0 ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          {navLinks.map((link) => (
            <li className="my-7 md:my-0" key={link.name}>
              <a href={link.Link}>{link.name}</a>
            </li>
          ))}
          <li>
            <div className="flex gap-4 mt-4 md:mt-0 md:ml-6">
              <a href="https://github.com/DevEmmy001/">
                <GithubIcon size={20} strokeWidth={1} />
              </a>
              <a href="https://x.com/VictorChuk16839">
                <Twitter size={20} strokeWidth={1} />
              </a>
              <a href="https://www.linkedin.com/in/victor-chukwuemeka-a70156310">
                <Linkedin size={20} strokeWidth={1} />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
