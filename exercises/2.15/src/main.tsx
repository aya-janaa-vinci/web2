import React from 'react'
import ReactDom from 'react-dom/client'
import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './components/App/index.tsx'
import HomePage from './components/pages/HomePage.tsx'
import CinemaPage from './components/pages/CinemaPage.tsx'
import MovieListPage from './components/pages/MovieListPage.tsx'
import AddMoviePage from './components/pages/AddMoviePage.tsx'
import MoviePage from './components/pages/MoviePage.tsx'

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
      },
      {
        path: "add-movie",
        element: <AddMoviePage />
      }, 
      {
        path: "movies/:id",
        element: <MoviePage />
      }
    ],
  },
]);

ReactDom.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
