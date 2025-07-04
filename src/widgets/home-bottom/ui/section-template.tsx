'use client';
import { CarouselWrapper } from '@/features/carousel';
import { useIsDesktop } from '@/shared/lib/hooks';
import { Link } from '@/shared/lib/i18n/navigation';
import { Heading } from '@/shared/ui';
import { useTranslations } from 'next-intl';
import React from 'react';

interface Props<T> {
  data: T[];
  href: string;
  headingTitle: string;
  renderItem: (item: T, index: number) => React.ReactNode;
}

function SectionTemplate<T>({ data, href, headingTitle, renderItem }: Props<T>) {
  const headings = useTranslations('headings');
  const buttons = useTranslations('buttons');
  const isDesktop = useIsDesktop();

  return (
    <section className={`${isDesktop ? 'container' : ''}`}>
      {!isDesktop ? (
        <CarouselWrapper
          data={data}
          headingTitle={headingTitle}
          href={href}
          renderItem={renderItem}
        />
      ) : (
        <div className="hidden space-y-[22px] py-[32px] md:block">
          <div className="flex items-center justify-between">
            <Heading text="" title={headings(headingTitle)} className="text-heading-5" />
            <Link href={href}>{buttons('showMore')}</Link>
          </div>
          <div className="grid grid-cols-4 items-center gap-[24px] *:justify-self-center">
            {data.map((item, index) => renderItem(item, index))}
          </div>
        </div>
      )}
    </section>
  );
}

export default SectionTemplate;
