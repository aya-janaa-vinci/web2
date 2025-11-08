import { useState } from "react";
import Header from "../Header";
import PageTitle from "../PageTitle";
import "./App.css";
import type { Movie } from "../../types";
import AddMovieForm from "../AddMovieForm";
import MovieListView from "../MovieListView";
import Footer from "../Footer";

const App = () => {
  const defaultMovies: Movie[] = [
    {
      title: "Doctor Strange in the Multiverse of Madness",
      director: "Sam Raimi",
      duration: 126,
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/1/17/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg",
      description:
        "Doctor Strange travels across the multiverse to protect America Chavez from a threat that endangers every universe.",
      budget: 200,
    },
    {
      title: "Black Panther",
      director: "Ryan Coogler",
      duration: 134,
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/9/9f/Black_Panther_poster.jpg",
      description:
        "T'Challa, the king of Wakanda, must defend his nation and claim his rightful place as Black Panther.",
      budget: 200,
    },
    {
      title: "Captain America: The Winter Soldier",
      director: "Anthony and Joe Russo",
      duration: 136,
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/9/9b/Captain_America_The_Winter_Soldier_poster.jpg",
      description:
        "Steve Rogers teams up with Black Widow to uncover a conspiracy within S.H.I.E.L.D. while facing the mysterious Winter Soldier.",
      budget: 170,
    },
    {
      title: "Spider-Man: No Way Home",
      director: "Jon Watts",
      duration: 148,
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg",
      description:
        "Peter Parker seeks Doctor Strange’s help to make his identity secret again, but the spell unleashes chaos across the multiverse.",
      budget: 200,
    },
    {
      title: "Black Widow",
      director: "Cate Shortland",
      duration: 134,
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/8/89/Black_Widow_%282021_film%29_poster.jpg",
      description:
        "Natasha Romanoff confronts the darker parts of her past when a dangerous conspiracy with ties to her former life arises.",
      budget: 200,
    },
  ];

  const [movies, setMovies] = useState(defaultMovies);

  const onMovieAdded = (newMovie: Movie) => {
    console.log("Movie to add : ", newMovie);
    setMovies([...movies, newMovie]);
  };

  return (
    <div>
      <Header urlLogo="https://media.istockphoto.com/id/1429764305/fr/vectoriel/bande-de-film-vierge-isol%C3%A9e-sur-le-fond-blanc.jpg?s=1024x1024&w=is&k=20&c=is5Y6cun0NC8PxJd51p4YnUoLUpyb758Bdigh4Bqn48=">
        <h1>Tous sur les films</h1>
      </Header>

      <main className="page-content">
        <PageTitle title="My favorite movies" />

        <MovieListView movies={movies} />

        <AddMovieForm
          onMovieAdded={
            onMovieAdded
          } /* “Je donne à AddMovieForm un cadeau qui s’appelle onMovieAdded (mon props), et ce cadeau est la fonction onMovieAdded que j’ai définie dans le parent (App).” */
        />
        
        <br /><br /><br /><br />
      </main>

      <Footer urlLogo="https://media.istockphoto.com/id/1202770152/fr/photo/bobine-de-film-disolement-sur-le-fond-jaune-lumineux-dans-les-couleurs-pastel.jpg?s=1024x1024&w=is&k=20&c=2yKBrC8oyimPdW-5IxFWN_zxFPVK3KWYL9OE2gVmVX4=">
        <p>© myMovies</p>
      </Footer>
    </div>
  );
};

export default App;
