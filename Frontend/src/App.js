import { Route, Routes } from "react-router";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="App md:flex md:flex-col h-screen relative">
      <Navbar openSidebar={() => setShowSidebar(!showSidebar)} />
      <div className="flex flex-row mt-24">
        <Sidebar showSidebar={showSidebar} />
        <main
          className={`mx-auto flex flex-1 transform transition duration-200 ease-in-out
           md:blur-none  md:translate-x-0 ${
             showSidebar ? "blur-sm translate-x-80" : ""
           }`}
        >
          <Routes>
            <Route
              path="/"
              element={
                <div className="flex-grow">
                  <Home></Home>
                </div>
              }
            />
            <Route path="expenses" element={<div>hello</div>} />
            <Route path="invoices" element={<div>hello2</div>} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
