import React, { Suspense } from 'react';
import { getHomeTop } from '../api/get-home-top';
import FeaturedNews from './featured-news';

import { getPosts } from '../api/get-posts';
import { HomePosts } from './posts';
import { AdvertisemenSkleton, LentaNews, Marquee } from '@/shared/ui';
import { Advertisement } from '@/entities/advertisement';

const HomeTop = async () => {
  const [homeTopData, posts] = await Promise.all([getHomeTop(), getPosts()]);

  // temporary solution, need to fix it later
  if (!homeTopData || !posts) {
    console.log('Home top data and posts is not available');
    return null;
  }

  return (
    <section>
      <Marquee texts={homeTopData.data.marquee} />
      <section className="container flex flex-col md:gap-[80px] lg:grid lg:grid-cols-3 lg:gap-[24px]">
        <FeaturedNews
          news={homeTopData.data.featured}
          className="col-span-2 flex flex-col gap-2 lg:mt-[40px] xl:gap-[54px]"
        />
        <LentaNews
          news={homeTopData.data.lenta}
          className="hidden md:flex md:flex-col lg:mt-[40px] lg:h-full lg:max-h-[528px] xl:max-h-[580px]"
        />
        <Suspense fallback={<AdvertisemenSkleton />}>
          <Advertisement addsIndex={2} height={160} className="lg:col-span-3 xl:hidden" />
        </Suspense>
        <HomePosts posts={posts.data.data} showNumber={3} />
      </section>
    </section>
  );
};

export default HomeTop;
