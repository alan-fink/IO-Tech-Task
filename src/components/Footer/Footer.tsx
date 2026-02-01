"use client";

import React from 'react';
import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { translations } from '@/lib/translations';

export default function Footer() {
  const lang = useSelector((state: RootState) => state.global.language);
  const t = translations[lang].footer;

  // --- ЛОГИКА FORMIK ---
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    // Правила валидации через Yup с переводами
    validationSchema: Yup.object({
      email: Yup.string()
        .email(t.validation.email)
        .required(t.validation.required),
    }),
    onSubmit: (values, { resetForm }) => {
      alert(`Success! Email sent to server: ${values.email}`);
      resetForm();
    },
  });

  return (
    <footer className="w-full bg-[#3b2416] text-white pt-16 pb-8 border-t border-white/10">
      
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-32">
        
        {/* --- ВЕРХНЯЯ ЧАСТЬ --- */}
        <div className="flex flex-col lg:flex-row items-center lg:justify-end gap-8 mb-12">
          
          {/* Блок подписки (FORM) */}
          <div className="w-full max-w-xs lg:max-w-[22rem]">
            <form 
              onSubmit={formik.handleSubmit}
              className={`bg-white p-1 rounded-md flex items-center transition-shadow ${
                 formik.touched.email && formik.errors.email ? "ring-2 ring-red-500" : ""
              }`}
            >
              <input 
                id="email"
                name="email"
                type="email" 
                placeholder={t.subscribePlaceholder}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="flex-1 bg-transparent text-[#3b2416] px-4 py-2 outline-none placeholder:text-gray-400 min-w-0"
              />
              <button 
                type="submit"
                className="bg-[#3b2416] text-white px-6 py-2 rounded-md font-medium text-sm hover:bg-[#533625] transition"
              >
                {t.subscribeBtn}
              </button>
            </form>

            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-400 text-xs mt-2 pl-1">
                • {formik.errors.email}
              </div>
            ) : null}
          </div>

          {/* Контакты и Иконки */}
          <div className="flex items-center gap-6">
            <span className="text-white/90 text-sm font-medium">{t.contacts}</span>
            
            <div className="flex gap-4">
              <a href="#" className="hover:opacity-70 transition">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
              <a href="#" className="hover:opacity-70 transition">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
                <a href="#" className="hover:opacity-70 transition">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm10.09-.92V7.6h-2.1v2.48h-2.5v2.1h2.5v2.48h2.1v-2.48h2.48v-2.1h-2.48z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <hr className="border-white/20 mb-8" />

        {/* --- НИЖНЯЯ ЧАСТЬ --- */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 text-sm text-white/80 font-light">
          
          <nav className="flex flex-wrap justify-center gap-6 lg:gap-10">
            <Link href="#" className="hover:text-white transition">{t.links.about}</Link>
            <Link href="#" className="hover:text-white transition">{t.links.strategy}</Link>
            <Link href="#" className="hover:text-white transition">{t.links.advantages}</Link>
            <Link href="#" className="hover:text-white transition">{t.links.social}</Link>
            <Link href="#" className="hover:text-white transition">{t.links.services}</Link>
          </nav>

          <div className="text-white/60">
            {t.rights}
          </div>

        </div>

      </div>
    </footer>
  );
}