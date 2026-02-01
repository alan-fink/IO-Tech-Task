"use client";

import React, { useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { translations } from "@/lib/translations";

export default function SearchPage() {
  const lang = useSelector((state: RootState) => state.global.language);
  const t = translations[lang].searchPage;
  const isRtl = lang === 'ar';

  const [activeCategory, setActiveCategory] = useState<"Team" | "Services">("Services");
  const [query, setQuery] = useState("");

  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; 

  
  const filteredItems = t.items.filter(item => 
    activeCategory === "Services" ? item.category === "Services" : item.category === "Team"
  );

  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  };

  return (
    <div className={`min-h-screen flex flex-col font-sans text-[#3b2416] ${isRtl ? 'font-arabic' : ''}`}>
      
      <main className="flex-grow">
        
        {/*  HERO  */}
        <div className="relative h-[400px] w-full flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-black/50 z-0"
            style={{
              backgroundImage: "url('/images/city-search.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundBlendMode: "multiply"
            }}
          />

          <div className="relative z-10 w-full max-w-3xl px-6">
            <div className="relative w-full">
              <input 
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={translations[lang].header.searchPlaceholder}
                className={`w-full h-14 rounded-md border border-white/60 bg-transparent text-white placeholder:text-white/70 outline-none focus:border-white focus:bg-white/5 transition text-lg ${isRtl ? 'pr-14 pl-6' : 'pl-14 pr-6'}`}
              />
              <span className={`absolute top-1/2 -translate-y-1/2 text-white/80 text-xl ${isRtl ? 'right-5' : 'left-5'}`}>
                🔍
              </span>
            </div>
          </div>
        </div>

        {/* MAIN  */}
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-32 py-16">
          
          {/* Back Button */}
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium opacity-60 hover:opacity-100 mb-12 transition-opacity">
            <span className={`text-xl leading-none ${isRtl ? 'rotate-180' : ''}`}>‹</span> {t.back}
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-16">
            
            
            <aside className="h-fit">
              <div className="bg-[#f9f7f5] lg:bg-transparent p-6 lg:p-0 rounded-md">
                <ul className="space-y-6 text-lg font-bold text-[#3b2416]">
                  <li>
                    <button 
                      onClick={() => { setActiveCategory("Team"); setCurrentPage(1); }}
                      className={`transition-opacity ${activeCategory === "Team" ? "opacity-100" : "opacity-40 hover:opacity-80"}`}
                    >
                      {t.filters.team}
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => { setActiveCategory("Services"); setCurrentPage(1); }}
                      className={`transition-opacity ${activeCategory === "Services" ? "opacity-100" : "opacity-40 hover:opacity-80"}`}
                    >
                      {t.filters.services}
                    </button>
                  </li>
                </ul>
              </div>
            </aside>

            
            <div>
              <h2 className="text-xl font-medium text-gray-400 mb-8">
                {t.resultsFor} "{query || "..."}"
              </h2>

              <div className="space-y-12 min-h-[400px]">
               
                {currentItems.length > 0 ? (
                  currentItems.map((item) => (
                    <div key={item.id} className="border-b border-gray-200 pb-8 last:border-0 last:pb-0 animate-in fade-in slide-in-from-bottom-2">
                      <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-4 max-w-4xl text-sm lg:text-base">
                        {item.description}
                      </p>
                      <button className="text-[#3b2416] font-bold border-b-2 border-[#3b2416] hover:opacity-70 transition pb-0.5 text-sm">
                        {t.readMore}
                      </button>
                    </div>
                  ))
                ) : (
                  <div className="text-gray-400">No results found in this category.</div>
                )}
              </div>

              
              {totalPages > 1 && (
                <div className={`flex items-center gap-4 mt-20 text-xs font-medium text-gray-400 ${isRtl ? 'justify-start' : 'justify-end'}`}>
                  
                  
                  <button 
                    onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className={`hover:text-[#3b2416] transition disabled:opacity-30 ${isRtl ? 'rotate-180' : ''}`}
                  >
                    &lt;
                  </button>
                  
                  
                  <div className="flex gap-2">
                     {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                       <button 
                          key={number}
                          onClick={() => handlePageChange(number)}
                          className={`${currentPage === number ? "text-[#3b2416] border-b border-[#3b2416]" : "hover:text-[#3b2416]"}`}
                       >
                         {number}
                       </button>
                     ))}
                  </div>
                  
                  
                  <button 
                    onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className={`hover:text-[#3b2416] transition disabled:opacity-30 ${isRtl ? 'rotate-180' : ''}`}
                  >
                    &gt;
                  </button>
                </div>
              )}

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}