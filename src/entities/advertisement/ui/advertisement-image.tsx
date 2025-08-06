'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AdvertisementData } from '../model/advertisement';

interface Props {
  advertisements: AdvertisementData;
  intervalTime?: number;
  width?: number;
  height?: number;
}

function AdvertisementImage({
  advertisements,
  intervalTime = 5000,
  width = 2000,
  height = 200,
}: Props) {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((prev) => (prev + 1) % advertisements.adds.length),
      intervalTime,
    );

    return () => clearInterval(timer);
  }, [advertisements.adds.length, intervalTime]);

  const currentItem = advertisements.adds[index];

  if (!currentItem) {
    setIndex((prev) => (prev + 1) % advertisements.adds.length);
    return null;
  }

  return (
    <Link href={currentItem.url} target="_blank">
      <Image
        src={currentItem.media}
        alt={currentItem.title}
        height={height}
        width={width}
        className="object-cover"
      />
    </Link>
  );
}

export default AdvertisementImage;
