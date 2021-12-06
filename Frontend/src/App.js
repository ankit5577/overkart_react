import { Route, Routes } from "react-router";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import BottomNav from "./components/BottomNav";

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
          className={`mx-auto flex flex-1 transform transition duration-200 ease-in-out
           md:blur-none  md:translate-x-0 ${
             showSidebar ? "blur-sm translate-x-80 " : ""
           }`}
        >
          <Routes>
            <Route
              path="/"
              element={
                <div className="flex-grow">
                  <Home />
                </div>
              }
            />
            <Route path="product" element={<div>hello</div>} />
            <Route path="search" element={<div>hello2</div>} />
          </Routes>
        </main>
      </div>
      <BottomNav />
      <Footer />
    </div>
  );
}

export default App;
