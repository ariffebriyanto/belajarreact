import React from 'react';
import { Navigate, Outlet } from "react-router-dom";
 
const RouteGuard = () => {
 
   function hasJWT() {
       let flag = false;
 
       //check user has JWT token
       localStorage.getItem("jwt") ? flag=true : flag=false
      
       return flag
   }
 
   return hasJWT() ? <Outlet /> : <Navigate to="/" />;
};
 
export default RouteGuard;