"use client";

import { useState } from "react";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Team from "@/components/Team/Team";
import FeedBack from "@/components/FeedBack/FeedBack";
import Footer from "@/components/Footer/Footer";
import Clients from "@/components/Clients/Clients"; 

export default function Page() {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <>
      <Header
        openServices={servicesOpen}
        setOpenServices={setServicesOpen}
      />

      <Hero servicesOpen={servicesOpen} />
      
      
      <Clients />
      
      <Team />

      <FeedBack />

      <Footer />
    </>
  );
}