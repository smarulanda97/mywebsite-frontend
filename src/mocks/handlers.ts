import {
  jsonApiMocks,
  nodePortfolioMocks,
  routerTranslatePathMocks,
} from "@/src/mocks/handlers/index";

export const handlers = [...routerTranslatePathMocks, ...jsonApiMocks, ...nodePortfolioMocks];
