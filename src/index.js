import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import Toko from './pages/toko';
import DetailToko from './pages/detailtoko';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div className="shopping-list">
    <h1>Shopping List for </h1>
    <ul>
      <li><a href="/toko">mini tokopedia</a></li>
      <li><a href="/detailtoko">detail toko</a></li>
      <li>home</li>
    </ul>
  </div>,
  },
  {
    path: "/home",
    element:<App /> ,
  },
  {
    path: "/toko",
    element:<Toko /> ,
  },
  {
    path: "/detailtoko/:idtoko/:idtoko1",
    element:<DetailToko /> ,
  },
]);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
