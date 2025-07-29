import { ITranslation } from '@/shared/types';

export type GetPostInfoDTO = {
  status_code: number;
  message: string;
  data: PostDetailed[];
};

export type PostDetailed = {
  id: number;
  powerseo_title: string;
  powerseo_description: string;
  powerseo_keywords: string;
  content_html: string;
  author: null | string;
  title: string;
  slug: string;
  published_at: string;
  more_photo: string[];
  afisha_phone: null | string;
  afisha_address: null | string;
  afisha_phone_new: string[];
  main_image: string;
  url: string;
  views: number;
  summary: string;
  has_summary: true;
  categories: {
    id: number;
    name: string;
    pivot: {
      post_id: number;
      category_id: number;
    };
    translations: ITranslation[];
  }[];
};
