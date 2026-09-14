import express from "express"
const userRoute = express.Router();
import {createUser, deleteUser , getSingleUser , updateUser, getAllUsers, loginUser} from '../controller/userController.js';
import userModel from "../model/userModel.js";

userRoute.post("/new-user", createUser)
userRoute.get("/get-one-user/:id", getSingleUser)
userRoute.delete("/delete-user/:id", deleteUser)
userRoute.patch("/update-user/:id", updateUser)
userRoute.get("/all-users", getAllUsers)
userRoute.get("/login", loginUser)

export default userRoute
//finById camel casing
//find_by_id snake casing