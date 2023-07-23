import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from 'src/Pages/Login';
import Register from 'src/Pages/Register';
import Loading from 'src/components/Effect';

const Dashboard = React.lazy(() => import('src/Pages/Dashboard'));
const Campain = React.lazy(() => import('/src/Pages/Campain'));

const Routing = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/campain' element={<Campain />} />
      </Routes>
    </Suspense>
  );
};

export default Routing;
