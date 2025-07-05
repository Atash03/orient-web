import React from 'react';
import { getPostInfo } from '../api/get-post-info';
import PostDetailedHeader from './post-detailed-header';
import { notFound } from 'next/navigation';

interface Props {
  id: string;
}

export async function PostDetailed({ id }: Props) {
  const postInfo = await getPostInfo(id);

  // temporary solution, need to fix it later
  if (!postInfo) {
    console.log('PostDetailed data is not available');
    notFound();
  }

  return (
    <section className="flex flex-1 flex-col gap-[32px]">
      <PostDetailedHeader post={postInfo.data[0]} />
      <article
        dangerouslySetInnerHTML={{ __html: postInfo.data[0].content_html }}
        className="space-y-4"
      />
    </section>
  );
}
