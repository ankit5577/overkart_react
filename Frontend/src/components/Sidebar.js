import React from "react";

function Sidebar(prop) {
  return (
    <aside
      className={`fixed bg-white z-10 top-[89px] border-b-0 border w-64 transition-all inset-y-0 ease-out duration-200 md:flex transform ${
        prop.showSidebar ? "translate-x-0" : "-translate-x-full"
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
