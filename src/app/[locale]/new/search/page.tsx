import { MenuNews, MenuSearchHeading } from '@/widgets/menu';
import { SearchBar } from '@/features/search-bar';
import React, { Suspense } from 'react';
import { getSearchNews } from '@/widgets/menu/api/get-search-news';
import { MenuNewsSkleton } from '@/shared/ui';
import { getTranslations } from 'next-intl/server';

interface Params {
  searchParams?: Promise<{
    search?: string;
    page?: string;
  }>;
}

async function Page({ searchParams }: Params) {
  const page = await (await searchParams)?.page;
  const search = await (await searchParams)?.search;
  const t = await getTranslations('search');

  return (
    <main className="container flex flex-1 flex-col items-center lg:gap-[40px]">
      <div className="flex w-full flex-col gap-[40px] py-[40px] lg:pb-0">
        <SearchBar label={t('searchInCategory')} />
        <hr className="h-[1px] w-full bg-[#D0DDD7]" />
      </div>
      {search && <MenuSearchHeading search={search} />}
      <main className="w-full flex-1">
        <Suspense key={String(page) + String(search)} fallback={<MenuNewsSkleton />}>
          <MenuNews fetchFn={() => getSearchNews(page ?? '1', search ?? '')} />
        </Suspense>
      </main>
    </main>
  );
}

export default Page;
