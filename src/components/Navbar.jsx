import React from "react";
import { GithubIcon } from "lucide-react";
import { Twitter } from "lucide-react";
import { Linkedin } from "lucide-react";
const Navbar = () => {
  return (
    // navigation bar section
    <nav className="w-full h-auto bg-white shadow-lg flex justify-between p-6 text-sm">
      {/* nav icon container */}
      <div className="nav-icon">logo</div>
      {/* nav links container */}
      <div className="nav-links-icons flex items-center">
        {/* links only */}
        <div>
          <ul className="flex">
            <li className="ml-4 mr-4">
              <a href="">Home</a>
            </li>
            <li className="ml-4 mr-4">
              <a href="">About</a>
            </li>
            <li className="ml-4 mr-4">
              <a href="">Tech Stacks</a>
            </li>
            <li className="ml-4 mr-4">
              <a href="">Projects</a>
            </li>{" "}
            <li className="ml-4 mr-4">
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        {/* icons only */}
        <div className="nav-icons flex">
          <a href="">
            <GithubIcon size={20} strokeWidth={1.5} className="ml-2 mr-2" />
          </a>
          <a href="">
            <Twitter size={20} strokeWidth={1.5} className="ml-2 mr-2" />
          </a>
          <a href="">
            <Linkedin size={20} strokeWidth={1.5} className="ml-2 mr-2" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
