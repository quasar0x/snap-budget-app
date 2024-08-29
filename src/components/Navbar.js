// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg">SnapBudget</div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <div className={`flex space-x-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <Link to="/" className="text-white hover:text-gray-200">Home</Link>
          <Link to="/budget" className="text-white hover:text-gray-200">Budget</Link>
          <Link to="/expenses" className="text-white hover:text-gray-200">Expenses</Link>
          <Link to="/visualization" className="text-white hover:text-gray-200">Visualization</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
