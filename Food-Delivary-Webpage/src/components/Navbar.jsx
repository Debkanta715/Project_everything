import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNabar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          {/*  */}
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
            <span className="text-xl tracking-tight">D_TECH_VIRTUALR</span>
          </div>

          {/*  */}
          <ul className="hidden lg:flex ml-14 space-x-12">
            {/* here we use map function for the insert one by one elemnt in the li */}

            {navItems.map((item, idx) => (
              <li key={idx}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>

          {/* for the sign up  */}

          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="#" className="py-2 px-3 border rounded-md">
              Sign In
            </a>

            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
            >
              Create an account
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            {/* use onclick and two icon one is menu and one is x and here use ternary operator  */}
            <button onClick={toggleNabar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {/* here we use map function for the insert one by one elemnt in the li */}
              {navItems.map((item, idx) => (
                <li key={idx} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            {/*  */}

           <div className="flex space-x-6">
            <a href="#" className="py-2 px-3 border rounded-md">Sign In</a>
            <a href="#" className="py-2 px-3 bg-gradient-to-r from-orange-500 to-orange-800">Create an account</a>
           </div>
            {/*  */}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
