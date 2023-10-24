// import axios from 'axios';
// import { getToken } from './auth';

// const api = axios.create({
//   baseURL: process.env.REACT_APP_URL_API,
//   // baseURL: 'https://api.barreirafiscal.app',
// });

// api.interceptors.request.use(async config => {
//   const token = getToken();

//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   console.log(config);
//   return config;
// });

// export default api;
import axios from 'axios';
import { getToken, logout } from './auth'; // Você deve criar uma função `removeToken` para limpar o token.
// import { toast } from 'react-toastify';

const api = axios.create({
//   baseURL: process.env.REACT_APP_URL_API,
  baseURL: '',
});

api.interceptors.request.use(async config => {
  const token = getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response && error.response.status === 401) {
      // Trate a resposta não autorizada (token inválido)
      // Remova o token inválido do armazenamento local
      // Redirecione o usuário para a página de login
    //   toast.error('Acesso Negado, Identificação gerada');
      logout();
      window.location.href = '/';
      // Ou utilize a navegação do React Router, se aplicável
    }
    return Promise.reject(error);
  }
);

export default api;