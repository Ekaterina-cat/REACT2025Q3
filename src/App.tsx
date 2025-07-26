import type React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';

import { ErrorBoundary, Footer, Header } from './components';
import { AboutMe, NotFound, Search } from './pages';
import { ROUTE_PATH } from './routers/constants/routers';

const App = (): React.JSX.Element => {
  return (
    <>
      <ErrorBoundary>
        <BrowserRouter>
          <Header />
          <main className="main-container">
            <Routes>
              <Route path={ROUTE_PATH.MAIN} element={<Search />} />
              <Route path={ROUTE_PATH.NOT_FOUND} element={<NotFound />} />
              <Route path={ROUTE_PATH.ABOUTME} element={<AboutMe />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </ErrorBoundary>
    </>
  );
};

export default App;
