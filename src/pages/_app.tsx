import React from "react";
import { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { ThemeProvider } from "styled-components";
import { ReactQueryDevtools } from "react-query/devtools";
import { Hydrate, QueryClientProvider } from "react-query";

import { queryClient } from "@/lib";
import { Layout } from "@/components";
import { GlobalStyles, light, dark, theme } from "@/styles";

import "bootstrap/dist/css/bootstrap.min.css";

function App({ Component, pageProps }: AppProps) {
  const [qClient] = React.useState(() => queryClient);

  return (
    <QueryClientProvider client={qClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider theme={light}>
          <GlobalStyles />
          <Layout>
            <>
              <NextNProgress
                height={3}
                stopDelayMs={200}
                startPosition={0.3}
                showOnShallow={true}
                color={theme.colors.primary}
                nonce={"nonce"}
                options={{}}
              />
              <Component {...pageProps} />
            </>
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

export default App;
