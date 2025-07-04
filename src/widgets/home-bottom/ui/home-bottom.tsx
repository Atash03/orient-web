import React from 'react';
import { getHomeBottom } from '../api/get-home-bottom';
import SectionsList from './sections-list';
import { getPosts } from '../api/get-posts';

export const HomeBottom = async () => {
  const [homeBottom, posts] = await Promise.all([getHomeBottom(), getPosts()]);

  // temporary solution, need to fix it later
  if (!homeBottom || !posts) {
    console.log('Home footer data is not available');
    return null;
  }

  return (
    <section className="hidden md:block">
      <SectionsList
        photos={homeBottom.data.photo}
        videos={homeBottom.data.video}
        posts={posts.data.data}
      />
    </section>
  );
};
