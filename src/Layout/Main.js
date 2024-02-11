import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="container mx-auto px-5">
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
