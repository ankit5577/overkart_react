import React from "react";
import Button from "../Elements/Button";

function Topbar() {
  return (
    <div className="bg-gray-50 text-gray-600 px-4 hidden md:flex">
      <div className="container mx-auto flex justify-around">
        <div className="flex flex-row">
          <div className="self-center">
            <img
              className="w-4 mr-1"
              src="https://img.icons8.com/material-outlined/24/000000/phone.png"
              alt="phone"
            />
          </div>
          <p className="self-center text-xs">730 784 4227</p>
        </div>
        <div className="flex flex-row flex-wrap gap-2">
          <Button class="text-xs hover:text-black">
            <img
              className="w-4 mr-1"
              src="https://img.icons8.com/ios-glyphs/24/000000/compare-heights.png"
              alt="compare items"
            />
            Compare
          </Button>
          <Button class="text-xs hover:text-black">
            <img
              className="w-4 mr-1"
              src="https://img.icons8.com/material-outlined/24/000000/like--v1.png"
              alt="wishlist"
            />{" "}
            Wishlist
          </Button>
          <Button class="text-xs hover:text-black relative group">
            <img
              className="w-4 mr-1"
              src="https://img.icons8.com/material-rounded/24/000000/guest-male.png"
              alt="account"
            />
            Account
            <div className="invisible top-10 bg-gray-50 border p-4 rounded-lg absolute transition duration-1000 group-focus:visible">
              <li className="flex flex-1 px-2 py-1 hover:text-deep-purple-400 cursor-pointer">
                login
              </li>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
