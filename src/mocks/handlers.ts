import {
  endpointsMenu,
  endpointsJsonApi,
  endpointsNodePortfolio,
  endpointsRouterTranslatePath,
} from "@/src/mocks/endpoints";

export const handlers = [
  ...endpointsMenu,
  ...endpointsJsonApi,
  ...endpointsNodePortfolio,
  ...endpointsRouterTranslatePath,
];
