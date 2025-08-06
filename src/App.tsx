import {
  ErrorBoundary,
  Footer,
  Header,
  PokemonDetail,
  Tooltip,
} from '@components/';
import { AboutMe, NotFound, Search } from '@pages/index';
import { ROUTE_PATH } from '@utils/routers';
import type { RootState } from '@utils/types';
import type React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';

const App = (): React.JSX.Element => {
  const selectedCount = useSelector(
    (state: RootState) => state.checkbox.selectedCount
  );
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
            {selectedCount > 0 && <Tooltip selectedCount={selectedCount} />}
          </BrowserRouter>
        </div>
      </ErrorBoundary>
    </>
  );
};

export default App;
