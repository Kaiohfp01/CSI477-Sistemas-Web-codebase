import { Router } from "express";
import { CreateUserController } from "../controller/User/CreateUserController.js";
import { LoginUserController } from "../controller/User/LoginUserController.js";

import { ValidateUserController } from "../controller/User/ValideUserController.js";

const userRouter = Router();

const createUserController = new CreateUserController();
userRouter.post('/users', createUserController.handle);

const loginUserController = new LoginUserController();
userRouter.post('/users/login', loginUserController.handle);

const validateUserController = new ValidateUserController();
userRouter.post('/users/validate', validateUserController.handle);
export { userRouter };