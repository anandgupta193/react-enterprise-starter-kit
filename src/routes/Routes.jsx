import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loader from '../components/loader/Loader';
import NotFound from './Routes.lazy';
import App from '../components/App';

const RoutePaths = () => (
  <>
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<App />} end />
          <Route path="/not-found" element={<NotFound />} end />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </>
);
export default RoutePaths;
