import { Route, Routes } from "react-router";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import BottomNav from "./components/BottomNav";
import Product from "./pages/Product";
import Search from "./pages/Search";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div
      className={`App md:flex md:flex-col h-screen relative ${
        showSidebar ? "overflow-hidden md:overflow-auto" : ""
      } h-auto`}
    >
      <Navbar
        openSidebar={() => setShowSidebar(!showSidebar)}
        hideSidebar={() => setShowSidebar(false)}
      />
      <div className="flex flex-row mt-24">
        <Sidebar showSidebar={showSidebar} />
        <main
          className={`mx-auto flex flex-1 transform -mt-2 md:mt-10  transition duration-200 ease-in-out
           md:blur-none  md:translate-x-0 ${
             showSidebar ? "blur-sm translate-x-80 " : ""
           }`}
        >
          <div className=" flex flex-col flex-grow px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="search/*" element={<Search />} />
              <Route path="product/:id" element={<Product />} />
            </Routes>
          </div>
        </main>
      </div>
      <BottomNav />
      <Footer />
    </div>
  );
}

export default App;
