import React, { useEffect } from "react";
import { GithubIcon, Twitter, Linkedin, MenuIcon } from "lucide-react";

const Navbar = () => {
  useEffect(() => {
    // Get the elements after the component mounts
    const hamburger = document.querySelector("#hamburger");
    const menu = document.querySelector("#menu");

    // Define the toggle function to handle classList toggle
    const toggleMenu = () => {
      menu.classList.toggle("hidden");
    };

    // Ensure these elements exist before adding event listeners
    if (hamburger && menu) {
      hamburger.addEventListener("click", toggleMenu);
    }

    // Clean up the event listener on component unmount
    return () => {
      if (hamburger && menu) {
        hamburger.removeEventListener("click", toggleMenu);
      }
    };
  }, []); // Empty dependency array to run only on mount and unmount

  return (
    <nav className="font-MT md:w-full h-auto bg-white shadow-lg flex justify-between p-6 text-sm">
      {/* nav icon container */}
      <div className="nav-icon">logo</div>

      <div className="flex-col justify-end">
        {" "}
        {/* nav links container */}
        <div id="hamburger" className="cursor-pointer md:hidden">
          <MenuIcon />
        </div>
        {/* nav-links-icons */}
        <div className="items-center hidden md:block" id="menu">
          {/* links only */}
          <div>
            <ul className="flex-col">
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
              </li>
              <li className="ml-4 mr-4">
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
          {/* icons only */}
          <div className="hidden md:flex">
            <a href="https://github.com/DevEmmy001">
              <GithubIcon size={20} strokeWidth={1.5} className="ml-2 mr-2" />
            </a>
            <a href="https://x.com/VictorChuk16839">
              <Twitter size={20} strokeWidth={1.5} className="ml-2 mr-2" />
            </a>
            <a href="">
              <Linkedin size={20} strokeWidth={1.5} className="ml-2 mr-2" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
