import { NewsModel } from '@/entities/news';

export interface GetHomeTopDataResponse {
  data: {
    featured: NewsModel[];
    lenta: NewsModel[];
    marquee: NewsModel[];
  };
  message: string;
  status_code: number;
}
