import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const Privete = ({ children }) => {
  const { user, setLoadding, Loadding } = useContext(AuthContext);
  const location = useLocation();
  if (Loadding) {
    return;
  }

  if (user && user?.mail && user?.photo && user?.name) {
    // console.log("privete")
    return children;
  }

  return <Navigate state={location.pathname} to={`/`}></Navigate>;
};

export default Privete;