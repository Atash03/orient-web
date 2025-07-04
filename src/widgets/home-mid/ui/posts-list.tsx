'use client';
import { PostModel, PostsCard } from '@/entities/posts';
import { ScrollPagination } from '@/features/scroll-pagination';
import { useLocale } from 'next-intl';
import React from 'react';

interface Props {
  initialData: PostModel[];
  per_page: number;
}

function PostsList({ initialData, per_page }: Props) {
  const locale = useLocale();

  return (
    <ScrollPagination<PostModel>
      endpoint={`/${locale}/api/posts`}
      initialData={initialData}
      renderItem={(post, index) => index > 2 && <PostsCard key={post.id} item={post} />}
      threshold={400}
      per_page={per_page}
      className="flex flex-col gap-[24px]"
    />
  );
}

export default PostsList;
