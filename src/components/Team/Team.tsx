"use client";

import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { translations } from "@/lib/translations";

export default function Team() {
  const lang = useSelector((state: RootState) => state.global.language);
  const t = translations[lang].team;
  const isRtl = lang === 'ar';

  
  const members = [
    {
      id: 1,
      name: isRtl ? "محمد سيف" : "Mohammed Saif",
      role: isRtl ? "محامي أول" : "Senior Lawyer",
      image: "/images/person.png"
    },
    {
      id: 2,
      name: isRtl ? "سارة سميث" : "Sarah Smith",
      role: isRtl ? "مستشار قانوني" : "Legal Consultant",
      image: "/images/person.png"
    },
    {
      id: 3,
      name: isRtl ? "عبدالله علي" : "Abdullah Ali",
      role: isRtl ? "شريك" : "Associate Partner",
      image: "/images/person.png"
    }
  ];

  return (
     <section
      id="our-team"
      className="py-32 bg-white"
    >
      
      <div className="container mx-auto px-6">

        {/* Title */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-semibold text-[#3b2416]">
            {t.title}
          </h2>
          <p className="mt-4 text-gray-500 text-sm">
            {t.subtitle}
          </p>
        </div>

        {/* Slider */}
        <div className="relative mt-16 flex items-center justify-center">

          {/* Left arrow */}
          <button className={`absolute text-3xl text-[#3b2416]/60 hover:text-[#3b2416] ${isRtl ? 'right-0 rotate-180' : 'left-0'}`}>
            ‹
          </button>

          {/* Cards  */}
          <div className="flex gap-12 flex-wrap justify-center lg:flex-nowrap">
            
            {members.map((member) => (
              <div key={member.id} className="text-center w-[260px]">
                
                
                <div className="relative w-full h-[200px] bg-[#6b3f2a] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill 
                    sizes="(max-width: 768px) 100vw, 260px"
                    className={`object-cover ${isRtl ? 'scale-x-[-1]' : ''}`} 
                  />
                </div>

                {/* Name */}
                <h3 className="mt-6 font-medium text-[#3b2416] text-xl">
                  {member.name}
                </h3>

                {/* Position */}
                <p className="text-xs tracking-widest text-gray-400 mt-2 uppercase font-medium">
                  {member.role}
                </p>

                {/* Icons (SVG) */}
                <div className="flex justify-center gap-5 mt-5 text-[#3b2416]">
                  
                  {/* WhatsApp */}
                  <a href="#" className="hover:opacity-70 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.69 9-8.25s-4.03-8.25-9-8.25S3 7.44 3 12c0 1.385.386 2.735 1.066 3.901-.06 1.155-.544 3.018-1.042 3.973 1.139-.126 3.045-.492 4.098-.824a9.04 9.04 0 004.878 1.15z" />
                    </svg>
                  </a>

                  {/* Phone */}
                  <a href="#" className="hover:opacity-70 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </a>

                  {/* Em */}
                  <a href="#" className="hover:opacity-70 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </a>

                </div>
              </div>
            ))}
          </div>

          {/* Right */}
          <button className={`absolute text-3xl text-[#3b2416]/60 hover:text-[#3b2416] ${isRtl ? 'left-0 rotate-180' : 'right-0'}`}>
            ›
          </button>
        </div>

      </div>
    </section>
  );
}