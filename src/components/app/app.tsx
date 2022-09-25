// Core
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Others
import { AppRoute } from '../../consts';

// Pages
import Main from '../../pages/main-page/main-page';
import SignIn from '../../pages/sign-in-page/sign-in-page';
import Room from '../../pages/room-page/room-page';
import Favorite from '../../pages/favorite-page/favorite-page';

// Components
export const App = (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route
        path={AppRoute.Root}
        element={<Main />}
      />
      <Route
        path={AppRoute.SignIn}
        element={<SignIn />}
      />
      <Route
        path={AppRoute.Room}
        element={<Room />}
      />
      <Route
        path={AppRoute.Favorites}
        element={<Favorite />}
      />
    </Routes>
  </BrowserRouter>
);
