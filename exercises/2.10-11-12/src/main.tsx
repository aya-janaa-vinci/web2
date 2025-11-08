import React from 'react'
import ReactDom from 'react-dom/client'
import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './components/App/index.tsx'
import HomePage from './components/pages/HomePage.tsx'
import CinemaPage from './components/pages/CinemaPage.tsx'
import MovieListPage from './components/pages/MovieListPage.tsx'

const router = createBrowserRouter([
  {
    path : "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />
      },
      {
        path: "cinemas",
        element: <CinemaPage />
      },
      {
        path: "movie-list",
        element: <MovieListPage />
      }
    ],
  },
]);

ReactDom.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
