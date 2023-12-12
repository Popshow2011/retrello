import '@/index.css';

import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from '@/pages/Auth/AuthProvider.tsx';
import { router } from '@/routes';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>,
);
