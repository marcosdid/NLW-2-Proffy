import express from "express";
import ClassesController from "./controllers/classesController";
import ConnectionController from "./controllers/ConnectionController";

const routes = express.Router();
const classesControllers = new ClassesController();
const ConnectionsController = new ConnectionController();

routes.get("/classes", classesControllers.index);
routes.post("/classes", classesControllers.create);

routes.get("/connections", ConnectionsController.index);
routes.post("/connections", ConnectionsController.create);

export default routes;
