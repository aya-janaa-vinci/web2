import { Router } from "express";
import { Film, NewFilm } from "../types";
import { title } from "node:process";

const router = Router();

const films: Film[] = [
  {
    id: 1,
    title: "Qu'est-ce qu'on a fait au Bon Dieu ?",
    director: "Phillippe de Chauveron",
    duration: 97,
    budget: 13500000,
    description:
      "Un couple bourgeois catholique voit ses quatre filles épouser des hommes de religions et origines différentes, provoquant de nombreuses situations comiques.",
  },
  {
    id: 2,
    title: "Bird box",
    director: "Susanne Bier",
    duration: 124,
    budget: 19000000,
    description:
      "Dans un monde post-apocalyptique, une mère et ses deux enfants doivent traverser une rivière les yeux bandés pour échapper à des entités qui poussent les gens au suicide.",
  },
  {
    id: 3,
    title: "Sauvez Willy",
    director: "Simon Wincer",
    duration: 112,
    budget: 31000000,
    description:
      "Un jeune garçon se lie d'amitié avec une orque capturée et tente de la sauver de son parc aquatique pour la remettre dans son habitat naturel.",
    imageUrl: "https://m.media-amazon.com/images/I/71z7Ahd7oML._AC_SY679_.jpg",
  },
];
//JAI SUPP LE GET DE LEX 1 PSQ YA QUE UN SEUL GET QUI PEUT S'EXECUTER SINON SEUL LE PREMIER VA SE FAIRE
//EET LAUTRE NE SERA JAMAIS EXECUTER

//ex 1.3 : READ ALL FILTERED : Lire toutes les ressources de la collection selon le filtre donné

router.get("/", (req, res) => {
  if (req.query["minimum-duration"] === undefined) {
    return res.send(films);
  }
  const minDuration = Number(req.query["minimum-duration"]); //pour transformer une string en nombre

  if (isNaN(minDuration) || minDuration <= 0) {
    //vérifie que c des nb positifs
    res.status(400).send("Wrong minimum duration");
  }

  const filteredFilms = films.filter((film) => film.duration >= minDuration);

  return res.send(filteredFilms);
});

//ex 1.3 : READ ONE : Lire la ressource identifiée

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.status(400).send("id should be a valid number");
  }

  const film = films.find((film) => film.id === id);

  if (film === undefined) {
    return res.status(404).send("film not found");
  }
  return res.status(200).json(film);
});

//ex 1.3 :  CREATE ONE : Créer une ressource basée sur les données de la requête

router.post("/", (req, res) => {
  const body: unknown = req.body;

  if (
    !body ||
    typeof body !== "object" ||
    !("title" in body) ||
    !("director" in body) ||
    !("duration" in body) ||
    typeof body.title !== "string" ||
    typeof body.director !== "string" ||
    typeof body.duration !== "number" ||
    !body.title.trim() || //= le titre n'est pas rempli (vide ou juste composé d'espaces)
    !body.director.trim() ||
    body.duration <= 0 ||
    ("budget" in body &&
      (typeof body.budget !== "number" || body.budget <= 0)) ||
    ("description" in body &&
      (typeof body.description !== "string" || !body.description.trim())) ||
    ("imageUrl" in body &&
      (typeof body.imageUrl !== "string" || !body.imageUrl.trim()))
  ) {
    return res.status(400).send("Wrong body format !");
  }

  const newFilm = body as NewFilm;

  const existingFilm = films.find(
    (film) =>
      film.title.toLowerCase() === newFilm.title.toLowerCase() &&
      film.director.toLowerCase() === newFilm.director.toLowerCase()
  );

  if (existingFilm) {
    return res.status(409).send("Impossible de créer un film déja existant"); //conflit car j'essaye de créer un film qui existe déja
  }

  const nextId =
    films.reduce((acc, film) => (film.id > acc ? film.id : acc), 0) + 1; //Si l’id du film actuel est plus grand que l’accumulateur (acc), alors : on prend film.id comme nouveau maximum.

  const addedFilm: Film = { id: nextId, ...newFilm }; //créer un film sur base du newFilm dans la requete avec le bon id

  films.push(addedFilm);

  return res.status(201).json(addedFilm);
});

