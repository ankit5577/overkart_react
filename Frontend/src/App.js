import { Route, Routes } from "react-router";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

function App() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className="App md:flex md:flex-col h-screen relative">
      <Navbar openSidebar={() => setSidebar(!sidebar)} />
      <div className="flex flex-row mt-24">
        <Sidebar showSidebar={sidebar} />
        <main
          
          className={`mx-auto flex flex-1 ${
            sidebar
              ? ""
              : "transform translate-x-80 md:translate-x-0 transition duration-200 ease-in-out blur-sm md:blur-none"
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
