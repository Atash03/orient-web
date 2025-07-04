// Types
export { type GetDataDTO } from './get-data-response-dto';

export interface ModelCategory {
  id: number;
  name: string;
  pivot?: { post_id: number; category_id: number };
  translations: ITranslation[];
}

export interface ITranslation {
  id: number;
  locale: string;
  model_id: string;
  model_type: string;
  attribute_data: string;
}
