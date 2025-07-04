import React from 'react';
import NewsSectionLayout from './news-section-layout';
import { getHomeMid } from '../api/get-home-mid';
import { getTranslations } from 'next-intl/server';
import EditorsChoice from './editors-choice';
import { getPosts } from '../api/get-posts';
import { HomePosts } from './posts';

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
      <div className="container hidden md:flex md:flex-col md:gap-[80px] lg:grid lg:grid-cols-2 lg:gap-[24px]">
        <NewsSectionLayout data={homeMidData.data.world} title={headings('inTheWorld')} href="" />
        <NewsSectionLayout data={homeMidData.data.popular} title={headings('mostRead')} href="" />
      </div>
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
