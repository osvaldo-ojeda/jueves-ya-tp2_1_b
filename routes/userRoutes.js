// import { Router } from "express";
// import UserControllers from "../controllers/userControllers.js";

// const userControllers= new UserControllers()

// const userRoutes = Router();

// userRoutes.get("/", (req, res) => {
//   res.send("get all users");
// });
// userRoutes.get("/:id", (req, res) => {
//   res.status(200).send("get user by id");
// });
// userRoutes.post("/", (req, res) => {
//   res.status(201).send("create user");
// });
// userRoutes.put("/:id", (req, res) => {
//   res.send("update user");
// });
// userRoutes.delete("/:id",  (req, res) => {
//   res.send("delete user");
// });

// export default userRoutes;

// -----------------------------------
import { Router } from "express";
import UserControllers from "../controllers/userControllers.js";

const userControllers = new UserControllers();

const userRoutes = Router();

userRoutes.get("/", userControllers.getAllUsers);
userRoutes.get("/:id", userControllers.getUserById);
userRoutes.post("/", userControllers.createUser);
userRoutes.put("/:id", userControllers.updateUser);
userRoutes.delete("/:id", userControllers.deleteUser);

export default userRoutes;
