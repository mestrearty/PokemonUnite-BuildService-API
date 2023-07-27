import { Router } from "express";
import pokemonRouter from "./pokemon.router";


const routes = Router();

routes.use('/pokemon', pokemonRouter);

routes.get(`/teste`, (request, response) => {
    return response.json({ mensage: "Service Under Construction" });
});

export default routes;