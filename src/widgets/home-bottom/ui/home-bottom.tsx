import React, { Suspense } from 'react';
import { getHomeBottom } from '../api/get-home-bottom';
import SectionsList from './sections-list';
import { getPosts } from '../api/get-posts';
import { PartnersMarquee } from './partners-marquee';

export const HomeBottom = async () => {
  const [homeBottom, posts] = await Promise.all([getHomeBottom(), getPosts()]);

  // temporary solution, need to fix it later
  if (!homeBottom || !posts) {
    console.log('Home footer data is not available');
    return null;
  }

  return (
    <section className="hidden flex-col gap-[80px] md:flex">
      <SectionsList
        photos={homeBottom.data.photo}
        videos={homeBottom.data.video}
        posts={posts.data.data}
      />
      <Suspense>
        <PartnersMarquee />
      </Suspense>
    </section>
  );
};
