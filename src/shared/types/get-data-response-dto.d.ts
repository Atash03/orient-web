export interface GetDataDTO<T> {
  data: {
    current_page: number;
    data: T[];
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
