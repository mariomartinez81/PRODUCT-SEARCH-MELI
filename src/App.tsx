/* eslint-disable @typescript-eslint/no-unused-vars */
import { Suspense, useState } from 'react';

import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex h-full">
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Router />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
