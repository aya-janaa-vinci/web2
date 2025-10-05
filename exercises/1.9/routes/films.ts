import { Router } from "express";
import { NewFilm } from "../types";
import { readAllFilms, readFilmById, createFilm, deleteFilm, updateFilm, updateOrCreateFilm} from "../services/films";

const router = Router();

    //ex 1.3 : READ ALL FILTERED : Lire toutes les ressources de la collection selon le filtre donné

router.get("/",(req,res)=>{
 const minDuration =
    "minimum-duration" in req.query
      ? Number(req.query["minimum-duration"])
      : undefined;

  if (minDuration !== undefined && (isNaN(minDuration) || minDuration <= 0)) {
    return res.sendStatus(400);
  }

  const filteredFilms = readAllFilms(minDuration);

  return res.send(filteredFilms);
});



    //ex 1.3 : READ ONE : Lire la ressource identifiée

router.get("/:id",(req,res)=>{
const id = Number(req.params.id)

    if(isNaN(id)){
        return res.sendStatus(400);
    }
  const film = readFilmById(id);

  if(!film){
    return res.sendStatus(404);
  }
return res.json(film);
});


    //ex 1.3 :  CREATE ONE : Créer une ressource basée sur les données de la requête

router.post("/",(req, res) => {
    const body: unknown = req.body;

    if(
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
            ){
                return res.status(400).send("Wrong body format !");
            }

const newFilm = body as NewFilm;


const addedFilm = createFilm(newFilm);
if(!addedFilm){
  return res.sendStatus(409);
}
return res.json(addedFilm);
    });

            
//ex 1.6 : DELETE ONE : Effacer la ressource identifiée

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    return res.status(400).send("id must be a valid number");
  }
  const deletedFilm = deleteFilm(id);

  if(!deletedFilm){
    return res.sendStatus(404);
  }
  return res.send(deletedFilm);
});

//UPDATE ONE : Mettre à jour les propriétés de la ressource par les valeurs données dans la requête, pour une ou plusieurs propriétés

router.patch("/:id", (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    return res.status(400).send("id must be a valid number");
  }

  const body: unknown = req.body;

  if (
    !body ||
    typeof body != "object" ||
    Object.keys(body).length === 0 ||
    ("title" in body &&
      (typeof body.title !== "string" || !body.title.trim())) ||
    ("director" in body &&
      (typeof body.director !== "string" || !body.director.trim())) ||
    ("duration" in body &&
      (typeof body.duration !== "number" || body.duration <= 0)) ||
    ("budget" in body &&
      (typeof body.budget !== "number" || body.budget <= 0)) ||
    ("description" in body &&
      (typeof body.description !== "string" || !body.description.trim())) ||
    ("imageUrl" in body &&
      (typeof body.imageUrl !== "string" || !body.imageUrl.trim()))
  ) {
    return res.sendStatus(400);
  }
  const updatedFilm = updateFilm(id, body); //copie toutes les propriétés envoyées dans la requête (body) et écrase celles qui existent déjà dans filmToUpdate.
if(!updatedFilm){
  return res.sendStatus(404);
}
  return res.send(updatedFilm);
});


//UPDATE ONE or CREATE ONE : Remplacer la ressource par une ressource reprenant les valeurs 
// données dans la requête, seulement si toutes les propriétés non optionnelles de la ressource 
// sont données ! Si la ressource n'existe pas, créer cette ressource seulement si l'id donné n'est pas déjà existant.

router.put("/:id", (req, res) => {
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
    !body.title.trim() ||
    !body.director.trim() ||
    body.duration <= 0 ||
    ("budget" in body &&
      (typeof body.budget !== "number" || body.budget <= 0)) ||
    ("description" in body &&
      (typeof body.description !== "string" || !body.description.trim())) ||
    ("imageUrl" in body &&
      (typeof body.imageUrl !== "string" || !body.imageUrl.trim()))
  ) {
    return res.sendStatus(400);
  }
  const id = Number(req.params.id);
  if(isNaN(id)){
    return res.status(400).send("id must be a valid number");
  }

  const addedFilm = updateOrCreateFilm(id, body as NewFilm);
  if(!addedFilm){
    return res.sendStatus(409);
  }
  return res.send(addedFilm);
});


export default router;