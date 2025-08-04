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
    openGraph: {
      siteName: 'orient.tm',
      title: post?.data[0].powerseo_title,
      description: post?.data[0].powerseo_description,
      url: post?.data[0].url,
      images: {
        url: post?.data[0].main_image ?? '',
      },
      type: 'article',
      publishedTime: post?.data[0].published_at,
      authors: post?.data[0].author,
      section: post?.data[0].categories[0].name,
    },
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
