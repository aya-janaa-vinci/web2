import { Text } from "../types";
import { parse } from "../utils/json";
import path from "node:path";
const jsonDbPath = path.join(__dirname, "/../data/texts.json");

const defaultTexts : Text[] = [
{
  id : "967979ee-4c4b-4f93-920b-115976fa4abb",
  content : "Heyyyy !!",
  level : "easy"
}, 
{
 id : "98c72e0e-db05-442a-b035-061f56f7e7f8",
  content : "Hola Ketal",
  level : "medium"
}, 
{
 id : "45a3397c-d9bd-440b-8099-4346a38d142",
  content : "Hallo, Ik eet graag pannenkoeken",
  level : "hard"
}
];

function readAllTexts(level : string | undefined){
  const texts = parse(jsonDbPath, defaultTexts);
  return level ? texts.filter((text) => text.level === level) : texts;
};

export{
  readAllTexts,

};