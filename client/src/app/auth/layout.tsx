"use client"
import React, { useEffect } from "react";
import { setIsDarkMode } from "@/state";
import "./styles.css"
import { useAppDispatch, useAppSelector } from "../redux";

const Layout = ({ children }: { children: React.ReactNode }) => {
    const dispatch = useAppDispatch();
  
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  useEffect(() =>{
    dispatch(setIsDarkMode(true));

  })
  return (
    <div className="auth-layout">
        <main className="auth-layout__main">
        {children}
      </main>
    </div>
  );
};

export default Layout;