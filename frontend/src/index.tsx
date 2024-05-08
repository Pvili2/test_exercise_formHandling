import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className='main_container w-full h-[100vh] flex justify-center items-center'>
      <App />
    </div>
  </React.StrictMode>
);