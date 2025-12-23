import PageTitle from "../PageTitle";
import MovieTitleList from "../MovieTitleList";
import type { MovieContext } from "../../types";
import { useOutletContext } from "react-router-dom";

const HomePage = () => {
  const { movies }:  MovieContext = useOutletContext();
  return (
    <div>
      <PageTitle title="myMovies" />
      <p>Welcome to iMovies, a site where you can find info about cinemas, movies...</p>
      <h4>My favorites movies </h4>
      <MovieTitleList movies = {movies} />
    </div>
  );
};
export default HomePage;