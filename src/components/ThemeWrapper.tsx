'use client';

import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { useEffect } from 'react';

export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const lang = useSelector((state: RootState) => state.global.language);

  useEffect(() => {
    
    const dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
  }, [lang]);

  return <div className={lang === 'ar' ? 'font-arabic' : ''}>{children}</div>;
}