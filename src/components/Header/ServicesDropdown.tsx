"use client";

import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { translations } from "@/lib/translations";

export default function ServicesDropdown() {
  const lang = useSelector((state: RootState) => state.global.language);
  const t = translations[lang].servicesDropdown;

  
  const createSlug = (text: string) => {
    return text.toLowerCase().replace(/\s+/g, '-');
  };

  const renderList = (items: string[]) => (
    <ul className="space-y-4 opacity-90">
      {items.map((item, idx) => (
        <li key={idx}>
          <Link 
            href={`/services/${createSlug(item)}`} 
            className="hover:text-[#d4af37] transition-colors block"
          >
            {item}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="fixed top-24 left-0 w-full h-[55vh] bg-[#3b2416] z-40 transition-300 duration-300 ease-out shadow-2xl border-t border-white/10">
      <div className="container mx-auto px-12 py-16 text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-sm overflow-y-auto h-full">
        
        {renderList(t.col1)}
        {renderList(t.col2)}
        {renderList(t.col3)}
        {renderList(t.col4)}
      </div>
    </div>
  );
}