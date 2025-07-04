import React from 'react';
import { getHomeTop } from '../api/get-home-top';
import Marquee from './marquee';
import FeaturedNews from './featured-news';
import LentaNews from './lenta-news';
import { getPosts } from '../api/get-posts';
import { HomePosts } from './posts';

const HomeTop = async () => {
  const homeTopData = await getHomeTop();
  const posts = await getPosts();

  // temporary solution, need to fix it later
  if (!homeTopData || !posts) {
    console.log('Home top data and posts is not available');
    return null;
  }

  return (
    <section>
      <Marquee texts={homeTopData.data.marquee} />
      <section className="container flex flex-col md:gap-[80px] xl:grid xl:grid-cols-3 xl:gap-[24px]">
        <FeaturedNews
          news={homeTopData.data.featured}
          className="col-span-2 lg:mt-[40px] xl:max-h-[528px]"
        />
        <HomePosts posts={posts.data.data} showNumber={3} />
        <LentaNews
          news={homeTopData.data.lenta}
          className="lg:mt-[40px] xl:h-full xl:max-h-[528px]"
        />
      </section>
    </section>
  );
};

export default HomeTop;
