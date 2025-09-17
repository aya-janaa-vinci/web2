import express from "express";
import router from "./routes/films";

const app = express();

export default app;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/films", router);


