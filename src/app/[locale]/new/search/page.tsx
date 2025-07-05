import { MenuNews, MenuSearchHeading } from '@/widgets/menu';
import { SearchBar } from '@/features/search-bar';
import React from 'react';
import { getSearchNews } from '@/widgets/menu/api/get-search-news';

interface Params {
  searchParams?: Promise<{
    search?: string;
    page?: string;
  }>;
}

async function Page({ searchParams }: Params) {
  const page = await (await searchParams)?.page;
  const search = await (await searchParams)?.search;

  return (
    <main className="container flex flex-1 flex-col items-center lg:gap-[40px]">
      <div className="flex w-full flex-col gap-[40px] py-[40px] lg:pb-0">
        <SearchBar label="Поиск внутри категории:" />
        <hr className="h-[1px] w-full bg-[#D0DDD7]" />
      </div>
      {search && <MenuSearchHeading search={search} />}
      <main className="w-full flex-1">
        <MenuNews fetchFn={() => getSearchNews(page ?? '1', search ?? '')} />
      </main>
    </main>
  );
}

export default Page;
