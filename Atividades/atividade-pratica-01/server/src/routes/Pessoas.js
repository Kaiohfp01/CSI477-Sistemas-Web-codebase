import { Router } from "express";
import { GetAllPessoasController } from "../controller/Pessoas/GetAllPessoasController.js";
import { GetByIdPessoasController } from "../controller/Pessoas/GetByIdPessoasController.js";
import { CreatePessoasController } from "../controller/Pessoas/CreatePessoasController.js";
import { UpdatePessoasController } from "../controller/Pessoas/UpdatePessoasController.js";
import { DeletePessoasController } from "../controller/Pessoas/DeletePessoasController.js";

const pessoasRouter = Router();

// Get All
const getAllPessoasController = new GetAllPessoasController();
pessoasRouter.get('/pessoas', getAllPessoasController.handle);

// Get By ID
const getByIdPessoasController = new GetByIdPessoasController();
pessoasRouter.get('/pessoas/:id', getByIdPessoasController.handle);

// Create
const createPessoasController = new CreatePessoasController();
pessoasRouter.post('/pessoas', createPessoasController.handle);

// Update
const updatePessoasController = new UpdatePessoasController();
pessoasRouter.put('/pessoas', updatePessoasController.handle);

// Delete
const deletePessoasController = new DeletePessoasController();
pessoasRouter.delete('/pessoas', deletePessoasController.handle);

export { pessoasRouter };
