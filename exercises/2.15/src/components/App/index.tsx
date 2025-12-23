import Header from "../Header";
import "./App.css";
import Footer from "../Footer";
import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "../Navbar";
import type { Movie, MovieContext, NewMovie } from "../../types";
import { useEffect, useState } from "react";
import { addMovie, fetchMovies } from "../../utils/film-service";

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const navigate = useNavigate();

  const initMovies = async () => {
    try {
      const movies = await fetchMovies();
      setMovies(movies);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    initMovies();
  }, []);

  const onMovieAdded = async (newMovie: NewMovie) => {
    console.log("Movie to add:", newMovie);
    try {
      const movieToBeAdded = await addMovie(newMovie);
      console.log("Movie added:", movieToBeAdded);
      await initMovies();
      navigate("/movie-list");
    } catch (error) {
      console.error(error);
    }
  };
  
  const movieContext: MovieContext = { //Donne aux pg enfants la liste des films et la fonction pour en ajouter
    movies,
    onMovieAdded,
  };

  return (
    <div>
      <Header urlLogo="https://media.istockphoto.com/id/1429764305/fr/vectoriel/bande-de-film-vierge-isol%C3%A9e-sur-le-fond-blanc.jpg?s=1024x1024&w=is&k=20&c=is5Y6cun0NC8PxJd51p4YnUoLUpyb758Bdigh4Bqn48=">
        <h1>Tous sur les films</h1>
        <NavBar /*affiche le navbar dans le header*/ />
      </Header>

      <main className="page-content">
        <Outlet context={movieContext} />{" "}
        {/* Ici, le contenu des routes enfants sera affiché, contexte = n'importe quelle donnée ou fonction que nous souhaitons partager avec les routes "enfants". */}
      </main>

      <Footer urlLogo="https://media.istockphoto.com/id/1202770152/fr/photo/bobine-de-film-disolement-sur-le-fond-jaune-lumineux-dans-les-couleurs-pastel.jpg?s=1024x1024&w=is&k=20&c=2yKBrC8oyimPdW-5IxFWN_zxFPVK3KWYL9OE2gVmVX4=">
        <p>© myMovies</p>
      </Footer>
    </div>
  );
};

export default App;
