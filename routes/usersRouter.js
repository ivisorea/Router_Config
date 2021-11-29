import { Router } from "express";
import { getAllUsers, getUserById, createUser } from "../controllers/users.js";



const usersRouter = Router();

usersRouter.route("/").get(getAllUsers).post(createUser);
usersRouter.route("/:id").get(getUserById);

export default usersRouter;