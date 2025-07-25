import type React from 'react';

import { ErrorBoundary, Footer, Header } from './components';
import { Search } from './pages';

const App = (): React.JSX.Element => {
  return (
    <>
      <ErrorBoundary>
        <Header />
        <Search />
        <Footer />
      </ErrorBoundary>
    </>
  );
};

export default App;
