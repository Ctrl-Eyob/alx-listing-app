// components/layout/Footer.tsx

import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-10 mt-10">
      <div className="container mx-auto px-4 text-center">
        <h3 className="font-semibold text-lg">StayFinder</h3>
        <p className="text-gray-300 mt-2">
          © {new Date().getFullYear()} StayFinder. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
