import { useMatch, useOutletContext } from "react-router-dom";
import type { MovieContext } from "../../types";
import MovieCard from "../MovieCard";

const MoviePage = () => {
    const {movies} : MovieContext = useOutletContext(); 
    
    const match = useMatch("/movies/:id"); //Vérifie si cette URL suit le schéma /movies/:id.
//Si oui ➝ elle renvoie un objet contenant les paramètres (comme l’id).
//Si non ➝ elle renvoie null.

const movieId = Number(match?.params.id);
if(isNaN(movieId)){
    return <p>Movie not found </p>;
}

const movieFound = movies.find((movie) => movie.id === movieId);
if(!movieFound){
    return <p>Movie not found</p>;
}

return (
    <MovieCard movie={movieFound} />
);
};

export default MoviePage;