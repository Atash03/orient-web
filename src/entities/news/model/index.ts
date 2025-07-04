export interface NewsModel {
  has_summary: boolean;
  id: number;
  main_image: string;
  published_at: string;
  slug: string;
  summary: string;
  title: string;
  type: string;
  url: string;
}

export interface NewsModelMid {
  categories: Category[];
  excerpt: string;
  has_summary: boolean;
  id: number;
  main_image: string;
  published_at: string;
  slug: string;
  summary: string;
  title: string;
  type: string;
  type_post: string;
  url: string;
}

interface Category {
  name: string;
  pivot: {
    category_id: number;
    post_id: number;
  };
  translations: [];
}
