import { AdvertisementType } from '@/entities/advertisement';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
  partner: AdvertisementType;
}

export function PartnersCard({ partner }: Props) {
  return (
    <Link
      href={partner.url}
      className="h-[100px] w-[240px] bg-white px-[54px] py-[21px] xl:h-[150px] xl:w-[360px] xl:px-[82px] xl:py-[32px]">
      <div className="relative h-[58px] w-[130px] xl:h-[86px] xl:w-[196px]">
        <Image src={partner.media} alt={partner.title} fill className="object-contain" />
      </div>
    </Link>
  );
}
