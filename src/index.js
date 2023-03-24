import React from 'react';
import {createRoot} from "react-dom/client"
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Success from './Success';
import Login from './Login.jsx'

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="login" element={<Login />} />
<Route path="success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)