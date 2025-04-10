import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex justify-center pt-40">{children}</div>;
};

export default Layout;
