/* eslint-disable @typescript-eslint/no-unused-vars */
import { Suspense } from 'react';

import './sass/globals.sass';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes';
import ErrorBoundary from './components/common/ErrorBoundaty';

function App() {
  return (
    <div className="flex h-full">
      <ErrorBoundary>
        <BrowserRouter>
          <Suspense fallback={<></>}>
            <Router />
          </Suspense>
        </BrowserRouter>
      </ErrorBoundary>
    </div>
  );
}

export default App;
