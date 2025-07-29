import { OrientLogo } from '@/shared/assets/images';
import React from 'react';

function Loading() {
  return (
    <article className="flex flex-1 items-center justify-center">
      <div className="animate-pulse">
        <OrientLogo />
      </div>
    </article>
  );
}

export default Loading;
