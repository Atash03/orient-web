import { PostDetailed } from '@/widgets/post-detailed';
import { getPostInfo } from '@/widgets/post-detailed/api/get-post-info';
import { Metadata } from 'next';
import React from 'react';

interface Params {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const id = (await params).id;

  // fetch post information
  const post = await await getPostInfo(id);

  return {
    title: post?.data[0].powerseo_title,
    description: post?.data[0].powerseo_description,
    keywords: post?.data[0].powerseo_keywords,
  };
}

async function Page({ params }: Params) {
  const { id } = await params;

  return (
    <main className="mt-[32px] lg:col-span-2">
      <PostDetailed id={id} />
    </main>
  );
}

export default Page;
