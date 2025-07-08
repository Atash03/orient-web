import React from 'react';
import { PostCardSkleton } from '../post-card';
import { cn } from '@/shared/lib/utils';

function MenuNewsSkleton({ className }: { className?: string }) {
  const skletonData = Array.from({ length: 5 }).fill(null);

  return (
    <section className={cn('flex flex-col items-center gap-[64px]', className)}>
      <div className="mt-[40px] flex w-full flex-col gap-[24px]">
        {skletonData.map((item, i) => (
          <div key={i} className="flex flex-col gap-[24px]">
            <PostCardSkleton className="lg:grid-cols-4" />
            <hr className="bg-on-surface h-[1px]" />
          </div>
        ))}
      </div>
    </section>
  );
}

export { MenuNewsSkleton };
