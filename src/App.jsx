import { useEffect } from 'react';
import Routing from './Routes';
import Toasty from './components/Effect/Toasty';
import { useDispatch, useSelector } from 'react-redux';
import { authRefreshWhenReload, authUpdate } from './store/auth/authSlice';
import { getTokens, logOut } from './utils/auth';

function App() {
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();

  useEffect(() => {
    const { access_token } = getTokens();
    if (user && user.id) {
      dispatch(authUpdate({ user, accessToken: access_token }));
    } else {
      const { refesh_token } = getTokens();
      if (refesh_token) {
        dispatch(authRefreshWhenReload(refesh_token));
      } else {
        dispatch(authUpdate({}));
        logOut();
      }
    }
  }, [dispatch, user]);

  return (
    <main className='App'>
      <Routing />
      <Toasty />
    </main>
  );
}

export default App;
