import { PostDetailed } from '@/widgets/post-detailed';
import React from 'react';

interface Params {
  params: Promise<{ id: string }>;
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
