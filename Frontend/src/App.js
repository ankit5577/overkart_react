import { Route, Routes } from "react-router";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App flex flex-col h-screen">
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <Routes>
        <Route path="/" element={<div className="flex-grow"><Home></Home></div>} />
        <Route path="expenses" element={<div>hello</div>} />
        <Route path="invoices" element={<div>hello2</div>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
