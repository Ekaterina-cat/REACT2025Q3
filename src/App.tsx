import type React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';

import { ErrorBoundary, Footer, Header } from './components';
import PokemonDetail from './components/details-pokemon/render-details-pokemon';
import { AboutMe, NotFound, Search } from './pages';
import { ROUTE_PATH } from './routers/constants/routers';

const App = (): React.JSX.Element => {
  return (
    <>
      <ErrorBoundary>
        <div className="min-h-screen bg-base-fon transition-colors dark:bg-white">
          <BrowserRouter>
            <Header />
            <main className="grid">
              <Routes>
                <Route
                  path="/"
                  element={<Navigate to={ROUTE_PATH.MAIN} replace />}
                />
                <Route path={ROUTE_PATH.MAIN} element={<Search />} />
                <Route
                  path={ROUTE_PATH.DETAILSPOKEMON}
                  element={
                    <div className="grid grid-cols-2 gap-10">
                      <Search />
                      <PokemonDetail />
                    </div>
                  }
                />
                <Route path={ROUTE_PATH.NOT_FOUND} element={<NotFound />} />
                <Route path={ROUTE_PATH.ABOUTME} element={<AboutMe />} />
              </Routes>
            </main>
            <Footer />
          </BrowserRouter>
        </div>
      </ErrorBoundary>
    </>
  );
};

export default App;
