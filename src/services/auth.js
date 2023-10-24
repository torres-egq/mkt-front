import jwtDecode from 'jwt-decode';
// import { useHistory } from 'react-router-dom';
export const TOKEN_KEY = '@Token';
export const DATA_PERFIL = '@dados-Perfil';

export const isAuthenticated = () => {
  if (localStorage.getItem(TOKEN_KEY) !== null) {
    // verifica se o objeto esta vazio
    const verificaPerfilVazio = Object.entries(
      JSON.parse(localStorage.getItem(DATA_PERFIL))
    ).length;

    if (verificaPerfilVazio === 0) {
      logout();
    }

    return true;
  } else {
    return false;
  }
};
export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const login = (token, perfil) => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(DATA_PERFIL, JSON.stringify(perfil));
};

export const getData = () => {
  const token = localStorage.getItem(TOKEN_KEY);
  return jwtDecode(token);
};

export const getPerfil = () => {
  const perfil = JSON.parse(localStorage.getItem(DATA_PERFIL));
  return perfil;
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

// export const getRoutes = () => {

// }