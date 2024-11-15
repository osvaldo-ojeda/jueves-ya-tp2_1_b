import { Router } from "express";
import Controllers from "../controllers/Controllers.js";

const routes = Router();

const controller= new Controllers()

routes.get("/:zona", controller.getByZona)
// routes.get("/", controller.getAll)
routes.post("/", controller.createVoto)


export default routes;
