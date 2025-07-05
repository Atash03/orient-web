'use client';
import { VideoModel } from '@/entities/video';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/components/ui/dialog';
import React from 'react';

interface Props {
  children: React.ReactNode;
  video: VideoModel;
}

export const VideoPlayer = ({ children, video }: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <Dialog onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-3xl border-none bg-transparent shadow-none">
        <DialogHeader>
          <DialogTitle className="text-white">{video.name}</DialogTitle>
        </DialogHeader>
        <video src={video.media_file[0].media} controls autoPlay className="w-full" />
      </DialogContent>
    </Dialog>
  );
};
