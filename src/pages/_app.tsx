import React from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, Hydrate, QueryClientProvider } from "react-query";

import { Layout } from "@/components";
import { GlobalStyles, light, dark } from "@/styles";

import "bootstrap/dist/css/bootstrap.min.css";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider theme={light}>
          <GlobalStyles />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Hydrate>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  require("@/mocks");
}
