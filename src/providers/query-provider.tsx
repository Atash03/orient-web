'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactNode, useState } from 'react';

const QueryProvider = ({ children }: { children: ReactNode }) => {
  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        mutations: {
          onError: (error) => {
            const err = error as Error & { status: number };

            if (err.status === 502 || err.message === 'Network Error') {
              console.log('Server Timeout');
            }
          },
        },
      },
    }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default QueryProvider;
