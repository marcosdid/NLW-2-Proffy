import express from "express";
import ClassesController from "./controllers/classesController";
import ConnectionController from "./controllers/ConnectionController";
import UsersController from "./controllers/UsersController";

const routes = express.Router();
const classesControllers = new ClassesController();
const ConnectionsController = new ConnectionController();
const UserController = new UsersController();

routes.post("/users", UserController.create);
routes.post("/authenticate", UserController.login);

routes.get("/classes", classesControllers.index);
routes.post("/classes", classesControllers.create);

routes.get("/connections", ConnectionsController.index);
routes.post("/connections", ConnectionsController.create);

export default routes;
