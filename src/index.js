import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

const dialogs = [
  { name: 'Viktor', id: 1 },
  { name: 'Alex', id: 2 },
  { name: 'John', id: 3 },
  { name: 'Viktoria', id: 4 },
  { name: 'Inna', id: 5 },
];

const messages = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'Message2' },
  { id: 1, message: 'Message3' },
];

const posts = [
  { message: 'Hi, how are you?', likesCount: 20 },
  { message: 'This is my first post', likesCount: 50 },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App
        posts={posts}
        dialogs={dialogs}
        messages={messages}
      />
    </BrowserRouter>
  </React.StrictMode>
);