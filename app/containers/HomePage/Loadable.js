/**
 * Asynchronously loads the component for HomePage
 */
import Loadable from 'react-loadable';
import React from 'react';
import Loading from 'components/Loading';

export default Loadable({
  loader: () => import('./index'),
  loading: <Loading/>,
});
