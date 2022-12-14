import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from './pages/Home';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
