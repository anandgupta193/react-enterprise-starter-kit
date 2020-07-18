import React, { lazy, Suspense } from 'react';
import Loader from './loader/Loader';

const Home = lazy(() => import('./home/Home'));
const App = () => (
  <Suspense fallback={<Loader />}>
    <Home />
  </Suspense>
);

export default App;
