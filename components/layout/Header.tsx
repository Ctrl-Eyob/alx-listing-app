// components/layout/Header.tsx

import React from "react";
import Link from "next/link";

const accommodationTypes = [
  "Rooms",
  "Mansion",
  "Countryside",
  "Resort",
  "Villa",
  "City Loft",
];

const Header = () => {
  return (
    <header className="w-full shadow-sm bg-white">
      {/* TOP BAR */}
      <div className="container mx-auto py-4 px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          StayFinder
        </Link>

        <div className="hidden md:flex items-center gap-4">
          <input
            type="text"
            placeholder="Search here..."
            className="border px-4 py-2 rounded-full w-64"
          />
          <button className="px-4 py-2 bg-blue-600 text-white rounded-full">
            Sign In
          </button>
          <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-full">
            Sign Up
          </button>
        </div>
      </div>

      {/* ACCOMMODATION TYPES */}
      <div className="w-full bg-gray-100">
        <div className="container mx-auto px-4 py-2 flex gap-4 overflow-x-auto">
          {accommodationTypes.map((type) => (
            <span
              key={type}
              className="px-4 py-1 bg-white rounded-full border text-sm whitespace-nowrap cursor-pointer hover:bg-blue-50"
            >
              {type}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
