import { OrientLogo } from '@/shared/assets/images'
import React from 'react'

function Loading() {
  return (
    <article className='flex-1 flex items-center justify-center'>
      <div className='animate-pulse'>
        <OrientLogo />
      </div>
    </article>
  )
}

export default Loading