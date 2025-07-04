import React from 'react';
import { Link } from '@/shared/lib/i18n/navigation';
import { NewsModel } from '@/entities/news';

interface Props {
  texts: NewsModel[];
}

const Marquee: React.FC<Props> = ({ texts }) => {
  return (
    <div className="bg-primary relative flex overflow-x-hidden text-white">
      <div className="animate-marquee flex gap-4 whitespace-nowrap py-2">
        {texts.map((item, i) => (
          <Link href={''} key={i} className="flex items-center gap-4">
            <div className="flex size-[24px] items-center justify-center">
              <div className="size-[8px] rounded-full bg-white" />
            </div>
            {item.title}
          </Link>
        ))}
      </div>

      <div className="animate-marquee2 absolute top-0 flex gap-4 whitespace-nowrap py-2">
        {texts.map((item, i) => (
          <Link href={''} key={i} className="flex items-center gap-4">
            <div className="flex size-[24px] items-center justify-center">
              <div className="size-[8px] rounded-full bg-white" />
            </div>
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
