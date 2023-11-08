import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles.css"
import { SocketProvider } from './context/socketContext';
import AppRouter from './router/AppRouter';
import { AuthProvider } from './context/authContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <SocketProvider>
      <AppRouter />
    </SocketProvider>
  </AuthProvider>
);
