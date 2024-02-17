import { Router } from "express";
import { GetAllDoacoesController } from "../controller/Doacoes/GetAllDoacoesController.js";     // Recuperar
import { GetByIdDoacoesController } from "../controller/Doacoes/GetByIdDoacoesController.js";   // Recuperar
import { CreateDoacoesController } from "../controller/Doacoes/CreateDoacoesController.js";     // Criar
import { UpdateDoacoesController } from "../controller/Doacoes/UpdateDoacoesController.js";     // Atualizar
import { DeleteDoacoesController } from "../controller/Doacoes/DeleteDoacoesController.js";     // Deletar 

const doacoesRouter = Router();

// Get All
const getAllDoacoesController = new GetAllDoacoesController();
doacoesRouter.get('/doacoes', getAllDoacoesController.handle);

// Get By ID
const getByIdDoacoesController = new GetByIdDoacoesController();
doacoesRouter.get('/doacoes/:id', getByIdDoacoesController.handle);

// Create
const createDoacoesController = new CreateDoacoesController();
doacoesRouter.post('/doacoes', createDoacoesController.handle);

// Update
const updateDoacoesController = new UpdateDoacoesController();
doacoesRouter.put('/doacoes', updateDoacoesController.handle);

// Delete
const deleteDoacoesController = new DeleteDoacoesController();
doacoesRouter.delete('/doacoes', deleteDoacoesController.handle);

export { doacoesRouter };
