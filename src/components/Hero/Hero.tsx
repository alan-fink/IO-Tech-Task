"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { translations } from "@/lib/translations";

type HeroProps = {
  servicesOpen: boolean;
};

export default function Hero({ servicesOpen }: HeroProps) {
  const lang = useSelector((state: RootState) => state.global.language);
  const t = translations[lang].hero;
  const isRtl = lang === 'ar';


  const slides = [
    {
      id: 1,
      type: "image",
      src: "/images/hero-bg.jpg",
      
      title: t.title, 
      desc: t.description 
    },
    {
      id: 2,
      type: "image",
      src: "/images/hero-bg.jpg", 
      poster: "/images/hero-bg.jpg",
      title: isRtl ? "استشارات فيديو حصرية" : "Exclusive Video Consultations",
      desc: isRtl ? "شاهد كيف نعمل بجد من أجلك" : "Watch how we work hard for you."
    },
  ];

  const [current, setCurrent] = useState(0);

  
  const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [current]);

  
  const activeSlide = slides[current];

  return (
    <section className="relative h-[850px] w-full overflow-hidden bg-[#1a0f0a]">
      
      
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-0" : "opacity-0 -z-10"
          }`}
        >
          {slide.type === 'video' ? (
            <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-90" poster={slide.poster}>
              <source src={slide.src} type="video/mp4" />
            </video>
          ) : (
            <Image src={slide.src} alt="Hero" fill priority={index === 0} className="object-cover" />
          )}
        </div>
      ))}

      
      {!servicesOpen && (
        <div className={`absolute inset-0 z-10 bg-gradient-to-r from-[#2a160c]/90 via-[#3b2416]/85 to-[#3b2416]/80 ${isRtl ? 'rotate-180' : ''}`} />
      )}

      
      <button onClick={prevSlide} className={`absolute top-1/2 -translate-y-1/2 z-30 text-white text-5xl opacity-70 hover:opacity-100 p-2 ${isRtl ? 'right-6' : 'left-6'}`}>
        {isRtl ? '›' : '‹'}
      </button>
      <button onClick={nextSlide} className={`absolute top-1/2 -translate-y-1/2 z-30 text-white text-5xl opacity-70 hover:opacity-100 p-2 ${isRtl ? 'left-6' : 'right-6'}`}>
        {isRtl ? '‹' : '›'}
      </button>

      {/* DOTS */}
      <div className={`absolute top-1/2 mt-20 flex flex-col gap-4 z-30 ${isRtl ? 'right-14' : 'left-14'}`}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-white scale-125" : "bg-white/40"}`} />
        ))}
      </div>

      
      <div className="relative z-20 h-full max-w-[1440px] mx-auto px-10 lg:px-32 flex items-center">
        <div className={`flex w-full items-center justify-between gap-10 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
          
          <div className={`max-w-xl ${isRtl ? 'text-right' : 'text-left'}`}>
            
            <h1 key={`t-${current}`} className="text-white text-5xl font-semibold leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700">
              {activeSlide.title} 
            </h1>
            <p key={`d-${current}`} className="text-white/70 mt-6 max-w-md text-lg animate-in fade-in slide-in-from-bottom-5 duration-700 delay-100">
              {activeSlide.desc} 
            </p>
            
            <Link 
              href={t.ctaLink || "#"}
              className="inline-block mt-8 px-10 py-3 bg-white text-[#3b2416] rounded-md font-bold hover:bg-gray-100 transition shadow-lg"
            >
              {t.readMore}
            </Link>
          </div>

          <div className="hidden lg:block shrink-0"> 
            <div className="bg-[#6b3f2a] p-4 shadow-2xl border border-white/10 relative">
              <Image src="/images/person.png" alt="Team member" width={380} height={380} className={`object-cover ${isRtl ? 'scale-x-[-1]' : ''}`} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}