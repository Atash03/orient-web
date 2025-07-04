'use client';
import React from 'react';
import SectionTemplate from './section-template';
import { PhotoCard, PhotoModel } from '@/entities/photo';
import { VideoCard, VideoModel } from '@/entities/video';
import { CarouselItem } from '@/shared/components/ui/carousel';
import { useIsDesktop } from '@/shared/lib/hooks';
import { PostModel } from '@/entities/posts';
import { EditorNewsCard } from '@/entities/news';

interface Props {
  photos: PhotoModel[];
  videos: VideoModel[];
  posts: PostModel[];
}

function SectionsList({ photos, videos, posts }: Props) {
  const isDesktop = useIsDesktop();

  return (
    <div className="flex flex-col gap-[20px]">
      <SectionTemplate<PostModel>
        data={[posts[0], posts[1], posts[2], posts[3]]}
        headingTitle="articles"
        href=""
        renderItem={(item) =>
          !isDesktop ? (
            <CarouselItem key={item.id} className="basis-2/3 md:basis-1/3">
              <EditorNewsCard item={item} />
            </CarouselItem>
          ) : (
            <EditorNewsCard key={item.id} item={item} />
          )
        }
      />
      <SectionTemplate<VideoModel>
        data={videos}
        headingTitle="videos"
        href=""
        renderItem={(item) =>
          !isDesktop ? (
            <CarouselItem key={item.id} className="basis-2/3 md:basis-1/3">
              <VideoCard video={item} />
            </CarouselItem>
          ) : (
            <VideoCard key={item.id} video={item} />
          )
        }
      />
      <SectionTemplate<PhotoModel>
        data={photos}
        headingTitle="photos"
        href=""
        renderItem={(item) =>
          !isDesktop ? (
            <CarouselItem key={item.id} className="basis-2/3 md:basis-1/3">
              <PhotoCard photo={item} />
            </CarouselItem>
          ) : (
            <PhotoCard key={item.id} photo={item} />
          )
        }
      />
    </div>
  );
}

export default SectionsList;
