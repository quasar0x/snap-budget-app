// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg">SnapBudget</div>
        <div className="space-x-4">
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
