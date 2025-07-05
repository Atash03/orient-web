import React from 'react';
import { getHomeTop } from '../api/get-home-top';
import { LentaNews } from '@/shared/ui';

export async function PostDetailedLenta() {
  const homeTop = await getHomeTop();

  // temporary solution, need to fix it later
  if (!homeTop) {
    console.log('PostDetailedLenta is not available');
    return null;
  }

  return <LentaNews news={homeTop.data.lenta} className="mt-[32px] flex h-fit flex-col" />;
}
