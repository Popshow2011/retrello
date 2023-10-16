import '@/index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from '@/pages/Auth/AuthProvider.tsx';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
    ,
  </React.StrictMode>,
);
