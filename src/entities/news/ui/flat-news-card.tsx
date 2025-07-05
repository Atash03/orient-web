import React, { HTMLAttributes } from 'react';
import { NewsModel } from '../model';
import { cn, constructDate } from '@/shared/lib/utils';
import { Link } from '@/shared/lib/i18n/navigation';

interface Props extends HTMLAttributes<HTMLAnchorElement> {
  item: NewsModel;
}

const FlatNewsCard: React.FC<Props> = ({ item, className, ...props }) => {
  const { time } = constructDate(item.published_at);

  return (
    <Link
      href={`/post/${item.id}`}
      className={cn('text-text-3 text-on-surface flex w-full gap-[8px] text-balance', className)}
      {...props}>
      <span className="text-secondary-800 font-[400]">{time}</span>
      <span>{item.title}</span>
    </Link>
  );
};

export default FlatNewsCard;
