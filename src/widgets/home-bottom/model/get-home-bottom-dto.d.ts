import { PhotoModel } from '@/entities/photo';
import { VideoModel } from '@/entities/video';

export interface GetHomeBottomDTO {
  data: {
    photo: PhotoModel[];
    video: VideoModel[];
  };
  message: string;
  status_code: number;
}
