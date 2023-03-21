import axios from "axios";
import jwtDecode from "jwt-decode";
import { NavigateFunction } from "react-router-dom";

const tokenName = '@ede-casa/token';

export const getToken = () => localStorage.getItem(tokenName);
export const setToken = (token : string) => localStorage.setItem(tokenName, token);
export const removeToken = () => localStorage.removeItem(tokenName);

interface TokenProps {
  sub: string
}

export const getTokenClaims = () => {
  const token = getToken();

  if (token === null) {
    return {sub: ''}
  }

  return jwtDecode<TokenProps>(token)
}

export const validateAuthenticated = (err : unknown, navigate: NavigateFunction) => {
  if (axios.isAxiosError(err)) {
    if (err.response?.status === 401) {
      removeToken()
      navigate('/login')
    }
  } else {
    throw err
  }
}