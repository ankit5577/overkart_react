import React from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button";

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
          <Link to="/auth">
            <Button class="text-xs hover:text-black relative group">
              <img
                className="w-4 mr-1"
                src="https://img.icons8.com/material-rounded/24/000000/guest-male.png"
                alt="account"
              />
              Login / Signup
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
