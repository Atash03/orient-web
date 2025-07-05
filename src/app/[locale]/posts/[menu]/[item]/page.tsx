import { MenuNews } from '@/widgets/menu';
import { getMenuNews } from '@/widgets/menu/api/get-menu-news';
import React from 'react';

interface Params {
  params: Promise<{ locale: string; menu: string }>;
  searchParams?: Promise<{
    search?: string;
    page?: string;
  }>;
}

async function Page({ params, searchParams }: Params) {
  const { menu } = await params;
  const page = await (await searchParams)?.page;
  const search = await (await searchParams)?.search;

  return (
    <main className="flex-1">
      <MenuNews fetchFn={() => getMenuNews(menu, page ?? '1', search ?? '')} />
    </main>
  );
}

export default Page;
