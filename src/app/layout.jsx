"use client";

import React, { useEffect } from "react";
import "./globals.css";

const Layout = ({ children }) => {
  useEffect(() => {
    document.title = "MovieApp";
  }, []);

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default Layout;
