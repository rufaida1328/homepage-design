// src/components/ProductList.jsx
import React from 'react';

const products = [
  { name: 'Smart watches', discount: '25%', img: 'images/8.png' },
  { name: 'Laptops', discount: '15%', img: 'images/8.png' },
  { name: 'GoPro cameras', discount: '40%', img: 'images/8.png' },
  { name: 'Headphones', discount: '25%', img: 'images/8.png' },
  { name: 'Canon cameras', discount: '25%' },
];

const items = [
  { id: 1, name: "T-shirts with multiple colors, for men", price: "$10.30", imageUrl: "images/recommended/1.png" },
  { id: 2, name: "Jeans shorts for men blue color", price: "$10.30", imageUrl: "images/recommended/3.png" },
  { id: 3, name: "Brown winter coat medium size", price: "$12.50", imageUrl: "images/recommended/4.png" },
  { id: 4, name: "Jeans bag for travel for men", price: "$34.00", imageUrl: "images/recommended/image 24.png" },
  { id: 5, name: "Leather wallet", price: "$99.00", imageUrl: "images/recommended/image 26.png" },
  { id: 6, name: "Canon camera black, 100x zoom", price: "$9.99", imageUrl: "images/recommended/4.png" },
  { id: 7, name: "Headset for gaming with mic", price: "$8.99", imageUrl: "images/recommended/9.png" },
  { id: 8, name: "Smartwatch silver color modern", price: "$10.30", imageUrl: "images/recommended/image 26.png" },
  { id: 9, name: "Blue wallet for men leather material", price: "$10.30", imageUrl: "images/jar.png" },
  { id: 10, name: "Jeans bag for travel for men", price: "$80.95", imageUrl: "images/recommended/image 85.png" },
];

const ItemCard = ({ item }) => (
  <div className="border rounded-md p-4 shadow-md flex flex-col items-center">
    <img src={item.imageUrl} alt={item.name} className="w-24 h-24 object-cover mb-4" />
    <h3 className="text-sm font-semibold mb-2 text-center">{item.name}</h3>
    <p className="text-blue-600 font-bold">{item.price}</p>
  </div>
);

