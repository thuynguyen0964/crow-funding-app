import React from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = React.lazy(() => import('src/Pages/Home'));
const Login = React.lazy(() => import('src/Pages/Login'));
const Register = React.lazy(() => import('src/Pages/Register'));

const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  );
};

export default Routing;
