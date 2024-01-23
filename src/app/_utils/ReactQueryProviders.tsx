'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode, useState } from 'react';

function ReactQueryProviders({ children }: { children: ReactNode }) {
  const [client] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          refetchOnMount: false,
          retry: 1,
          staleTime: 60 * 1000,
        },
      },
    }),
  );
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}

export default ReactQueryProviders;
