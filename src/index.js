import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from './contexts/auth/AuthProvider';
import { UserIdProvider } from './contexts/user_id/UserIdProvider';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <UserIdProvider>
          <App />
        </UserIdProvider>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);