
import './index.scss';
import * as React from 'react';
import { Fragment } from 'react';
import { useRoutes,Navigate } from 'react-router-dom'
import Login from '../../pages/Login'
import Register from '../../pages/Register'
import Pll from '../../pages/Pll'
function App() {
  const elements = useRoutes([
    {
      path:'/Login',
      element:<Login/>
    },{
      path:'/',
      element:<Navigate to='/Login'/>
    },{
      path:'/register',
      element:<Register/>
    },{
        path:'/problemLogin',
        element:<Pll/>
    }
    ])
  return (
    <Fragment>
      {elements}
    </Fragment>
  );
}

export default App;


