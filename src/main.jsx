import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { jsxDEV } from "react/jsx-dev-runtime";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
     <App /> 
     <ToastContainer
      position="bottom-right" 
      closeOnClick 
      pauseOnFocusLoss
      draggable
      pauseOnHover/>
   </BrowserRouter>
  </React.StrictMode>,
)
