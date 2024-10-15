import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Home</Link>
        <div className="space-x-4">
          <Link to="/cart" className="hover:underline">Menu</Link>
          <Link to="/profile" className="hover:underline">Contact us</Link>
        </div>
      </div>
    </nav>
  );
};