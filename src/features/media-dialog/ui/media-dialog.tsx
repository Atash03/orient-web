import { PhotoModel } from '@/entities/photo';
import { VideoModel } from '@/entities/video';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/shared/components/ui/carousel';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/components/ui/dialog';
import Image from 'next/image';
import React from 'react';

interface Props {
  children: React.ReactNode;
  media: VideoModel | PhotoModel;
}

export const MediaDialog = ({ children, media }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-5xl border-none bg-transparent shadow-none">
        <DialogHeader>
          <DialogTitle className="text-white">{media.name}</DialogTitle>
        </DialogHeader>
        {media.type === 'video' ? (
          <video src={media.media_file[0].media} controls autoPlay className="w-full" />
        ) : (
          <Carousel className="w-full">
            <CarouselContent>
              {media.media_file.map((file, index) => (
                <CarouselItem key={index} className="relative h-[300px] w-full">
                  <Image
                    src={file.media}
                    alt={file.media_title}
                    fill
                    className="size-full object-cover"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:block" />
            <CarouselNext className="hidden md:block" />
          </Carousel>
        )}
      </DialogContent>
    </Dialog>
  );
};
