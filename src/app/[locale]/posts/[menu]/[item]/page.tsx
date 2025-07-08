import { MenuNewsSkleton } from '@/shared/ui';
import { MenuNews } from '@/widgets/menu';
import { getMenuNews } from '@/widgets/menu/api/get-menu-news';
import React, { Suspense } from 'react';

interface Params {
  params: Promise<{ locale: string; menu: string; item: string }>;
  searchParams?: Promise<{
    search?: string;
    page?: string;
  }>;
}

async function Page({ params, searchParams }: Params) {
  const { menu, item } = await params;
  const page = await (await searchParams)?.page;
  const search = await (await searchParams)?.search;

  const endpoint = menu === 'media' ? `${menu}/${item}` : `posts/${menu}/${item}`;

  return (
    <main className="w-full flex-1">
      <Suspense key={item + String(page) + String(search)} fallback={<MenuNewsSkleton />}>
        <MenuNews fetchFn={() => getMenuNews(endpoint, page ?? '1', search ?? '')} />
      </Suspense>
    </main>
  );
}

export default Page;
