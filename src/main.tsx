import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import App from './App.tsx';
import NotFound from './components/NotFound.tsx';
import DevPage from './pages/DevPage.tsx';
import HomePage from './pages/HomePage.tsx';
import Login from './pages/Login.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<HomePage />}></Route>
      <Route path='developers/:id' element={<DevPage />} />
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
