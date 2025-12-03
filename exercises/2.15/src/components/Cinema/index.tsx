import MovieItem from "../MovieItem";
import type { Movie } from "../../types";
interface CinemaProps {
  name: string;
  movies: Movie[];
}

const Cinema = (props: CinemaProps) => (
  <div>
    <h2>{props.name}</h2>
    <ul>
      {props.movies.map((movie) => (
        <li key={movie.title}>
          <MovieItem 
          movie = {movie}
          />
        </li>
      ))}
    </ul>
  </div>
);

export default Cinema;