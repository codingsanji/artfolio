import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import '../components/styles/navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  // toggle the dropdown menu when clicking on the menu icon
  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  // close the dropdown menu when the route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // close the dropdown menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !event.target.closest(".menu-icon")
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 flex items-center h-20 px-8 bg-[#0b022e] shadow-md">
      <div className="flex-shrink-0 text-xl space-x-4">
        <Link to="/" onClick={() => {
          window.scrollTo(0, 0);
        }}>
          <p>Deydeepya | Portfolio</p>
        </Link>
      </div>

      <div className="flex-grow hidden lg:flex lg:justify-end lg:items-end">
        <ul className="flex text-[#22e000] text-xl space-x-4">
          <li className='links p-4'>
            <Link to="/" onClick={() => {
            window.scrollTo(0, 0);}}>
              About
            </Link>
          </li>
          <li className='links p-4'>
            <Link to="/" onClick={() => {
            window.scrollTo(0, 0);}}>
              Projects
            </Link>
          </li>
          <li className='links p-4'>
            <Link to="/" onClick={() => {
            window.scrollTo(0, 0);}}>
              Contact Me!
            </Link>
          </li>
        </ul>
      </div>

      <button onClick={toggleMenu} className="lg:hidden text-white menu-icon ml-auto">
          <IoMenu size={40} />
      </button>
      
      {isOpen && ( 
        <div ref={dropdownRef} className="lg:hidden absolute top-20 left-0 right-0 bg-[#0b022e] text-[#22e000] text-xl space-y-4 z-50">
          <ul className="flex flex-col text-right ml-4">
            <li className="links1 p-4">
                <Link to="/">About</Link>
            </li>
            <li className="links1 p-4">
                <Link to="/">Projects</Link>
            </li>
            <li className="links1 p-4">
                <Link to="/">Contact Me!</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
