import { Router } from "express";
import { GetAllTiposSanguineosController } from "../controller/TiposSanguineos/GetAllTiposSanguineosController.js";
import { GetByIdTiposSanguineosController } from "../controller/TiposSanguineos/GetByIdTiposSanguineosController.js";
import { CreateTiposSanguineosController } from "../controller/TiposSanguineos/CreateTiposSanguineosController.js";
import { UpdateTiposSanguineosController } from "../controller/TiposSanguineos/UpdateTiposSanguineosController.js";
import { DeleteTiposSanguineosController } from "../controller/TiposSanguineos/DeleteTiposSanguineosController.js";

const tiposSanguineosRouter = Router();

// Get All
const getAllTiposSanguineosController = new GetAllTiposSanguineosController();
tiposSanguineosRouter.get('/tipos-sanguineos', getAllTiposSanguineosController.handle);

// Get By ID
const getByIdTiposSanguineosController = new GetByIdTiposSanguineosController();
tiposSanguineosRouter.get('/tipos-sanguineos/:id', getByIdTiposSanguineosController.handle);

// Create
const createTiposSanguineosController = new CreateTiposSanguineosController();
tiposSanguineosRouter.post('/tipos-sanguineos', createTiposSanguineosController.handle);

// Update
const updateTiposSanguineosController = new UpdateTiposSanguineosController();
tiposSanguineosRouter.put('/tipos-sanguineos', updateTiposSanguineosController.handle);

// Delete
const deleteTiposSanguineosController = new DeleteTiposSanguineosController();
tiposSanguineosRouter.delete('/tipos-sanguineos', deleteTiposSanguineosController.handle);

export { tiposSanguineosRouter };
