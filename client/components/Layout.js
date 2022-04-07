import React from "react";

import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <div className="w-full h-screen">
      <NavBar />
      {children}
    </div>
  );
}
