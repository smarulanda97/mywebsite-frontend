import {
  jsonApiMocks,
  nodePortfolioMocks,
  routerTranslatePathMocks,
  menuMocks,
} from "@/src/mocks/handlers/index";

export const handlers = [
  ...routerTranslatePathMocks,
  ...jsonApiMocks,
  ...nodePortfolioMocks,
  ...menuMocks,
];
