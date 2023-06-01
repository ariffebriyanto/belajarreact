import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import Toko from './pages/toko';
import DetailToko from './pages/detailtoko';
import BasicTable from './pages/BasicTable';
import reportWebVitals from './reportWebVitals';
import Login from './login';
import Api from './pages/api';
import RoueteGuard from './RouteGuard';
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//const [isLogged, setIsLogged] = useState(false);
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element:<Login />,
//   //   <div className="shopping-list">
//   //   <h1>Shopping List for </h1>
//   //   <ul>
//   //     <li><a href="/toko">mini tokopedia</a></li>
//   //     <li><a href="/detailtoko/1/2">detail toko</a></li>
//   //     <li>home</li>
//   //   </ul>
//   // </div>,
//   },
//   {
//     path: "/home",
//     element:<App /> 
//   },
//   {
//     path: "/toko",
//     element:<Toko /> ,
//   },
//   {
//     path: "/detailtoko/:idtoko",
//     element:<DetailToko /> ,
//   },
//   {
//     path: "/basictable",
//     element:<BasicTable /> ,
//   },
//   {
//     path: "/api",
//     element:<Api /> ,
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<RoueteGuard />}>
            <Route path="/home" element={<App />} />
            <Route path="/basictable" element={<BasicTable />} />
            <Route path="/detailtoko/:idtoko" element={<DetailToko />} />
            <Route path="/toko" element={<Toko />} />
          </Route>
        </Routes>
        <Link to="/api"> Got to Api</Link>
      </Router>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
