import React from "react";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
import { render as defaultRender, RenderResult } from "@testing-library/react";

import { dark } from "@/styles";

type DefaultParameters = Parameters<typeof defaultRender>;
type RenderUI = DefaultParameters[0];
type RenderOptions = DefaultParameters[1];

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export const Wrapper: React.FC = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={dark}>{children}</ThemeProvider>
    </QueryClientProvider>
  );
};

export function render(ui: RenderUI, { wrapper, ...options }: RenderOptions = {}): RenderResult {
  if (!wrapper) {
    // eslint-disable-next-line react/display-name
    wrapper = Wrapper;
  }

  return defaultRender(ui, { wrapper, ...options });
}
