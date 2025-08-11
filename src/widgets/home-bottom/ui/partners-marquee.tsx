import React from 'react';
import { getAdvertisements } from '@/entities/advertisement';
import { PartnersCard } from '@/entities/partners';
import { Heading } from '@/shared/ui';
import { getTranslations } from 'next-intl/server';

const PARTNERS_CODE = 'partners';

export const PartnersMarquee = async () => {
  const data = await getAdvertisements();
  const headings = await getTranslations('headings');

  if (!data) {
    console.error('Cannot load partners');
    return null;
  }

  const partners = data.data.find((item) => item.code === PARTNERS_CODE);

  if (!partners) {
    console.error('Cannot find partners from ads');
    return null;
  }

  return (
    <article className="flex flex-col gap-[32px]">
      <Heading text="" title={headings('partners')} className="text-heading-5 container" />
      <div className="relative hidden overflow-x-hidden lg:flex">
        <div className="animate-marquee flex gap-[24px] whitespace-nowrap py-2">
          {partners.adds.map((item) => (
            <PartnersCard key={item.id} partner={item} />
          ))}
        </div>

        <div className="animate-marquee2 absolute left-[24px] top-0 flex gap-[24px] whitespace-nowrap py-2">
          {partners.adds.map((item) => (
            <PartnersCard key={item.id} partner={item} />
          ))}
        </div>
      </div>
    </article>
  );
};
