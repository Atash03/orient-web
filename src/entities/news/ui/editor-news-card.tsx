import React, { HTMLAttributes } from 'react';
import { NewsModelMid } from '../model';
import { cn } from '@/shared/lib/utils';
import Image from 'next/image';
import { PostModel } from '@/entities/posts';
import { Link } from '@/shared/lib/i18n/navigation';

interface Props extends HTMLAttributes<HTMLAnchorElement> {
  item: NewsModelMid | PostModel;
}

const EditorNewsCard: React.FC<Props> = ({ item, className }) => {
  return (
    <Link
      href={`/post/${item.id}/${item.slug}`}
      className={cn(
        'bg-surface-600 border-surface-700 text-text-3 flex h-full min-h-[312px] w-full max-w-[320px] cursor-pointer flex-col overflow-hidden rounded-[4px] border md:max-w-full',
        className,
      )}>
      <div className="relative h-[57%] w-full">
        <Image src={item.main_image} alt={item.slug} fill className="object-cover" />
      </div>
      <p className="text-on-surface text-balance p-4">{item.title}</p>
    </Link>
  );
};

export default EditorNewsCard;
