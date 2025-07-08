import React from 'react';
import { PostModel, PostsCard } from '@/entities/posts';
import { MenuNewsPagination } from './menu-news-pagination';
import { GetDataDTO } from '@/shared/types';
import { getTranslations } from 'next-intl/server';

export async function MenuNews({
  fetchFn,
}: {
  fetchFn: () => Promise<GetDataDTO<PostModel> | undefined>;
}) {
  const news = await fetchFn();
  const t = await getTranslations('search');

  // temporary solution, need to fix it later
  if (!news) {
    console.log('MenuNews data is not available');
    return null;
  }

  const data = news.data && news.data.data;

  return (
    <section className="flex flex-col items-center gap-[64px]">
      <div className="mt-[40px] flex w-full flex-col gap-[24px]">
        {data &&
          data.map((item) => item.main_image && (
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
      {data && <MenuNewsPagination total_page={news.data.last_page} />}
      {!data && <div>{t('error')}</div>}
    </section>
  );
}
