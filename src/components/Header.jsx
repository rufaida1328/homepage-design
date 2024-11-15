// src/components/Header.jsx
import React from 'react';

const Header = () => (
  <header className="bg-white shadow-md p-4">
    <div className="container mx-auto flex flex-wrap justify-between items-center">
      
      {/* Logo and Search Bar */}
      <div className="flex items-center w-full md:w-auto mb-4 md:mb-0">
        {/* Logo */}
        <div className="text-blue-500 font-bold text-lg">Brand</div>

        {/* Desktop Search Bar */}
        <div className="hidden lg:flex items-center space-x-2 ml-4">
          <input
            type="text"
            placeholder="Search"
            className="border rounded-md p-2 w-64"
          />
          <button className="bg-blue-500 text-white p-2 rounded-md">Search</button>
        </div>
      </div>

      {/* Profile, Orders, Cart */}
      <div className="flex items-center space-x-4 text-gray-700 text-sm">
        <button className="hover:text-blue-500 hidden md:inline">Profile</button>
        <button className="hover:text-blue-500 hidden md:inline">Orders</button>
        <button className="hover:text-blue-500">Cart</button>
      </div>

      {/* Join and Login Buttons */}
      <div className="flex items-center space-x-2 mt-4 md:mt-0">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Join now</button>
        <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md">Log in</button>
      </div>
    </div>

    {/* Mobile Search Bar */}
    <div className="flex lg:hidden mt-4">
      <input
        type="text"
        placeholder="Search"
        className="border rounded-md p-2 w-full"
      />
      <button className="bg-blue-500 text-white p-2 rounded-md ml-2">Search</button>
    </div>
  </header>
);

export default Header;
