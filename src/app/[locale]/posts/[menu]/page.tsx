import { MenuNewsSkleton } from '@/shared/ui';
import { MenuNews } from '@/widgets/menu';
import { getMenuNews } from '@/widgets/menu/api/get-menu-news';
import React, { Suspense } from 'react';

interface Params {
  params: Promise<{ locale: string; menu: string }>;
  searchParams?: Promise<{
    search?: string;
    page?: string;
    postType?: string;
  }>;
}

async function Page({ params, searchParams }: Params) {
  const { menu } = await params;
  const page = await (await searchParams)?.page;
  const search = await (await searchParams)?.search;
  const postType = await (await searchParams)?.postType;

  const endpoint = menu === 'media' ? menu : `posts/${menu}`;

  return (
    <main className="w-full flex-1">
      <Suspense key={menu + String(page) + String(search)} fallback={<MenuNewsSkleton />}>
        <MenuNews
          fetchFn={() => getMenuNews(endpoint, page ?? '1', search ?? '', postType ?? '')}
        />
      </Suspense>
    </main>
  );
}

export default Page;
