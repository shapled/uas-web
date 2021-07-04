export interface ResponseWrapper<T> {
  error: number;
  message: string;
  data: T;
}

export interface Pagination<T> {
  total: number;
  page: number;
  size: number;
  data: T[];
}

export interface App {
  id: number;
  app: string;
  description: string;
  status: number;
  created_at: Date;
}
