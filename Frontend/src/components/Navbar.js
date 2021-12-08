import React, { useContext } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import Topbar from "./Topbar";
import ProductStore from "../services/ProductState";
import { Link } from "react-router-dom";

function Navbar(prop) {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const productCtx = useContext(ProductStore);
  // const setIsMenuHandler = () => {
  //   prop.hideSidebar();
  //   setIsMenuOpen(() => !isMenuOpen);
  // };

  return (
    <nav className="fixed bg-white w-full z-20 border top-0">
      <Topbar />
      <div className="container mx-auto p-4 flex flex-row justify-between gap-4">
        <div className="flex">
          {/* side menu */}
          <Button click={() => prop.openSidebar()}>
            <img
              alt="menu"
              src="https://img.icons8.com/material-outlined/24/000000/menu--v1.png"
            />
          </Button>
          {/* logo */}
          <Link to="/">
            <img
              src="https://svgsilh.com/svg_v2/2056977.svg"
              className="self-center w-12"
              alt="logo"
            />
          </Link>
        </div>
        <div className="flex flex-1">
          <Input
            icon={true}
            icon_right={true}
            placeholder={"Search Products"}
            icon_url={"https://img.icons8.com/ios/50/000000/search--v1.png"}
          />
        </div>
        {/* <Button class="md:hidden" click={() => setIsMenuHandler()}>
          <img
            alt="menu"
            src="https://img.icons8.com/material-outlined/24/000000/menu--v1.png"
          />
        </Button> */}

        {/* for displays */}
        <nav className="hidden md:flex justify-center align-middle flex-wrap">
          <Button>
            <img
              src="https://img.icons8.com/material-outlined/24/000000/shopping-cart--v2.png"
              alt="cart"
            />
            {productCtx.cartItems.length > 0 && (
              <div className=" rounded-full px-2 py-1 translate -translate-y-2 -translate-x-1 font-semibold bg-teal-400 text-white text-[6px]">
                {productCtx.cartItems.length}
              </div>
            )}
          </Button>
        </nav>
        {/* display nav end */}
        {/*  
        
        */}
        {/* for mobile */}
        {/* {isMenuOpen && (
          <nav className="absolute w-full top-0 left-0">
            <div className="bg-gray-50 p-4 flex flex-auto flex-col m-4 border rounded">
              <div className="flex justify-between">
                <img
                  src="https://svgsilh.com/svg_v2/2056977.svg"
                  className="self-center w-12"
                  alt="logo"
                />
                <Button click={() => setIsMenuHandler()}>
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
        )} */}
        {/* mobile nav end */}
      </div>
    </nav>
  );
}

export default Navbar;
