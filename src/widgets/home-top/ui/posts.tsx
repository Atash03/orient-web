import { PostModel, PostsCard } from '@/entities/posts';
import { cn } from '@/shared/lib/utils';
import { Heading } from '@/shared/ui';
import { getTranslations } from 'next-intl/server';
import React, { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  posts: PostModel[];
  showNumber: number;
  isContinue?: boolean;
}

export async function HomePosts({ posts, showNumber, isContinue = false, className }: Props) {
  const t = await getTranslations('lentaNews');

  return (
    <section className={cn('md:hidden', className)}>
      {!isContinue && (
        <Heading title={t('title')} text="Lenta" className="text-heading-5 py-[32px] md:py-0" />
      )}
      <article className="flex flex-col gap-[24px]">
        {posts.map((item, i) => i < showNumber && <PostsCard key={item.id} item={item} />)}
      </article>
    </section>
  );
}
