import React from "react";
import Button from "../UI/Button";

function MobileNav() {
  return (
    <nav className="fixed border bottom-0 bg-white w-full flex flex-row flex-wrap gap-2 z-20 justify-evenly md:hidden">
      <div className="flex flex-1">
        <Button class="flex flex-grow">
          <img
            className="self-center mx-auto"
            src="https://img.icons8.com/material-outlined/24/000000/home--v2.png"
            alt="home"
          />
        </Button>
      </div>
      <div className="flex flex-1">
        <Button class="flex flex-grow">
          <img
            className="self-center mx-auto"
            src="https://img.icons8.com/material-outlined/24/000000/user-male-circle.png"
            alt="profile"
          />
        </Button>
      </div>
      <div className="flex flex-1">
        <Button class="flex flex-grow"><img
            className="self-center mx-auto"
            src="https://img.icons8.com/material-outlined/24/000000/user-male-circle.png"
            alt="profile"
          /></Button>
      </div>
      <div className="flex flex-1">
        <Button class="flex flex-grow"><img
            className="self-center mx-auto"
            src="https://img.icons8.com/material-outlined/24/000000/home--v2.png"
            alt="home"
          /></Button>
      </div>
    </nav>
  );
}

export default MobileNav;
