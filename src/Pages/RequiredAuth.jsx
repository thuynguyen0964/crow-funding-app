import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import GotoLogin from 'src/Layout/GotoLogin';

const RequiredAuth = ({ children }) => {
  const user = useSelector((state) => state.auth.user);

  return <>{user ? children : <GotoLogin />}</>;
};

RequiredAuth.propTypes = {
  children: PropTypes.node,
};

export default RequiredAuth;
