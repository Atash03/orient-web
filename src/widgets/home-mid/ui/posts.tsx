import { PostModel } from '@/entities/posts';
import { cn } from '@/shared/lib/utils';
import React, { HTMLAttributes } from 'react';
import PostsList from './posts-list';

interface Props extends HTMLAttributes<HTMLDivElement> {
  posts: PostModel[];
  per_page: number;
}

export async function HomePosts({ posts, per_page, className }: Props) {
  return (
    <section className={cn('md:hidden', className)}>
      <PostsList initialData={posts} per_page={per_page} />
    </section>
  );
}
