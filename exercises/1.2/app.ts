import express from "express";
import router from "./routes/films";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


/*Middleware pour compter le nb de GET*/

let getCounter = 0;
app.use((req, _res, next) => {  //Comme il est attaché à app.use sans préciser de chemin, il s’applique à toutes les routes de mon app.
    if(req.method === "GET") {
        getCounter++;
        console.log(`GET counter : ${getCounter}`);
    }
    next();
});

app.use("/films",router); //Mettre les middlewares avant les routes pour qu'ils puissent s'éxecuter

export default app;