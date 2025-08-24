import React from 'react';
import { MenuItem } from '../model/header-response';
import Link from 'next/link';
import { getLocale } from 'next-intl/server';
import LangDropdown from './lang-dropdown';

const Navbar = ({ data }: { data: MenuItem[] }) => {
  return (
    <nav className="hidden bg-[#1A211E] px-[24px] py-[4px] text-[#F0F2EF] lg:block">
      <div className="container flex items-center justify-between">
        <MenuItems data={data} />
        <LangDropdown color="#F0F2EF" />
      </div>
    </nav>
  );
};

export default Navbar;

const MenuItems = async ({ data }: { data: MenuItem[] }) => {
  const locale = await getLocale();

  return (
    <ul className="flex items-center gap-[23px] py-[12px]">
      {data.map((menu, i) => {
        const url = locale === 'ru' ? menu.url : menu.viewBag.locale[locale as 'en' | 'tm'].url;
        const customUrl = url
          ? url
          : menu.title === 'О нас'
            ? `/${locale}/new/o-nas`
            : menu.title === 'Контакты' && `/${locale}/contact`;

        return (
          <li key={i} className="relative">
            <Link href={customUrl ? customUrl : ''} className="text-[16px] font-semibold">
              {locale === 'ru' ? menu.title : menu.viewBag.locale[locale as 'en' | 'tm'].title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
