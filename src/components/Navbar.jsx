import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-lg font-semibold">
          <a href="/">Logo</a>
        </div>
        <ul className="flex space-x-4">
          <li>
            <a href="/contact" className="text-white">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
