export type JsonApiParams = {
  params: {
    [key: string]: any;
    include?: string;
    sort?: string;
  };
};
