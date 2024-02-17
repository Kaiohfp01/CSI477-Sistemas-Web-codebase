import { Router } from "express";
import { GetAllLocaisColetaController } from "../controller/LocaisColeta/GetAllLocaisColetaController.js";     // Recuperar
import { GetByIdLocaisColetaController } from "../controller/LocaisColeta/GetByIdLocaisColetaController.js";   // Recuperar
import { CreateLocaisColetaController } from "../controller/LocaisColeta/CreateLocaisColetaController.js";     // Criar
import { UpdateLocaisColetaController } from "../controller/LocaisColeta/UpdateLocaisColetaController.js";     // Atualizar
import { DeleteLocaisColetaController } from "../controller/LocaisColeta/DeleteLocaisColetaController.js";     // Deletar 

const locaisColetaRouter = Router();

// Get All
const getAllLocaisColetaController = new GetAllLocaisColetaController();
locaisColetaRouter.get('/LocaisColeta', getAllLocaisColetaController.handle);

// Get By ID
const getByIdLocaisColetaController = new GetByIdLocaisColetaController();
locaisColetaRouter.get('/LocaisColeta/:id', getByIdLocaisColetaController.handle);

// Create
const createLocaisColetaController = new CreateLocaisColetaController();
locaisColetaRouter.post('/LocaisColeta', createLocaisColetaController.handle);

// Update
const updateLocaisColetaController = new UpdateLocaisColetaController();
locaisColetaRouter.put('/LocaisColeta', updateLocaisColetaController.handle);

// Delete
const deleteLocaisColetaController = new DeleteLocaisColetaController();
locaisColetaRouter.delete('/LocaisColeta', deleteLocaisColetaController.handle);

export { locaisColetaRouter };
