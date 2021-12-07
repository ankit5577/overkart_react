import { Route, Routes } from "react-router";
import "./App.css";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import React, { Suspense, useState } from "react";
import BottomNav from "./components/MobileNav";
import Loading from "./components/Loading/Loading";

// Lazy Loading
const HomePage = React.lazy(() => import("./pages/HomePage"));
const SearchPage = React.lazy(() => import("./pages/SearchPage"));
const ProductPage = React.lazy(() => import("./pages/ProductPage"));
const AuthPage = React.lazy(() => import("./pages/AuthPage"));

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
              <Route
                path="/"
                element={
                  <Suspense fallback={<Loading fullscreen={true}></Loading>}>
                    <HomePage></HomePage>
                  </Suspense>
                }
              />
              <Route
                index
                element={
                  <Suspense fallback={<Loading fullscreen={true}></Loading>}>
                    <HomePage></HomePage>
                  </Suspense>
                }
              />
              <Route
                path="search/*"
                element={
                  <Suspense fallback={<Loading fullscreen={true}></Loading>}>
                    <SearchPage />
                  </Suspense>
                }
              />
              <Route
                path="auth"
                element={
                  <Suspense fallback={<Loading fullscreen={true}></Loading>}>
                    <AuthPage />
                  </Suspense>
                }
              />
              <Route
                path="product/:id"
                element={
                  <Suspense fallback={<Loading fullscreen={true}></Loading>}>
                    <ProductPage />
                  </Suspense>
                }
              />
              <Route
                path="*"
                element={
                  <div
                    className="p-2 mx-auto antialiased font-bold 
                text-gray-700 h-screen text-4xl"
                  >
                    Page not found
                  </div>
                }
              />
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
