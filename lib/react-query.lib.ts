import { QueryClient as ReactQueryClient } from "react-query";

export const queryClient = new ReactQueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});