const ProductList = () => (
  <>
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
  <h3 className="font-bold text-lg mb-4">Deals and offers</h3>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
    <div className="text-center">
      <div className="bg-gray-100 p-4 rounded-lg">
        {/* Static Image and Name */}
        <img src="images/8.png" alt="Product 1" className="h-16 mx-auto" />
        <p className="mt-2">Smart Watches</p>
        <p className="text-red-500">-25% Off</p>
      </div>
    </div>
    <div className="text-center">
      <div className="bg-gray-100 p-4 rounded-lg">
        {/* Static Image and Name */}
        <img src="images/image 34.png" alt="Product 2" className="h-16 mx-auto" />
        <p className="mt-2">Laptop</p>
        <p className="text-red-500">-15% Off</p>
      </div>
    </div>
    <div className="text-center">
      <div className="bg-gray-100 p-4 rounded-lg">
        {/* Static Image and Name */}
        <img src="images/image 28.png" alt="Product 3" className="h-16 mx-auto" />
        <p className="mt-2">GoPro Camera</p>
        <p className="text-red-500">-40% Off</p>
      </div>
    </div>
    <div className="text-center">
      <div className="bg-gray-100 p-4 rounded-lg">
        {/* Static Image and Name */}
        <img src="images/image 29.png" alt="Product 3" className="h-16 mx-auto" />
        <p className="mt-2">Headphones</p>
        <p className="text-red-500">10% Off</p>
      </div>
    </div>
    <div className="text-center">
      <div className="bg-gray-100 p-4 rounded-lg">
        {/* Static Image and Name */}
        <img src="images/image 32.png" alt="Product 3" className="h-16 mx-auto" />
        <p className="mt-2">Canon Camera</p>
        <p className="text-red-500">10% Off</p>
      </div>
    </div>
    {/* Add more products statically if needed */}
  </div>
</div>

<div className="bg-white p-6 rounded-lg shadow-md mt-6">
  <h3 className="font-bold text-lg mb-4">Home And Decore</h3>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
    <div className="text-center">
      <div className="bg-gray-100 p-4 rounded-lg">
        {/* Static Image and Name */}
        <img src="images/1.png" alt="Product 1" className="h-16 mx-auto" />
        <p className="mt-2">SofaAnd Chair</p>
        <p className="text-red-500">20% Off</p>
      </div>
    </div>
    <div className="text-center">
      <div className="bg-gray-100 p-4 rounded-lg">
        {/* Static Image and Name */}
        <img src="images/image 94.png" alt="Product 2" className="h-16 mx-auto" />
        <p className="mt-2">Lamp</p>
        <p className="text-red-500">15% Off</p>
      </div>
    </div>
    <div className="text-center">
      <div className="bg-gray-100 p-4 rounded-lg">
        {/* Static Image and Name */}
        <img src="images/image 93.png" alt="Product 3" className="h-16 mx-auto" />
        <p className="mt-2">Comfort</p>
        <p className="text-red-500">10% Off</p>
      </div>
    </div>
    <div className="text-center">
      <div className="bg-gray-100 p-4 rounded-lg">
        {/* Static Image and Name */}
        <img src="images/jar.png" alt="Product 3" className="h-16 mx-auto" />
        <p className="mt-2">Jar</p>
        <p className="text-red-500">10% Off</p>
      </div>
    </div>
    <div className="text-center">
      <div className="bg-gray-100 p-4 rounded-lg">
        {/* Static Image and Name */}
        <img src="images/image 32.png" alt="Product 3" className="h-16 mx-auto" />
        <p className="mt-2">Mobile</p>
        <p className="text-red-500">10% Off</p>
      </div>
    </div>
    {/* Add more products statically if needed */}
  </div>
</div>
<div
  className="flex items-center justify-center min-h-screen bg-blue-50 p-6"
  style={{
    backgroundImage: `url('images/bannerblue.png')`, // Replace with your image path
  }}
>
  <div className="text-white p-8 rounded-lg w-full max-w-6xl flex flex-col md:flex-row items-center justify-between shadow-lg">
    {/* Left Section */}
    <div className="mb-6 md:mb-0 md:w-1/2">
      <h2 className="text-3xl font-semibold">An easy way to send requests to all suppliers</h2>
      <p className="mt-2 text-white/70">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
      </p>
    </div>

    {/* Right Section - Form */}
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm text-gray-700">
      <h3 className="text-lg font-semibold mb-4">Send quote to suppliers</h3>
      <form className="space-y-4">
        <div>
          <label className="sr-only" htmlFor="itemName">
            What item you need?
          </label>
          <input
            type="text"
            id="itemName"
            placeholder="What item you need?"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="sr-only" htmlFor="details">
            More details
          </label>
          <textarea
            id="details"
            placeholder="Type more details"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <div className="flex space-x-2">
          <input
            type="number"
            placeholder="Quantity"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Pcs</option>
            <option>Kg</option>
            <option>Ltr</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Send Inquiry
        </button>
      </form>
    </div>
  </div>
</div>

    <div className="bg-gray-100 p-6 mt-6">
      <h2 className="text-2xl font-bold mb-6">Recommended items</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
    <div className="bg-gray-100 p-6">
      {/* Categories Section */}
      <h2 className="text-2xl font-bold mb-6">Suppliers by Region</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { title: 'Source from Industry Hubs', img: 'images/extraservices/Mask group-1.png' },
          { title: 'Customize Your Products', img: 'images/extraservices/Mask group-2.png' },
          { title: 'Fast, reliable shipping', img: 'images/extraservices/Mask group-3.png' },
          { title: 'Product monitoring and inspection', img: 'images/extraservices/Mask group.png' },
        ].map((category, index) => (
          <div key={index} className="bg-white shadow-md p-4 rounded-md text-center">
            <img src={category.img} alt={category.title} className="w-full h-24 object-cover rounded-md mb-2" />
            <h2 className="text-lg font-semibold">{category.title}</h2>
          </div>
        ))}
      </div>

    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Suppliers by Region</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 text-center">
        {[
          { country: 'Arabic Emirates', link: 'shopname.ae', img: 'images/flagssuppliers/icon-1.png' },
          { country: 'Australia', link: 'shopname.au', img: 'images/flagssuppliers/icon-2.png' },
          { country: 'United States', link: 'shopname.us', img: 'images/flagssuppliers/icon-3.png' },
          { country: 'Russia', link: 'shopname.ru', img: 'images/flagssuppliers/icon-4.png' },
          { country: 'Italy', link: 'shopname.it', img: 'images/flagssuppliers/icon-5.png' },
          { country: 'Denmark', link: 'shopname.dk', img: 'images/flagssuppliers/icon-6.png' },
          { country: 'France', link: 'shopname.fr', img: 'images/flagssuppliers/icon-7.png' },
          { country: 'China', link: 'shopname.cn', img: 'images/flagssuppliers/icon-8.png' },
          { country: 'Great Britain', link: 'shopname.co.uk', img: 'images/flagssuppliers/icon-9.png' },
        ].map((region, index) => (
          <div key={index}>
            <img src={region.img} className="w-10 h-10 object-cover rounded-md mb-2" alt={region.country} />
            <span className="font-medium">{region.country}</span>
            <br />
            <a href={`https://${region.link}`} className="text-blue-600">{region.link}</a>
          </div>
        ))}
      </div>
    </div>
    </div>
  </>
);

export default ProductList;
