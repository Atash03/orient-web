import { Marquee } from '@/shared/ui';
import React from 'react';
import { getHomeTop } from '../api/get-home-top';

export async function PostMarquee() {
  const homeTop = await getHomeTop();

  // temporary solution, need to fix it later
  if (!homeTop) {
    console.log('PostMarquee is not available');
    return null;
  }

  return <Marquee texts={homeTop.data.marquee} />;
}
