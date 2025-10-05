import { Film, NewFilm } from "../types";
import path from "node:path";
import { parse, serialize } from "../utils/json";
const jsonDbPath = path.join(__dirname, "/../data/films.json");

const defaultFilms : Film[] = [
    {
        id : 1,
        title : "Qu'est-ce qu'on a fait au Bon Dieu ?",
        director : "Phillippe de Chauveron",
        duration : 97,
        budget : 13500000,
        description : "Un couple bourgeois catholique voit ses quatre filles épouser des hommes de religions et origines différentes, provoquant de nombreuses situations comiques."
    },
    {
       id : 2,
        title : "Bird box",
        director : "Susanne Bier",
        duration : 124,
        budget : 19000000,
        description : "Dans un monde post-apocalyptique, une mère et ses deux enfants doivent traverser une rivière les yeux bandés pour échapper à des entités qui poussent les gens au suicide."
    },
    {
        id : 3,
        title : "Sauvez Willy",
        director : "Simon Wincer",
        duration : 112,
        budget : 31000000,
        description : "Un jeune garçon se lie d'amitié avec une orque capturée et tente de la sauver de son parc aquatique pour la remettre dans son habitat naturel.",
        imageUrl : "https://m.media-amazon.com/images/I/71z7Ahd7oML._AC_SY679_.jpg"
    }
];

//ex 1.3 : READ ALL FILTERED : Lire toutes les ressources de la collection selon le filtre donné

function readAllFilms(minDuration : number | undefined): Film[] {
const films = parse(jsonDbPath, defaultFilms);
return minDuration 
? films.filter((film) => film.duration >= minDuration) 
: films;
};

function readFilmById(id : number): Film | undefined {
    const films = parse(jsonDbPath, defaultFilms);
    return films.find((film) => film.id===id);
};

function createFilm(newFilm : NewFilm) : Film | undefined {
const films = parse(jsonDbPath, defaultFilms);
const existingFilm = films.find((film)=>
            film.title.toLowerCase() === newFilm.title.toLowerCase() &&
            film.director.toLowerCase() === newFilm.director.toLowerCase());

 if (existingFilm) {
    return undefined;
  }

  const film = { id: nextId(), ...newFilm };

  films.push(film);
  serialize(jsonDbPath, films);

  return film;
};

function deleteFilm(id : number): Film | undefined {

    const films = parse(jsonDbPath, defaultFilms);
    const index = films.findIndex((film) => id === film.id);

  if (index === -1) {
    return undefined;
  }
  const deletedFilm = films[index];

  films.splice(index, 1); // 1 = supprimer 1 élément à partir de cet index

serialize(jsonDbPath, films);
return deletedFilm;
}

function updateFilm(id : number, updatedFilm : Partial<NewFilm>): Film | undefined {
    const films = parse(jsonDbPath, defaultFilms);
const index = films.findIndex((film) => film.id === id);

if(index === -1){
    return undefined;
}

 const film = { ...films[index], ...updatedFilm }; 
films[index] = film;
serialize(jsonDbPath,defaultFilms);

return film;
}


function updateOrCreateFilm(id : number, updatedFilm : NewFilm) : Film | undefined{
const films = parse(jsonDbPath, defaultFilms);

  const indexOfFilmToUpdate = films.findIndex((film) => film.id === id);
  if(indexOfFilmToUpdate === -1){
    return createFilm(updatedFilm);
  }
  const film = { ...films[indexOfFilmToUpdate], ...updatedFilm};
  films[indexOfFilmToUpdate] = film;
serialize(jsonDbPath, films);

return film;
}

const nextId = () =>
    parse(jsonDbPath, defaultFilms).reduce(
        (maxId, film) => Math.max(maxId, film.id), 0) + 1;

export {
    readAllFilms,
    readFilmById,
    createFilm,
    deleteFilm,
    updateFilm, 
    updateOrCreateFilm
}