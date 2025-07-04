import React from 'react';
import { getMenuNews } from '../api/get-menu-news';
import { PostsCard } from '@/entities/posts';
import { MenuNewsPagination } from './menu-news-pagination';

export async function MenuNews({
  menu,
  page,
  search,
}: {
  menu: string;
  page: string;
  search: string;
}) {
  const news = await getMenuNews(menu, page, search);

  // temporary solution, need to fix it later
  if (!news) {
    console.log('MenuNews data is not available');
    return null;
  }

  const data = news.data.data;

  return (
    <section className="mt-[40px] flex flex-col items-center gap-[64px]">
      <div className="flex flex-col gap-[24px]">
        {data.map((item) => (
          <div key={item.id} className="flex flex-col gap-[24px]">
            <PostsCard
              item={item}
              categories={item.categories}
              summary={item.summary}
              className="lg:grid-cols-4"
            />
            {item.id !== data[data.length - 1].id && <hr className="bg-on-surface h-[1px]" />}
          </div>
        ))}
      </div>
      <MenuNewsPagination total_page={news.data.last_page} />
    </section>
  );
}
