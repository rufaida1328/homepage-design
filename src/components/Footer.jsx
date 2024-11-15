// src/components/Footer.jsx
import React from 'react';

const Footer = () => (
 <>
     {/* Newsletter Subscription Section */}
     <div className="my-8 bg-white p-6 gap-10 rounded-md text-center shadow-md">
        <h3 className="text-xl font-bold mb-2">Subscribe on our newsletter</h3>
        <p className="mb-4 text-gray-600 gap-2">Get daily news on upcoming offers from many suppliers all over the world</p>
        <input type="email" required placeholder="Email" className="border rounded px-4 gap-2 py-2 mb-2 w-full max-w-sm" />
        <button className="bg-blue-600 text-white px-4 py-2 gap-2 rounded w-full max-w-sm">Subscribe</button>
      </div>

      {/* Footer Section */}
      <footer className="my-8 bg-gray-200 p-6 rounded-md">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          {/* Brand Info */}
          <div className="text-center md:text-left">
            <h4 className="font-bold text-lg">Brand</h4>
            <p className="text-gray-600">Best information about the company goes here but now lorem ipsum is</p>
            <div className="flex justify-center md:justify-start mt-2 space-x-2">
              {/* Social icons */}
              {['facebook', 'twitter', 'linkedin', 'instagram'].map((platform, index) => (
                <span key={index} className="text-gray-600 hover:text-blue-600">
                  <i className={`fab fa-${platform}`}></i>
                </span>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          <div className="text-center md:text-left">
            <h5 className="font-bold">About</h5>
            <ul>
              {['About Us', 'Find Store', 'Categories', 'Blogs'].map((item, index) => (
                <li key={index}><a href="/" className="text-gray-600 hover:underline">{item}</a></li>
              ))}
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h5 className="font-bold">Partnership</h5>
            <ul>
              {['About Us', 'Find Store', 'Categories', 'Blogs'].map((item, index) => (
                <li key={index}><a href="/" className="text-gray-600 hover:underline">{item}</a></li>
              ))}
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h5 className="font-bold">Get App</h5>
            <div className="flex justify-center md:justify-start space-x-2">
              <a href="/" className="bg-black text-white p-2 rounded">App Store</a>
              <a href="/" className="bg-black text-white p-2 rounded">Google Play</a>
            </div>
          </div>
        </div>

        {/* Language Selector */}
        <div className="text-center border-t border-gray-300 pt-4">
          <span className="text-sm text-gray-600">© 2023 Ecommerce.</span>
          <select className="ml-4 border rounded px-2 py-1">
            <option>English</option>
            <option>French</option>
            <option>Spanish</option>
          </select>
        </div>
      </footer>
    
    </>
);

export default Footer;
