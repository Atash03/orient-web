import { NewsModelMid } from '@/entities/news/model';

export interface GetHomeMidDataResponse {
  data: {
    popular: NewsModelMid[];
    redaktor: NewsModelMid[];
    world: NewsModelMid[];
  };
  message: string;
  status_code: number;
}
