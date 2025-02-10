"use client";

import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import AuthProvider from "./authProvider";
import StoreProvider, { useAppSelector } from "./redux";
import { ClerkLoading } from "@clerk/nextjs";
import { ClerkProvider } from "@clerk/clerk-react";
import { useUser } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";


const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed,
  );
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);
  const pathname = usePathname();


  
  const {user} = useUser();
  const router = useRouter();
  
  
  if(!user || pathname.includes("auth")){
    document.documentElement.classList.add("dark");
    router.push("/auth/signin")
  }

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  return (
    <div className="flex min-h-screen w-full bg-gray-50 text-gray-900">
      <Sidebar />
      <main
        className={`flex w-full flex-col bg-gray-50 dark:bg-dark-bg ${isSidebarCollapsed ? "" : "md:pl-64"
          }`}
      >
        <Navbar />
        {children}
      </main>
    </div>
  );
};

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
        <DashboardLayout>{children}</DashboardLayout>
    </StoreProvider>
  );
};

export default DashboardWrapper;
