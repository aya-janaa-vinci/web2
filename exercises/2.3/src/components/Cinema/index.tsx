import type { Movie } from "../../types";

interface CinemaProps {
    name : string ;
   movies : Movie[];
  }

const Cinema = (props : CinemaProps) => {
    return (
      <div>
        <h2>{props.name}</h2>
        <ul>
         {props.movies.map((movie) => ( //transforme chaque film en un elt de liste avec comme clé unique son titre
            <li key={movie.title}>
                <strong>{movie.title}</strong> - Réalisateur : {movie.director}
                </li>
         ))}
        </ul>
      </div>
    );
  };

  export default Cinema;