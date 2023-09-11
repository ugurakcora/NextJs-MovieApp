import React from "react";
import "./globals.css";

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default Layout;