import React from "react";
import Navbar from "../components/ui/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/layout/Footer";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
