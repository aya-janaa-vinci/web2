import { useState } from "react";
import type { Movie } from "../../types";

interface MovieItemProps {
  movie: Movie;
}

const MovieItem = ({ movie }: MovieItemProps) => {
  const [isClicked, setIsClicked] = useState(false); //variable d'état

  return (
    <li onClick={() => setIsClicked(!isClicked)}>
      <p>
        <strong>{movie.title}</strong> - Réalisateur : {movie.director}
      </p>
      <p>{isClicked ? <i>{movie.description}</i> : null}</p>
    </li>
  );
};

export default MovieItem;
