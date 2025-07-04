import { ITranslation } from '@/shared/types';

export interface PhotoModel {
  id: number;
  name: string;
  media_file: {
    media: string;
    media_title: string;
  }[];
  poster_file: string;
  published_at: string;
  type: 'photo';
  subtitle: null | string;
  row_num: number;
  translations: ITranslation[];
}
