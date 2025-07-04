import { ModelCategory } from '@/shared/types';

export interface PostModel {
  id: number;
  title: string;
  slug: string;
  featured: 0;
  published_at: string;
  more_photo: string[];
  afisha_phone: null | number | string;
  afisha_address: null | string;
  afisha_phone_new: string[];
  main_image: string;
  url: string;
  summary: string;
  has_summary: boolean;
  categories: ModelCategory[];
}
