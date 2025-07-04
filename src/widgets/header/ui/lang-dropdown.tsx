'use client';
import { usePathname, useRouter } from '@/shared/lib/i18n/navigation';
import { Locale, useLocale } from 'next-intl';
import React from 'react';
import { russia, turkmenistan, usa } from '../assets';
import Image from 'next/image';
import { cn } from '@/shared/lib/utils';

const langs = [
  {
    title: 'Русский',
    locale: 'ru',
    flag: russia,
  },
  {
    title: 'English',
    locale: 'en',
    flag: usa,
  },
  {
    title: 'Türkmen',
    locale: 'tm',
    flag: turkmenistan,
  },
];

const LangDropdown = ({ color = '#141F18' }: { color: '#141F18' | '#F0F2EF' }) => {
  const locale = useLocale();
  const router = useRouter();
  const pathName = usePathname();
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const changeLanguage = (locale: Locale) => {
    // Get current search params from the browser
    const search = typeof window !== 'undefined' ? window.location.search : '';
    // Replace the path, keeping the search params
    router.replace(pathName + search, { locale });
    setIsOpen(!isOpen);
  };

  const currentLanguage = langs.find((item) => item.locale === locale);

  return (
    <div className={cn(`z-100 relative text-[${color}]`)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-[8px] px-[12px] py-4 lg:cursor-pointer">
        <Image src={currentLanguage?.flag ? currentLanguage.flag : ''} alt={locale} />
        <span>{currentLanguage?.title}</span>
        <div
          className={cn(
            'flex size-[20px] items-center justify-center transition-all duration-300',
            !isOpen && 'rotate-180',
          )}>
          <svg
            width="8"
            height="4"
            viewBox="0 0 8 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M3.99984 0.333313L7.33317 3.66665H0.666504L3.99984 0.333313Z" fill={color} />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="bg-surface-700 absolute top-[55px] flex w-full max-w-[200px] flex-col rounded-[2px] py-[8px] shadow-2xl">
          {langs.map(
            (lang) =>
              lang.locale !== locale && (
                <button
                  type="button"
                  onClick={() => changeLanguage(lang.locale)}
                  key={lang.locale}
                  className="lg:hover:bg-surface-600 flex items-center gap-[8px] bg-transparent px-[12px] py-4 transition-all duration-300 focus:outline-none active:outline-none lg:cursor-pointer">
                  <Image src={lang.flag} alt={lang.title} />
                  <span className={cn(color === '#141F18' ? 'text-[#F0F2EF]' : 'text-[#141F18]')}>
                    {lang.title}
                  </span>
                </button>
              ),
          )}
        </div>
      )}
    </div>
  );
};

export default LangDropdown;
