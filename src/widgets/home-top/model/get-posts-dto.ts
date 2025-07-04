import { PostModel } from '@/entities/posts';

export interface GetPostsDTO {
  data: {
    current_page: 1;
    data: PostModel[];
    first_page_url: string;
    last_page: number;
    last_page_url: string;
    next_page_url: string;
    path: string;
    per_page: number;
    prev_page_url: null | string;
    from: number;
    to: number;
    total: number;
  };
  message: string;
  status_code: number;
}
