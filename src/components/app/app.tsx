// Core
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Others
import { AppRoute } from '../../consts';
import { PrivateRoute } from '../private-route';

// Pages
const Main = lazy(() => import('../../pages/main-page/main-page'));
const SignIn = lazy(() => import('../../pages/sign-in-page/sign-in-page'));
const Room = lazy(() => import('../../pages/room-page/room-page'));
const Favorite = lazy(() => import('../../pages/favorite-page/favorite-page'));
const NotFound = lazy(() => import('../../pages/not-found-page/not-found-page'));

// Components
export const App = (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route
        path={AppRoute.Root}
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <Main />
          </Suspense>
        }
      />
      <Route
        path={AppRoute.SignIn}
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <SignIn />
          </Suspense>
        }
      />
      <Route
        path={AppRoute.Room}
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <Room />
          </Suspense>
        }
      />
      <Route
        path={AppRoute.Favorites}
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <PrivateRoute>
              <Favorite />
            </PrivateRoute>
          </Suspense>
        }
      />
      <Route
        path={AppRoute.Other}
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <NotFound />
          </Suspense>
        }
      />
    </Routes>
  </BrowserRouter>
);
