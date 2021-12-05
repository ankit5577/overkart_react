import React, { useState } from "react";

function Sidebar() {
  const [show, setShow] = useState(true);
  return (
    <aside
      className="absolute inset-y-0 backdrop-blur-sm w-screen h-screen transform -translate-x-full transition duration-300 ease-in-out md:relative md:translate-x-0"
      onClick={() => {
        setShow(false);
      }}
    >
      <nav className="bg-gray-800 h-screen w-64 flex flex-grow flex-col">
        <li className="block py-2.5 px-4 text-white hover:bg-gray-900 transition duration-200">
          hellow
        </li>
        <li className="block py-2.5 px-4 text-white hover:bg-gray-900 transition duration-200">
          hellow
        </li>
        <li className="block py-2.5 px-4 text-white hover:bg-gray-900 transition duration-200">
          hellow
        </li>
        <li className="block py-2.5 px-4 text-white hover:bg-gray-900 transition duration-200">
          hellow
        </li>
      </nav>
    </aside>
  );
}

export default Sidebar;
