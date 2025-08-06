import React, { Suspense } from 'react';
import NewsSectionLayout from './news-section-layout';
import { getHomeMid } from '../api/get-home-mid';
import { getTranslations } from 'next-intl/server';
import EditorsChoice from './editors-choice';
import { getPosts } from '../api/get-posts';
import { HomePosts } from './posts';
import { Advertisement } from '@/entities/advertisement';

export const HomeMid = async () => {
  const [homeMidData, posts] = await Promise.all([getHomeMid(), getPosts()]);
  const headings = await getTranslations('headings');

  // temporary solution, need to fix it later
  if (!homeMidData || !posts) {
    console.log('Home mid data is not available');
    return null;
  }

  return (
    <section>
      <section className='container hidden md:flex lg:gap-[24px] overflow-auto'>
        <div className="flex flex-col gap-[80px] lg:grid lg:grid-cols-2 lg:gap-[24px]">
          <NewsSectionLayout
            data={homeMidData.data.world}
            title={headings('inTheWorld')}
            href="/posts/news?postType=world"
          />
          <NewsSectionLayout data={homeMidData.data.popular} title={headings('mostRead')} />
        </div>
        <Suspense>
          <Advertisement addsIndex={3} height={478} width={1200} className='hidden lg:block sticky stickyPosition top-[15px] h-fit' />
        </Suspense>
      </section>
      <div className="lg:text-on-surface bg-[#00822C] text-white lg:mt-[70px] lg:bg-transparent">
        <EditorsChoice data={homeMidData.data.popular} />
      </div>
      <HomePosts
        posts={posts.data.data}
        per_page={posts.data.per_page}
        className="py-[32px]! container"
      />
    </section>
  );
};
