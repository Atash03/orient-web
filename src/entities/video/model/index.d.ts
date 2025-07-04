import { ITranslation } from '@/shared/types';

export interface VideoModel {
  id: number;
  name: string;
  media_file: {
    media: string;
    media_title: string;
  }[];
  poster_file: string;
  published_at: string;
  type: 'video';
  subtitle: null | string;
  row_num: number;
  translations: ITranslation[];
}
