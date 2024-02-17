import { Router } from "express";
import { GetAllVeterinarioController } from "../controller/Veterinario/GetAllVeterinarioController.js";
import { GetByIdVeterinarioController } from "../controller/Veterinario/GetByIdVeterinarioController.js";
import { CreateVeterinarioController } from "../controller/Veterinario/CreateVeterinarioController.js";
import { UpdateVeterinarioController } from "../controller/Veterinario/UpdateVeterinarioController.js";
import { DeleteVeterinarioController } from "../controller/Veterinario/DeleteVeterinarioController.js";

const veterinarioRouter = Router();

// Get All
const getAllVeterinariosController = new GetAllVeterinarioController();
veterinarioRouter.get('/veterinarios', getAllVeterinariosController.handle);

// Get By ID
const getByIdVeterinarioController = new GetByIdVeterinarioController();
veterinarioRouter.get('/veterinarios/:id', getByIdVeterinarioController.handle);

// Create
const createVeterinarioController = new CreateVeterinarioController();
veterinarioRouter.post('/veterinarios', createVeterinarioController.handle);

// Update
const updateVeterinarioController = new UpdateVeterinarioController();
veterinarioRouter.put('/veterinarios', updateVeterinarioController.handle);

// Delete
const deleteVeterinarioController = new DeleteVeterinarioController();
veterinarioRouter.delete('/veterinarios', deleteVeterinarioController.handle);

export { veterinarioRouter };
