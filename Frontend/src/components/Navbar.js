import React, { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="bg-gray-100">
      <div className="container mx-auto p-4 flex flex-row justify-between gap-4">
        <div className="flex">
          <img
            src="https://svgsilh.com/svg_v2/2056977.svg"
            className="self-center w-12"
            alt="logo"
          />
        </div>
        <div className="flex flex-auto">
          <input
            className=" px-4 w-full max-h-16 rounded-xl max-w-2xl mx-auto focus:outline-none focus:ring focus:border-blue-300 "
            type="text"
          />
        </div>
        <button
          className="flex p-4 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          🎁
        </button>

        {/* for displays */}
        <nav className="hidden md:flex justify-center align-middle flex-wrap">
          <li className="flex px-2 py-1 cursor-pointer self-center hover:bg-gray-600 hover:text-white hover:rounded-lg">
            Home
          </li>
          <li className="flex px-2 py-1 cursor-pointer self-center hover:bg-gray-600 hover:text-white hover:rounded-lg">
            About
          </li>
        </nav>
        {/* display nav end */}
        {/* for mobile */}
        {isMenuOpen && (
          <nav className="absolute w-full top-0 left-0">
            <div className="bg-gray-50 p-4 flex flex-auto flex-col m-4 border rounded">
              <div className="flex justify-between">
                <img
                  src="https://svgsilh.com/svg_v2/2056977.svg"
                  className="self-center w-12"
                  alt="logo"
                />
                <button onClick={() => setIsMenuOpen(false)}>✖️</button>
              </div>
              <div className="border border-gray-200"></div>
              <nav className="flex flex-wrap flex-auto flex-col">
                <li className="flex py-2">Home</li>
                <div className="border border-gray-200"></div>
                <li className="flex py-2">Home</li>
                <div className="border border-gray-200"></div>
                <li className="flex py-2">Home</li>
              </nav>
            </div>
          </nav>
        )}
        {/* mobile nav end */}
      </div>
    </nav>
  );
}

export default Navbar;
