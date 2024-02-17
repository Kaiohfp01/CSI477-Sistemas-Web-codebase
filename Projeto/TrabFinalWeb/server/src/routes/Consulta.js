import { Router } from "express";
import { GetAllConsultaController } from "../controller/Consulta/GetAllConsultaController.js";
import { GetByIdConsultaController } from "../controller/Consulta/GetByIdConsultaController.js";
import { CreateConsultaController } from "../controller/Consulta/CreateConsultaController.js";
import { UpdateConsultaController } from "../controller/Consulta/UpdateConsultaController.js";
import { DeleteConsultaController } from "../controller/Consulta/DeleteConsultaController.js";

const consultaRouter = Router();

// Get All
const getAllConsultasController = new GetAllConsultaController();
consultaRouter.get('/consultas', getAllConsultasController.handle);

// Get By ID
const getByIdConsultaController = new GetByIdConsultaController();
consultaRouter.get('/consultas/:id', getByIdConsultaController.handle);

// Create
const createConsultaController = new CreateConsultaController();
consultaRouter.post('/consultas', createConsultaController.handle);

// Update
const updateConsultaController = new UpdateConsultaController();
consultaRouter.put('/consultas', updateConsultaController.handle);

// Delete
const deleteConsultaController = new DeleteConsultaController();
consultaRouter.delete('/consultas', deleteConsultaController.handle);

export { consultaRouter };
