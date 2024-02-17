import { Router } from "express";
import { GetAllPetController } from "../controller/Pet/GetAllPetController.js";
import { GetByIdPetController } from "../controller/Pet/GetByIdPetController.js";
import { CreatePetController } from "../controller/Pet/CreatePetController.js";
import { UpdatePetController } from "../controller/Pet/UpdatePetController.js";
import { DeletePetController } from "../controller/Pet/DeletePetController.js";

const petRouter = Router();

// Get All
const getAllPetsController = new GetAllPetController();
petRouter.get('/pets', getAllPetsController.handle);

// Get By ID
const getByIdPetController = new GetByIdPetController();
petRouter.get('/pets/:id', getByIdPetController.handle);

// Create
const createPetController = new CreatePetController();
petRouter.post('/pets', createPetController.handle);

// Update
const updatePetController = new UpdatePetController();
petRouter.put('/pets', updatePetController.handle);

// Delete
const deletePetController = new DeletePetController();
petRouter.delete('/pets', deletePetController.handle);

export { petRouter };
