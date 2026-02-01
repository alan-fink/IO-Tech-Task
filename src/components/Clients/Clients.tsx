"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { translations } from "@/lib/translations";

export default function Clients() {
  const lang = useSelector((state: RootState) => state.global.language);
  const t = translations[lang]; // <-- Берем словарь
  
  const clients = ["Company One", "Global Corp", "Tech Solutions", "Future Law", "Partner Group"];

  return (
    <section className="py-12 bg-[#3b2416] border-t border-white/5">
      <div className="container mx-auto px-6">
        {/* Используем перевод */}
        <p className="text-center text-white/40 text-sm uppercase tracking-widest mb-8 font-medium">
          {t.clients?.title || "Trusted by leading companies"} 
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-10 lg:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {clients.map((client, i) => (
            <div key={i} className="text-white text-xl font-bold border border-white/20 p-4 rounded hover:bg-white/5 cursor-default">
              {client} LOGO
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}