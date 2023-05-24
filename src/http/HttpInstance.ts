interface Response<T = any> {
  data: T;
}

export interface HttpInstance {
  get: <R>(
    url: string,
    options?: {
      params?: Record<string, string | number | boolean>;
    },
  ) => Promise<Response<R>>;
}
