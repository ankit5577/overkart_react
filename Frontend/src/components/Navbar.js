import React, { useState } from "react";
import Input from "../Elements/Input";
import Button from "./Button";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="bg-gray-50">
      <div className="container mx-auto p-4 flex flex-row justify-between gap-4">
        <div className="flex">
          {/* side menu */}
          <Button click={() => setIsMenuOpen(!isMenuOpen)}>
            <img
              alt="menu"
              src="https://img.icons8.com/material-outlined/24/000000/menu--v1.png"
            />
          </Button>
          {/* logo */}
          <img
            src="https://svgsilh.com/svg_v2/2056977.svg"
            className="self-center w-12"
            alt="logo"
          />
        </div>
        <div className="flex flex-1">
          <Input
            icon={true}
            icon_right={true}
            placeholder={"Search Products"}
            icon_url={"https://img.icons8.com/ios/50/000000/search--v1.png"}
          />
        </div>
        <Button class="md:hidden" click={() => setIsMenuOpen(!isMenuOpen)}>
          <img
            alt="menu"
            src="https://img.icons8.com/material-outlined/24/000000/menu--v1.png"
          />
        </Button>

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
                <Button click={() => setIsMenuOpen(false)}>
                  <img
                    alt="close menu"
                    src="https://img.icons8.com/material-outlined/24/000000/delete-sign.png"
                  />
                </Button>
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
