// src/components/HeroSection.jsx
import React from 'react';

const HeroSection = () => (
  <div className="container mx-auto p-4">
    <div className="flex flex-col lg:flex-row bg-gray-50 p-6 rounded-lg shadow-md space-y-4 lg:space-y-0 lg:space-x-4">
      
      {/* Sidebar */}
      <aside className="lg:w-1/4 bg-white p-4 rounded-md shadow">
        <ul className="space-y-2">
          <li className="font-semibold">Automobiles</li>
          <li>Clothes and wear</li>
          <li>Home interiors</li>
          <li>Computer and tech</li>
          <li>Tools, equipment</li>
          <li>Sports and outdoor</li>
          <li>Animal and pets</li>
          <li>Machinery tools</li>
        </ul>
      </aside>
      
      {/* Main Banner */}
      <div
        className="flex-1 w-full p-6 bg-cover rounded-lg flex flex-col justify-center text-center lg:text-left"
        style={{
          backgroundImage: `url('images/bannerimage.jpg')`, // Replace with your image path
        }}
      >
        <h2 className="text-xl lg:text-2xl font-bold mb-4">
          Latest trending <br /> <span className="text-black">Electronic items</span>
        </h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mx-auto ">Learn more</button>
      </div>
      
      {/* Right Sidebar Cards */}
      <div className="lg:w-1/4 space-y-4">
        <div className="bg-blue-50 p-4 rounded-md shadow text-center">
          <img src="images/Avatar.png" alt="Brand" className="h-8 mx-auto" />
          <p>Hi, user <br /> let's get started</p>
          <button className="bg-blue-500 text-white w-full mt-2 py-2 rounded-md">Join now</button>
          <button className="border border-blue-500 text-blue-500 w-full mt-2 py-2 rounded-md">Log in</button>
        </div>
        
        <div className="bg-orange-400 p-4 rounded-lg text-center">
          <p className="font-semibold">Get US $10 off <br /> with a new supplier</p>
        </div>
        
        <div className="bg-teal-400 p-4 rounded-lg text-center">
          <p className="font-semibold">Send quotes with <br /> supplier preferences</p>
        </div>
      </div>
    </div>
  </div>
);

export default HeroSection;
