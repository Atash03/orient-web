'use client';
import { EditorNewsCard } from '@/entities/news';
import { NewsModelMid } from '@/entities/news/model';
import { CarouselWrapper } from '@/features/carousel';
import { CarouselItem } from '@/shared/components/ui/carousel';
import React from 'react';

interface Props extends React.HTMLAttributes<HTMLElement> {
  data: NewsModelMid[];
}

const styles: {
  [key: number]: string;
} = {
  0: 'col-span-2 row-span-2 text-heading-3 lg:flex lg:flex-col',
  1: 'lg:flex lg:flex-col',
  2: 'lg:flex lg:flex-col',
  3: 'hidden xl:block',
  4: 'hidden xl:block',
};

const EditorsChoice: React.FC<Props> = ({ data }) => {
  return (
    <>
      <CarouselWrapper<NewsModelMid>
        data={data}
        headingTitle="editorsChoice"
        href=""
        bgGreen
        renderItem={(item) => (
          <CarouselItem key={item.id} className="basis-2/3 md:basis-1/3">
            <EditorNewsCard item={item} />
          </CarouselItem>
        )}
      />
      <div className="container hidden grid-cols-3 grid-rows-2 gap-[24px] lg:grid xl:grid-cols-4">
        {data.map(
          (item, i) =>
            [0, 1, 2, 3, 4].includes(i) && (
              <EditorNewsCard key={i} item={item} className={styles[i]} />
            ),
        )}
      </div>
    </>
  );
};

export default EditorsChoice;
