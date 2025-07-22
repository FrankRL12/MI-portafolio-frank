import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ['Home', 'About', 'Collections', 'Pages', 'Contact'];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black text-white shadow">
      <div className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="text-orange-500 text-3xl font-bold">⋮⋮</div>
          <span className="text-2xl font-bold">Francisco</span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 font-semibold">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href="#"
                className="relative pt-1 hover:text-orange-500 transition duration-300 
                after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full 
                after:h-[2px] after:bg-orange-500 after:scale-x-0 after:origin-center 
                after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <button className="hidden md:block px-5 py-2 border-2 border-orange-500 rounded-full hover:bg-orange-500 transition text-white">
          Descargar cv
        </button>

        {/* Mobile Icon */}
        <div className="md:hidden text-2xl text-white cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FaIcons.FaTimes /> : <FaIcons.FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-700 px-4">
          <ul className="flex flex-col divide-y divide-gray-700 font-semibold">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="block w-full py-3 px-1 hover:text-orange-500 transition-all duration-200"
                >
                  {link}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <button className="hidden md:block relative overflow-hidden px-5 py-2 border-2 border-orange-500 rounded-full text-white group">
              {/* Texto encima del fondo animado */}
              <span className="relative z-10 transition-colors duration-300">Descargar cv</span>

              {/* Fondo animado que se escala desde la izquierda */}
              <span className="absolute inset-0 bg-orange-500 scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100 z-0 rounded-full"></span>
              </button>

            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
