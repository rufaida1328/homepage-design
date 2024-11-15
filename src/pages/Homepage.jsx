import React from 'react';

import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import ProductList from '../components/ProductList';
import Header from '../components/Header';

const HomePage = () => (
  <div className="bg-gray-100 min-h-screen">
<div className="container mx-auto p-4 md:p-6">
      <Header />
    <main className="container mx-auto p-6">
      <HeroSection />
      <ProductList />
    </main>
    <Footer />
  </div>
  </div>
);

export default HomePage;
