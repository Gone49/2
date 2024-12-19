"use client";

import Dashboard from "@/components/Dashboard/Dashboard";
import React, { Children } from "react";
import { BrowserRouter } from "react-router-dom";


export default function Layout({ }: { children: React.ReactNode }) {
  return (
    <div><BrowserRouter></BrowserRouter>
  
    </div>
  );
}
