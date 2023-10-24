import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Menu from '../Menu';

import { isAuthenticated, getData } from '../../services/auth';
// import { toast } from 'react-toastify';

const trataUrl = props => {
  const teste2 = props.match.path.split('/:');
  return teste2[0];
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <>
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <>
            {getData().acessos.find(teste => {
              return teste.rota === trataUrl(props);
            }) === undefined ? (
              <>
                {/* {toast.error('Rota não Autorizada')} */}
                <Redirect
                  to={{
                    pathname: `/`,
                    state: { from: props.location },
                  }}
                />
              </>
            ) : (
              <>
                {/* {window.scrollTo(0, 0)} */}

                {props.location.pathname === '/' ? (
                  <Component {...props} />
                ) : (
                  <>
                    {/* <NavBar> */}
                    <Component {...props} />
                    {/* </NavBar> */}
                  </>
                )}

                {/* </NavBar> */}
              </>
            )}
          </>
        ) : (
          <>
            {/* {console.log({
            pathname: '/',
            state: { route: props.location.pathname },
          })} */}
            {/* {console.log('caiu láaa')} */}
            {/* {rest.path ?  } */}
            {/* {('1', console.log(props.location))} */}
            <Redirect
              to={{
                pathname: `/login`,
                state: { from: props.location },
              }}
            />
          </>
        )
      }
    />
  </>
);

export default PrivateRoute;