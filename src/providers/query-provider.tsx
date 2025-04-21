'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactNode, useState } from 'react';

const QueryProvider = ({ children }: { children: ReactNode }) => {
  const [queryClient] = useState(new QueryClient({
    defaultOptions: {
      mutations: {
        onError: (error: any) => {
          console.log('Error: ', error.message);

          if (error.status === 502 || error.message === 'Network Error') {
            console.log('Server Timeout');
          }
        }
      }
    }
  }));

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
};

export default QueryProvider;