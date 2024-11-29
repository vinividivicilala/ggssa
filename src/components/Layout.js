import React from "react";

const Layout = ({ children, className = "" }) => {
  return (
    <div className={`${className} bg-light py-16 md:px-[17vw] text-dark px-10`}>
      {children}
    </div>
  );
};

export default Layout;
