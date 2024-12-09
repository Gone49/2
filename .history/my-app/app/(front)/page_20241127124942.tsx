import Doctorlist from "@/components/ui/Doctorlist";
import Hero from "@/components/Frontend/Hero";
import React from "react";

export default function Home() {
  return (
    <><Hero /><div>
      <h1 className="text-2xl font-bold text-center my-6">Our Doctors</h1>
      <Doctorlist />
    </div></>
  )}
