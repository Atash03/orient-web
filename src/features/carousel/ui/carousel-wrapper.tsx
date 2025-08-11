'use client';
import { Carousel, CarouselApi, CarouselContent } from '@/shared/components/ui/carousel';
import { cn } from '@/shared/lib/utils';
import { Heading } from '@/shared/ui';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React, { useEffect } from 'react';

interface Props<T> extends React.HTMLAttributes<HTMLElement> {
  data: T[];
  headingTitle: string;
  href: string;
  renderItem: (item: T, index: number) => React.ReactNode;
  className?: string;
  bgGreen?: boolean;
}

export function CarouselWrapper<T>({
  data,
  headingTitle,
  href,
  renderItem,
  bgGreen = false,
  className,
}: Props<T>) {
  const headings = useTranslations('headings');
  const buttons = useTranslations('buttons');
  const [index, setIndex] = React.useState<number>(0);
  const [api, setApi] = React.useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on('settle', () => {
      setIndex(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    data.length > 0 && (
      <article className={cn('container', className)}>
        <div className="space-y-[22px] py-[32px]">
          <div className="flex items-center justify-between">
            <Heading text="" title={headings(headingTitle)} className="text-heading-5" />
            <Link href={href} className="rounded-[4px] border border-[#A0B3A7] px-[24px] py-[12px]">
              {buttons('showMore')}
            </Link>
          </div>
          <Carousel
            setApi={setApi}
            opts={{
              align: 'start',
            }}
            className="lg:hidden">
            <CarouselContent>{data.map((item, index) => renderItem(item, index))}</CarouselContent>
          </Carousel>
          {/* indicators */}
          <div className="flex justify-center gap-4 lg:hidden">
            {data.map((item, i) => (
              <button
                key={i}
                className={cn(
                  'size-[8px] rounded-full transition-all duration-300',
                  index === i
                    ? bgGreen
                      ? 'bg-white'
                      : 'bg-on-surface'
                    : bgGreen
                      ? 'bg-[#CCE6D5]'
                      : 'bg-[#4A5A4F]',
                )}
              />
            ))}
          </div>
        </div>
      </article>
    )
  );
}
