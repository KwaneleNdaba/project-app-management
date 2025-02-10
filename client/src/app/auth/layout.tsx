import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import "./styles.css"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="auth-layout">
        <main className="auth-layout__main">
        {children}
      </main>
    </div>
  );
};

export default Layout;