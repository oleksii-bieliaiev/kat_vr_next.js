'use client'

import React from "react";
import About from "@/components/About";
import Contacts from "@/components/Contacts";
import Header from "@/components/Header";
import MoreGaming from "@/components/MoreGaming";
import TechSpecs from "@/components/TechSpecs";
import WhyKat from "@/components/WhyKat";
import Footer from "@/components/Footer";
import Last from "@/components/Last";


export default function Home() {

  return (
    <main className="relative scroll-smooth bg-gradient-to-r from-[#191536] to-[#000000] h-screen box-border">
      <Header/>
      <MoreGaming />
      <About />
      <TechSpecs />
      <WhyKat />
      <Contacts />
      <Footer />
      <Last />
    </main>
  );
}
