'use client';
import React, { useMemo } from 'react';
import { MenuItem } from '../model/header-response';
import { useLocale, useTranslations } from 'next-intl';
import { cn } from '@/shared/lib/utils';
import { usePathname, useRouter } from 'next/navigation';

function MenuItemsLists({ items, menu }: { items: MenuItem[]; menu: string }) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations('navigation');

  const isAll = pathname.split('/')[pathname.split('/').length - 1] === menu;

  const itemsNavbar = useMemo(() => {
    const isActive = (path: string) => {
      const active = pathname === path;

      return active ? 'bg-[#1A211E] text-white' : 'bg-transparent text-on-surface';
    };

    const route = (menu: MenuItem) => {
      const url = locale === 'ru' ? menu.url : menu.viewBag.locale[locale as 'en' | 'tm'].url;

      if (url) {
        router.push(url);
      }
    };

    return items.map((item) => (
      <span
        key={item.url}
        onClick={() => route(item)}
        className={cn(
          'shrink-0 cursor-pointer rounded-[24px] px-4 py-[8px] transition-all duration-300',
          isActive(locale === 'ru' ? item.url : item.viewBag.locale[locale as 'en' | 'tm'].url),
        )}>
        {locale === 'ru' ? item.title : item.viewBag.locale[locale as 'en' | 'tm'].title}
      </span>
    ));
  }, [items, locale, pathname, router]);

  return (
    <nav className="hide-scrollbar flex w-full items-center gap-[4px] self-start overflow-x-scroll py-[8px]">
      <span
        onClick={() => router.push(`/${locale}/posts/${menu}`)}
        className={cn(
          'rounded-[24px] px-4 py-[8px] transition-all duration-300',
          isAll ? 'bg-[#1A211E] text-white' : 'text-on-surface cursor-pointer bg-transparent',
        )}>
        {t('all')}
      </span>
      {itemsNavbar}
    </nav>
  );
}

export default MenuItemsLists;
