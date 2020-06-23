/**
 *
 * Asynchronously loads the component for Registration
 *
 */

import Loadable from 'react-loadable';
import Loading from 'components/Loading';
import React from 'react';
export default Loadable({
  loader: () => import('./index'),
  loading: () => <Loading/>,
});
