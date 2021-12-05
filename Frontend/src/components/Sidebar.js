import React from "react";

function Sidebar(prop) {
  console.log(prop.showSidebar)
  return (
    <aside
      className={`absolute md:top-24 border-b-0 border w-64 transition-all inset-y-0 ease-out duration-200 md:flex transform -translate-x-full ${
        prop.showSidebar ? "" : "translate-x-0"
      }`}
    >
      <nav className="flex flex-1 flex-col p-2">
        <li className="block px-4 py-2.5 border-b border-gray-200">Home</li>
        <li className="block px-4 py-2.5 border-b border-gray-200">Home</li>
        <li className="block px-4 py-2.5 border-b border-gray-200">Home</li>
        <li className="block px-4 py-2.5 border-b border-gray-200">Home</li>
      </nav>
    </aside>
  );
}

export default Sidebar;
