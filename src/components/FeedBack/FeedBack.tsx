"use client";

import React from 'react';
import Image from 'next/image'; // <-- Импорт Image
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { translations } from '@/lib/translations';

export default function FeedBack() {
  const lang = useSelector((state: RootState) => state.global.language);
  const t = translations[lang].feedback;
  const isRtl = lang === 'ar';

  return (
    <section className="w-full bg-[#3b2416] py-10 lg:py-24">
      
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-25">
        
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-x-12 gap-y-10 items-start">
          
          <div>
            <h2 className="text-3xl lg:text-5xl font-semibold mb-6 text-white leading-tight whitespace-pre-line">
              {t.title}
            </h2>

            <p className="text-white/70 max-w-sm text-lg font-light leading-relaxed">
              {t.subtitle}
            </p>
          </div>

          
          <div className="hidden lg:block"></div>

          {/* Photo */}
          <div className="shrink-0 pt-2">
             {/* Замена img на Image */}
             <div className="relative w-full max-w-xs lg:max-w-none lg:w-[30rem] lg:h-[30rem]">
                <Image
                  src="/images/person.png"
                  alt="Client"
                  width={480} // 30rem ~ 480px
                  height={480}
                  className={`object-cover bg-[#533625] shadow-xl rounded-sm ${isRtl ? 'scale-x-[-1]' : ''}`} 
                />
             </div>
          </div>

            {/* Quote and controls */}
          <div className="flex flex-col h-full justify-between lg:pl-10 pt-4">
            
            <div className="max-w-4xl">
              <p className="text-white/90 text-lg lg:text-3xl leading-snug font-light italic opacity-90">
                {t.quote}
              </p>
            </div>

            <div className="flex items-end justify-between w-full mt-10 lg:mt-0">
              
              {/* (CEO) */}
              <div className="pb-2"> 
                <p className="font-bold text-white text-xl lg:text-2xl">{t.clientName}</p>
                <p className="text-white/60 text-sm tracking-wide uppercase mt-1">{t.clientRole}</p>
              </div>

              {/* arrows */}
              <div className={`flex gap-4 ${isRtl ? 'flex-row-reverse' : ''}`}>
                <button className="w-16 h-16 rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-white/10 transition group">
                  <span className={`text-2xl pb-1 transition-transform ${isRtl ? 'group-hover:translate-x-0.5' : 'group-hover:-translate-x-0.5'}`}>
                    {isRtl ? '→' : '←'}
                  </span>
                </button>
                <button className="w-16 h-16 rounded-full bg-white text-[#3b2416] flex items-center justify-center hover:bg-gray-200 transition group">
                  <span className={`text-2xl pb-1 transition-transform ${isRtl ? 'group-hover:-translate-x-0.5' : 'group-hover:translate-x-0.5'}`}>
                    {isRtl ? '←' : '→'}
                  </span>
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}