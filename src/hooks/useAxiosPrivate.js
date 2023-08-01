import { useSelector } from 'react-redux';
import { useRefreshToken } from './useRefresh';
import { useEffect } from 'react';
import { apiAuth } from 'src/api';

export function useAxiosPrivate() {
  const refresh = useRefreshToken();
  const { auth } = useSelector((state) => state);

  useEffect(() => {
    const requestInterSector = apiAuth.interceptors.request.use(
      (config) => {
        if (!config.headers['Authorization']) {
          config.headers['Authorization'] = `Bearer ${auth.accessToken}`;
        }
        return config;
      },
      (error) => {
        Promise.reject(error);
      }
    );

    const responseInterSector = apiAuth.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error.config;
        if (error?.response?.status === 403 && !prevRequest.sent) {
          prevRequest.sent = true;
          const newAccessToken = await refresh();
          prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
          return apiAuth(prevRequest);
        }
      }
    );

    return () => {
      apiAuth.interceptors.request.eject(requestInterSector);
      apiAuth.interceptors.response.eject(responseInterSector);
    };
  }, [auth.accessToken, refresh]);

  return apiAuth;
}
