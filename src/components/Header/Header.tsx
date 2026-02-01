"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { setLanguage, setSearchQuery } from "@/lib/globalSlice";
import ServicesDropdown from "./ServicesDropdown";
import { translations } from "@/lib/translations";

type HeaderProps = {
  openServices: boolean;
  setOpenServices: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Header({
  openServices,
  setOpenServices,
}: HeaderProps) {
  const router = useRouter();
  const dispatch = useDispatch();
  
  const currentLang = useSelector((state: RootState) => state.global.language);
  const t = translations[currentLang].header;

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [localSearch, setLocalSearch] = useState("");

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(currentScrollY);
      }
    };
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (localSearch.trim()) {
      dispatch(setSearchQuery(localSearch));
      router.push("/search");
      setIsSearchOpen(false);
      setLocalSearch("");
    }
  };

  const toggleLanguage = () => {
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    dispatch(setLanguage(newLang));
  };

  const showHeader = isVisible || openServices;

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        transition-transform duration-300 ease-in-out
        ${showHeader ? "translate-y-0" : "-translate-y-full"}
        ${openServices || isSearchOpen ? "bg-[#3b2416]" : "bg-transparent"}
      `}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-24 text-white">
          
          <div className="font-semibold text-lg cursor-pointer" onClick={() => router.push('/')}>
            IO TECH
          </div>

          {!isSearchOpen ? (
            <>
              <nav className="hidden md:flex items-center gap-10 text-sm">
                <a className="opacity-80 hover:opacity-100 cursor-pointer">{t.about}</a>
                <button
                  onClick={() => setOpenServices((prev) => !prev)}
                  className="flex items-center gap-1 opacity-80 hover:opacity-100"
                >
                  {t.services} <span className="text-xs">▾</span>
                </button>
                <button
                  onClick={() => {
                    setOpenServices(false);
                    const section = document.getElementById("our-team");
                    section?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="opacity-80 hover:opacity-100"
                >
                  {t.team}
                </button>
                <a className="opacity-80 hover:opacity-100 cursor-pointer">{t.blogs}</a>
                <a className="opacity-80 hover:opacity-100 cursor-pointer">{t.contact}</a>
              </nav>

              <div className="flex items-center gap-6">
                
                
                <button 
                  onClick={() => setIsSearchOpen(true)} 
                  className="opacity-80 hover:opacity-100 transition-transform hover:scale-110"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="w-5 h-5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </button>

                <button 
                  onClick={toggleLanguage}
                  className="cursor-pointer opacity-80 hover:opacity-100 font-medium w-8"
                >
                  {currentLang === 'en' ? 'Ar' : 'En'}
                </button>

                <button className="px-5 py-2 border border-white/60 rounded-md text-sm hover:bg-white hover:text-[#3b2416] transition hidden sm:block">
                  {t.book}
                </button>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-end animate-in fade-in zoom-in duration-200">
              <form onSubmit={handleSearchSubmit} className="relative w-full max-w-xl flex items-center gap-4">
                <input
                  type="text"
                  autoFocus
                  placeholder={t.searchPlaceholder}
                  value={localSearch}
                  onChange={(e) => setLocalSearch(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-full px-6 py-2 text-white outline-none placeholder:text-white/50 focus:bg-white/20 transition"
                />
                <button 
                  type="button"
                  onClick={() => setIsSearchOpen(false)}
                  className="text-2xl text-white/70 hover:text-white transition"
                >
                  ✕
                </button>
              </form>
            </div>
          )}

        </div>
      </div>

      {openServices && !isSearchOpen && <ServicesDropdown />}
    </header>
  );
}