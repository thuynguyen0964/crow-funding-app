import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import GotoLogin from 'src/Layout/GotoLogin';

const RequiredAuth = ({ allowPers }) => {
  const { user } = useSelector((state) => state.auth);
  const permiss = user?.permissions || [];
  const location = useLocation();

  return permiss.find((per) => allowPers?.includes(per)) ? (
    <Outlet></Outlet>
  ) : user ? (
    <Navigate to='/' state={{ from: location }} replace />
  ) : (
    <GotoLogin />
  );
};

RequiredAuth.propTypes = {
  children: PropTypes.node,
  allowPers: PropTypes.array,
};

export default RequiredAuth;
