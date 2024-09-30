import React from "react";
import NavbarHead from "../components/navbar/NavbarHead";
import NavbarTop from "../components/navbar/NavbarTop";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";

export default function Layout() {
  return (
    <div>
      <NavbarTop />
      <NavbarHead />
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
