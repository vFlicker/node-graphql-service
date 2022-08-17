import { dataSources } from '../config';

type DataSources = ReturnType<typeof dataSources>;

export type Context = {
  token: string;
  dataSources: DataSources;
};

export type Id = string;

export type Pagination = {
  offset?: any;
  limit?: any;
};
