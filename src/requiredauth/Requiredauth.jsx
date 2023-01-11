import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const Requiredauth = ({ children }) => {
  const location = useLocation();
  console.log(location.pathname);
  const isAuth = useSelector((state) => state.auth.isAuth);

  if (isAuth) {
    return children;
  } else {
    // state={{ from: location }} is not need hete it is used when there multiple page and want to return in the same page where came from
    return <Navigate to={"/login"} state={{ from: location }}></Navigate>;
  }
};
