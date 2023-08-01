import { useSelector } from 'react-redux';
import { useRefreshToken } from './useRefresh';
import { useEffect } from 'react';
import { api } from 'src/api';

export function useAxiosPrivate() {
  const refresh = useRefreshToken();
  const { accessToken } = useSelector((state) => state.auth);

  useEffect(() => {
    const requestInterSector = api.interceptors.request.use(
      (config) => {
        if (!config.headers['Authorization']) {
          config.headers['Authorization'] = `Bearer ${accessToken}`;
        }
        return config;
      },
      (error) => {
        Promise.reject(error);
      }
    );

    const responseInterSector = api.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error.config;
        if (error?.response?.status === 403 && !prevRequest.sent) {
          prevRequest.sent = true;
          const newAccessToken = await refresh();
          prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
          return api(prevRequest);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      api.interceptors.request.eject(requestInterSector);
      api.interceptors.response.eject(responseInterSector);
    };
  }, [accessToken, refresh]);

  return api;
}
