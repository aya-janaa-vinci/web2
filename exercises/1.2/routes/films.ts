import { Router } from "express";
import { Film } from "../types";

const router = Router();

export default router;

const films : Film[] = [
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

router.get("/",(_req,res)=>{
return res.json(films);
});

