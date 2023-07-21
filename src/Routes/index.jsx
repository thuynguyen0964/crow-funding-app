import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loading from 'src/components/Effect';

const Dashboard = React.lazy(() => import('src/Pages/Dashboard'));
const Login = React.lazy(() => import('src/Pages/Login'));
const Register = React.lazy(() => import('src/Pages/Register'));

const Routing = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Suspense>
  );
};

export default Routing;
