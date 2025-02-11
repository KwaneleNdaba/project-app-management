"use client"
import React from "react";
import "./styles.css"

const Layout = ({ children }: { children: React.ReactNode }) => {
      document.documentElement.classList.add("dark");
  return (
    <div className="auth-layout">
        <main className="auth-layout__main">
        {children}
      </main>
    </div>
  );
};

export default Layout;