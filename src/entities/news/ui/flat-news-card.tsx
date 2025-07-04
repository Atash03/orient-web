import React, { HTMLAttributes } from 'react';
import { NewsModel } from '../model';
import { cn, constructDate } from '@/shared/lib/utils';
import Link from 'next/link';

interface Props extends HTMLAttributes<HTMLAnchorElement> {
  item: NewsModel;
}

const FlatNewsCard: React.FC<Props> = ({ item, className, ...props }) => {
  const { time } = constructDate(item.published_at);

  return (
    <Link
      href={''}
      className={cn('text-text-3 text-on-surface flex w-full gap-[8px] text-balance', className)}
      {...props}>
      <span className="text-secondary font-[400]">{time}</span>
      <span>{item.title}</span>
    </Link>
  );
};

export default FlatNewsCard;
