import { Router } from "express";
import { readAllTexts } from "../services/texts";

//const expectedKeys = ["content", "level"];
const expectedLevels = ["easy", "medium", "hard"];

const router = Router();

//READ ALL : Lire toutes les ressources de la collection
router.get("/",(req,res)=>{
const level = "level" in req.query && typeof req.query["level"] === "string"
? req.query["level"]
: undefined;

if(level !== undefined && !expectedLevels.includes(level)){
  return res.sendStatus(400);
}

const filteredFilms = readAllTexts(level);
return res.send(filteredFilms);
});