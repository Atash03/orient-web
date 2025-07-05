import React, { HTMLAttributes } from 'react';
import { NewsModel } from '../model';
import { Link } from '@/shared/lib/i18n/navigation';
import { cn } from '@/shared/lib/utils';
import Image from 'next/image';

interface Props extends HTMLAttributes<HTMLAnchorElement> {
  item: NewsModel;
}

const BannerNewsItem: React.FC<Props> = ({ item, className, ...props }) => {
  return (
    <Link
      href={`/post/${item.id}`}
      className={cn('relative size-full overflow-hidden rounded-[4px] text-[#F0F2EF]', className)}
      {...props}>
      <Image src={item.main_image} alt={item.title} fill className="object-cover" />
      <span className="text-text-3 absolute bottom-[8px] left-[8px] right-[8px] z-20">
        {item.title}
      </span>
      <div className="absolute inset-0 bg-gradient-to-t from-[#353C38] to-transparent" />
    </Link>
  );
};

export default BannerNewsItem;
