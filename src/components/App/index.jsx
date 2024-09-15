
import './index.scss';
import * as React from 'react';
import { Fragment,Suspense,lazy } from 'react';
import { useRoutes, Navigate } from 'react-router-dom'
// import Login from '../../pages/Login'
// import Register from '../../pages/Register'
// import Pll from '../../pages/Pll'
// import Main from '../../pages/Main';
// import Dashboard from '../../pages/Main/Dashboard';
import {Provider} from 'react-redux'
import store from '../../redux/store'
import LazyLoad from '../LazyLoad';
const Login = lazy(()=> (import('../../pages/Login')))
const Register = lazy(()=> (import('../../pages/Register')))
const Pll = lazy(()=> (import('../../pages/Pll')))
const Main = lazy(()=> (import('../../pages/Main')))
const Dashboard = lazy(()=> (import('../../pages/Main/Dashboard')))
function App() {
  const elements = useRoutes([
    {
      path: '/Login',
      element: <Login />
    }, {
      path: '/register',
      element: <Register />
    }, {
      path: '/problemLogin',
      element: <Pll />
    }, {
      path: '/main',
      element: <Main />,
      children:[
        {
          path:'',
          element:<Dashboard/>
        },
        {
          path:'dashboard',
          element:<Dashboard/>
        }
      ]
    },{
      path: '/*',
      element: <Navigate to='/Login' />
    }, 
    ])
return (
  <Fragment>
    <Provider store={store}>
    <Suspense fallback={<LazyLoad/>}>
    {elements}
    </Suspense>
    </Provider>
  </Fragment>
);
}

export default App;


