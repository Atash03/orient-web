import { SearchBar } from '@/features/search-bar';
import { MenuItemsHeader } from '@/widgets/menu';
import { getTranslations } from 'next-intl/server';
import React from 'react';

interface Params {
  params: Promise<{ locale: string; menu: string; item: string }>;
  children: React.ReactNode;
}

export default async function Layout({ params, children }: Params) {
  const { menu } = await params;
  const t = await getTranslations('search');

  return (
    <main className="container flex flex-1 flex-col items-center">
      <MenuItemsHeader menu={menu} />
      <div className="flex w-full flex-col gap-[40px] pt-[40px]">
        <SearchBar label={t('searchInCategory')} />
        <hr className="h-[1px] w-full bg-[#D0DDD7]" />
      </div>
      {children}
    </main>
  );
}
