/* eslint-disable no-undef */
import Cookies from 'js-cookie';

const accessTokenKey = 'crow_access_token';
const refeshTokenKey = 'crow_refesh_token';

const infoCookies = {
  expires: 30,
  domain: import.meta.env.VITE_COOKIE_DOMAIN,
};

const saveTokens = (access_token, refesh_token) => {
  // If true -> set cookies
  if (access_token && refesh_token) {
    Cookies.set(accessTokenKey, access_token, { ...infoCookies });
    Cookies.set(refeshTokenKey, refesh_token, { ...infoCookies });
  } else {
    // remove cookies
    Cookies.remove(accessTokenKey, {
      ...infoCookies,
      path: '/',
      domain: import.meta.env.VITE_COOKIE_DOMAIN,
    });
    Cookies.remove(refeshTokenKey, {
      ...infoCookies,
      path: '/',
      domain: import.meta.env.VITE_COOKIE_DOMAIN,
    });
  }
};

const getTokens = () => {
  const access_token = Cookies.get(accessTokenKey);
  const refesh_token = Cookies.get(refeshTokenKey);

  return { access_token, refesh_token };
};

export { saveTokens, getTokens };
