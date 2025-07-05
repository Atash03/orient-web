import { PostDetailedLenta, PostMarquee } from '@/widgets/post-detailed';
import React from 'react';

interface Params {
  children: React.ReactNode;
}

export default async function Layout({ children }: Params) {
  return (
    <div className="flex flex-1 flex-col">
      <PostMarquee />
      <main className="container grid flex-1 gap-[24px] lg:grid-cols-3">
        {children}
        <PostDetailedLenta />
      </main>
    </div>
  );
}
